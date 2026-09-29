(() => {
  const canvas = document.getElementById('canvas');
  const ctx = canvas.getContext('2d', { alpha: false });
  const stage = document.getElementById('stage');
  const textInput = document.getElementById('textInput');
  const pauseButton = document.getElementById('pauseButton');
  const resetButton = document.getElementById('resetButton');
  const scatterButton = document.getElementById('scatterButton');
  const formButton = document.getElementById('formButton');
  const swarmButton = document.getElementById('swarmButton');
  const flowButton = document.getElementById('flowButton');
  const status = document.getElementById('status');

  const BG = '#f7f6f2';
  const FG = '#151515';
  const PT_TO_PX = 96 / 72;

  let width = 1, height = 1, dpr = 1;
  const particlePt = 5;
  const particlePx = particlePt * PT_TO_PX;
  const MIN_PARTICLES = 300;
  const MAX_PARTICLES = 1000;
  let targetText = 'A';
  let particles = [];
  let glyphSprites = new Map();
  let running = true;
  let last = performance.now();
  let pointer = { x: 0, y: 0, active: false };
  let rebuildToken = 0;
  let fieldMode = 'formed';
  let modeProgress = 1;

  function resizeCanvas() {
    const r = stage.getBoundingClientRect();
    width = Math.max(1, r.width);
    height = Math.max(1, r.height);
    dpr = Math.min(window.devicePixelRatio || 1, 2);
    canvas.width = Math.round(width * dpr);
    canvas.height = Math.round(height * dpr);
    canvas.style.width = `${width}px`;
    canvas.style.height = `${height}px`;
    ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    if (!pointer.active) {
      pointer.x = width * .5;
      pointer.y = height * .54;
    }
    rebuild();
  }

  function normalizedText() {
    return [...textInput.value].slice(0, 12).join('');
  }

  function makeGlyphSprite(ch) {
    const pad = Math.ceil(particlePx * 1.25);
    const measure = document.createElement('canvas').getContext('2d');
    measure.font = `700 ${particlePx}px KineksCompact, Arial, sans-serif`;
    const m = measure.measureText(ch);

    const actualW = Math.max(1, m.width);
    const actualH = Math.max(1, particlePx * 0.86);
    const s = Math.max(12, Math.ceil(Math.max(actualW, actualH) * 2.2 + pad * 2));

    const off = document.createElement('canvas');
    off.width = s;
    off.height = s;

    const c = off.getContext('2d');
    c.fillStyle = FG;
    c.textAlign = 'center';
    c.textBaseline = 'middle';
    c.font = `700 ${particlePx}px KineksCompact, Arial, sans-serif`;
    c.fillText(ch, s / 2, s / 2);

    return {
      canvas: off,
      halfW: s / 2,
      halfH: s / 2,
      actualW,
      actualH,
      radius: Math.max(actualW, actualH) * 0.52
    };
  }

  function rebuildSprites(text) {
    glyphSprites.clear();
    for (const ch of new Set([...text])) {
      glyphSprites.set(ch, makeGlyphSprite(ch));
    }
  }

  // Build the target from the actual Kineks Compact glyph mask.
  // We sample the FILLED glyph area, with a minimum center-to-center spacing
  // so the small glyph particles form a clean, non-overlapping texture.
  function buildTargetPoints(text) {
    const target = document.createElement('canvas');
    const w = Math.max(1000, Math.floor(width * .92));
    const h = Math.max(400, Math.floor(height * .9));
    target.width = w;
    target.height = h;

    const c = target.getContext('2d', { willReadFrequently: true });
    c.clearRect(0, 0, w, h);
    c.fillStyle = '#000';
    c.textAlign = 'left';
    c.textBaseline = 'middle';

    const fontSize = Math.max(120, Math.min(h * .74, w / Math.max(.55, text.length * .62)));
    c.font = `700 ${fontSize}px KineksCompact, Arial, sans-serif`;

    const metrics = c.measureText(text);
    let cursorX = (w - metrics.width) * .5;
    const baselineY = h * .54;
    const glyphRanges = [];

    for (const ch of [...text]) {
      const gm = c.measureText(ch);
      const startX = cursorX;
      c.fillText(ch, cursorX, baselineY);
      cursorX += gm.width;
      glyphRanges.push({ ch, x0: startX, x1: cursorX });
    }

    const image = c.getImageData(0, 0, w, h).data;
    const mask = new Uint8Array(w * h);

    for (let y = 0; y < h; y++) {
      for (let x = 0; x < w; x++) {
        mask[y * w + x] = image[(y * w + x) * 4 + 3] > 70 ? 1 : 0;
      }
    }

    const points = [];

    for (const glyph of glyphRanges) {
      const sprite = glyphSprites.get(glyph.ch);
      const actualW = sprite ? sprite.actualW : particlePx * .62;
      const actualH = sprite ? sprite.actualH : particlePx * .86;

      // The old version used a large circular radius, which made the
      // packing unnecessarily sparse. Use the actual ink footprint instead.
      // The collision diameter is intentionally tighter than the sprite box.
      const inkDiameter = Math.max(actualW, actualH) * .72;
      const minGap = Math.max(.15, particlePx * .025);
      const minDistance = Math.max(2.2, inkDiameter + minGap);

      // Find the actual filled bounds of this glyph.
      const sx = Math.max(0, Math.floor(glyph.x0));
      const ex = Math.min(w - 1, Math.ceil(glyph.x1));

      let areaPixels = 0;
      let minX = ex, maxX = sx, minY = h - 1, maxY = 0;

      for (let y = 0; y < h; y += 2) {
        for (let x = sx; x <= ex; x += 2) {
          if (!mask[y * w + x]) continue;
          areaPixels++;
          if (x < minX) minX = x;
          if (x > maxX) maxX = x;
          if (y < minY) minY = y;
          if (y > maxY) maxY = y;
        }
      }

      if (!areaPixels) continue;

      const sampledArea = areaPixels * 4;

      // Estimate how many 5pt glyphs can physically fit, then aim for a
      // high coverage ratio. This makes broad/open glyphs denser without
      // forcing the same count into every character.
      const effectiveFootprint = Math.max(2.2, Math.PI * Math.pow(minDistance * .5, 2));
      const capacity = sampledArea / effectiveFootprint;
      const desiredCount = Math.round(
        Math.max(MIN_PARTICLES, Math.min(MAX_PARTICLES, capacity * .92))
      );

      // Candidate lattice is much finer than collision distance.
      const step = Math.max(.9, minDistance * .32);
      const candidates = [];

      // Use a staggered lattice for even coverage rather than random rows.
      for (let y = Math.max(1, minY); y <= Math.min(h - 1, maxY); y += step) {
        const rowOffset = ((Math.floor(y / step) & 1) ? step * .5 : 0);

        for (let x = Math.max(1, minX); x <= Math.min(w - 1, maxX); x += step) {
          const px = Math.min(w - 1, x + rowOffset);
          const xi = Math.floor(px), yi = Math.floor(y);

          if (!mask[yi * w + xi]) continue;

          candidates.push({
            x: (px / w) * width,
            y: (y / h) * height,
            char: glyph.ch
          });
        }
      }

      // Shuffle candidate order, but keep a second deterministic pass below
      // to fill holes that random order can leave behind.
      for (let i = candidates.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [candidates[i], candidates[j]] = [candidates[j], candidates[i]];
      }

      const accepted = [];
      const cell = Math.max(3, minDistance);
      const buckets = new Map();
      const key = (gx, gy) => `${gx},${gy}`;

      function canPlace(p) {
        const gx = Math.floor(p.x / cell);
        const gy = Math.floor(p.y / cell);

        for (let oy = -2; oy <= 2; oy++) {
          for (let ox = -2; ox <= 2; ox++) {
            const arr = buckets.get(key(gx + ox, gy + oy));
            if (!arr) continue;

            for (const q of arr) {
              if (Math.hypot(p.x - q.x, p.y - q.y) < minDistance) return false;
            }
          }
        }
        return true;
      }

      function add(p) {
        const gx = Math.floor(p.x / cell);
        const gy = Math.floor(p.y / cell);
        const k = key(gx, gy);
        if (!buckets.has(k)) buckets.set(k, []);
        buckets.get(k).push(p);
        accepted.push(p);
      }

      for (const candidate of candidates) {
        if (accepted.length >= desiredCount) break;
        if (canPlace(candidate)) add(candidate);
      }

      // Deterministic fill pass. It prioritizes the interior of the glyph,
      // reducing the "hollow / airy" appearance while keeping collisions off.
      if (accepted.length < desiredCount) {
        const fillStep = Math.max(.7, minDistance * .22);

        for (let y = Math.max(1, minY); y <= Math.min(h - 1, maxY) && accepted.length < desiredCount; y += fillStep) {
          for (let x = Math.max(1, minX); x <= Math.min(w - 1, maxX) && accepted.length < desiredCount; x += fillStep) {
            const xi = Math.floor(x), yi = Math.floor(y);
            if (!mask[yi * w + xi]) continue;

            const p = {
              x: (x / w) * width,
              y: (y / h) * height,
              char: glyph.ch
            };

            if (canPlace(p)) add(p);
          }
        }
      }

      points.push(...accepted);
    }

    return points;
  }

  function makeParticle(point) {
    const angle = Math.random() * Math.PI * 2;
    const radius = Math.sqrt(Math.random()) * Math.min(width, height) * .58;

    const homeX = point.x;
    const homeY = point.y;

    return {
      x: fieldMode === 'scattered'
        ? Math.random() * width
        : width * .5 + Math.cos(angle) * radius,
      y: fieldMode === 'scattered'
        ? Math.random() * height
        : height * .54 + Math.sin(angle) * radius,
      vx: fieldMode === 'scattered' ? (Math.random() - .5) * 80 : (Math.random() - .5) * 110,
      vy: fieldMode === 'scattered' ? (Math.random() - .5) * 80 : (Math.random() - .5) * 110,
      angle: (Math.random() - .5) * .035,
      va: (Math.random() - .5) * .10,
      targetX: homeX,
      targetY: homeY,
      char: point.char,
      ch: point.char,
      phase: Math.random() * Math.PI * 2,
      radius: point.radius,
      scatterX: Math.random() * width,
      scatterY: Math.random() * height
    };
  }

  function rebuild() {
    fieldMode = 'formed';
    const token = ++rebuildToken;

    document.fonts.ready.then(() => {
      if (token !== rebuildToken) return;

      targetText = normalizedText();

      if (!targetText) {
        particles = [];
        status.textContent = '—';
        return;
      }

      rebuildSprites(targetText);

      const points = buildTargetPoints(targetText);

      if (!points.length) {
        particles = [];
        status.textContent = '—';
        return;
      }

      particles = points.map(point => makeParticle(point));

      // Count is adaptive per glyph. Show total actual particles in the footer.
      const total = points.length;
      status.textContent = `${targetText.toUpperCase()} · ${total} PARTICLES`;
    });
  }

  function update(dt, now) {
    const t = now * .001;

    for (const p of particles) {
      if (fieldMode === 'scattered') {
        const targetX = p.scatterX + Math.sin(t * .55 + p.phase) * 90;
        const targetY = p.scatterY + Math.cos(t * .48 + p.phase * 1.17) * 90;

        const dx = targetX - p.x;
        const dy = targetY - p.y;
        const d = Math.max(1, Math.hypot(dx, dy));

        p.vx += (dx / d) * 90 * dt;
        p.vy += (dy / d) * 90 * dt;

        if (p.x < 10) p.vx += 35 * dt;
        if (p.x > width - 10) p.vx -= 35 * dt;
        if (p.y < 10) p.vy += 35 * dt;
        if (p.y > height - 10) p.vy -= 35 * dt;

        p.vx *= Math.pow(.965, dt * 60);
        p.vy *= Math.pow(.965, dt * 60);

        const speed = Math.hypot(p.vx, p.vy);
        if (speed > 170) {
          p.vx = p.vx / speed * 170;
          p.vy = p.vy / speed * 170;
        }

        p.x += p.vx * dt;
        p.y += p.vy * dt;
        p.angle += p.va * dt * 35;
        continue;
      }

      if (fieldMode === 'swarm') {
        // Lightweight swarm field: particles orbit and steer as a collective
        // around the cursor, while a soft home force keeps them related to
        // their original glyph positions.
        const homeDx = p.targetX - p.x;
        const homeDy = p.targetY - p.y;
        const homeD = Math.max(1, Math.hypot(homeDx, homeDy));

        p.vx += (homeDx / homeD) * 80 * dt;
        p.vy += (homeDy / homeD) * 80 * dt;

        const cx = pointer.active ? pointer.x : width * .5;
        const cy = pointer.active ? pointer.y : height * .54;

        const dx = p.x - cx;
        const dy = p.y - cy;
        const d = Math.max(1, Math.hypot(dx, dy));
        const influence = Math.max(0, 1 - d / 520);

        // Tangential flock motion.
        const swirl = 520 * influence;
        p.vx += (-dy / d) * swirl * dt;
        p.vy += (dx / d) * swirl * dt;

        // Gentle radial steering keeps the group from collapsing into the
        // cursor while still making it feel collectively attracted to it.
        const radial = (1 - influence) * 28;
        p.vx -= (dx / d) * radial * dt;
        p.vy -= (dy / d) * radial * dt;

        const wave = Math.sin(t * .72 + p.phase);
        const wave2 = Math.cos(t * .61 + p.phase);
        p.vx += wave * 26 * dt;
        p.vy += wave2 * 22 * dt;

        p.vx *= Math.pow(.92, dt * 60);
        p.vy *= Math.pow(.92, dt * 60);

        const speed = Math.hypot(p.vx, p.vy);
        if (speed > 430) {
          p.vx = p.vx / speed * 430;
          p.vy = p.vy / speed * 430;
        }

        p.x += p.vx * dt;
        p.y += p.vy * dt;
        p.angle += p.va * dt * 40;
        continue;
      }

      if (fieldMode === 'flow') {
        // Cursor creates a directional flow field. Particles are carried
        // around the pointer, then softly settle back toward the glyph.
        const homeDx = p.targetX - p.x;
        const homeDy = p.targetY - p.y;
        const homeD = Math.max(1, Math.hypot(homeDx, homeDy));

        p.vx += (homeDx / homeD) * 105 * dt;
        p.vy += (homeDy / homeD) * 105 * dt;

        if (pointer.active) {
          const dx = p.x - pointer.x;
          const dy = p.y - pointer.y;
          const d = Math.max(1, Math.hypot(dx, dy));
          const influence = Math.max(0, 1 - d / 470);
          const force = 900 * influence;

          // Tangential flow around the pointer.
          p.vx += (-dy / d) * force * dt;
          p.vy += (dx / d) * force * dt;

          // A weaker forward pull keeps the field feeling fluid.
          p.vx += (dx / d) * force * .18 * dt;
          p.vy += (dy / d) * force * .18 * dt;
        } else {
          // Ambient flow even without a pointer.
          const wave = Math.sin(t * .7 + p.y * .006 + p.phase);
          p.vx += wave * 32 * dt;
          p.vy += Math.cos(t * .55 + p.x * .004) * 18 * dt;
        }

        p.vx *= Math.pow(.92, dt * 60);
        p.vy *= Math.pow(.92, dt * 60);

        const speed = Math.hypot(p.vx, p.vy);
        if (speed > 560) {
          p.vx = p.vx / speed * 560;
          p.vy = p.vy / speed * 560;
        }

        p.x += p.vx * dt;
        p.y += p.vy * dt;
        p.angle += p.va * dt * 45;
        continue;
      }

      // FORMED mode.
      const dx = p.targetX - p.x;
      const dy = p.targetY - p.y;
      const dist = Math.max(.5, Math.hypot(dx, dy));
      const nx = dx / dist, ny = dy / dist;

      let ax = nx * Math.min(1800, 320 + dist * 8);
      let ay = ny * Math.min(1800, 320 + dist * 8);

      const swirl = Math.min(170, 18 + dist * .28);
      ax += -ny * swirl;
      ay += nx * swirl;

      ax += Math.sin(t * .8 + p.phase + p.y * .005) * 11;
      ay += Math.cos(t * .75 + p.phase + p.x * .004) * 11;

      if (pointer.active) {
        const dxp = pointer.x - p.x;
        const dyp = pointer.y - p.y;
        const pd = Math.max(1, Math.hypot(dxp, dyp));
        const influence = Math.max(0, 1 - pd / 230);
        const pnx = dxp / pd, pny = dyp / pd;
        ax += pnx * 560 * influence;
        ay += pny * 560 * influence;
        ax += -pny * 220 * influence;
        ay += pnx * 220 * influence;
      }

      p.vx += ax * dt;
      p.vy += ay * dt;

      const damping = Math.pow(.885, dt * 60);
      p.vx *= damping;
      p.vy *= damping;

      const maxSpeed = 760;
      const speed = Math.hypot(p.vx, p.vy);
      if (speed > maxSpeed) {
        p.vx = p.vx / speed * maxSpeed;
        p.vy = p.vy / speed * maxSpeed;
      }

      p.x += p.vx * dt;
      p.y += p.vy * dt;

      if (dist < 14) {
        p.x += Math.sin(t * 1.4 + p.phase) * .08;
        p.y += Math.cos(t * 1.3 + p.phase) * .08;
      }

      p.va += (p.vx * .000012 - p.vy * .000009);
      p.va *= .97;
      p.angle += p.va * dt * 60;
    }
  }

  function render() {
    ctx.fillStyle = BG;
    ctx.fillRect(0, 0, width, height);

    for (const p of particles) {
      const sprite = glyphSprites.get(p.ch);
      if (!sprite) continue;

      if (Math.abs(p.angle) < .025) {
        ctx.drawImage(sprite.canvas, p.x - sprite.halfW, p.y - sprite.halfH);
      } else {
        ctx.save();
        ctx.translate(p.x, p.y);
        ctx.rotate(p.angle);
        ctx.drawImage(sprite.canvas, -sprite.halfW, -sprite.halfH);
        ctx.restore();
      }
    }
  }

  function loop(now) {
    const dt = Math.min((now - last) / 1000, .033);
    last = now;
    if (running) update(dt, now);
    render();
    requestAnimationFrame(loop);
  }

  textInput.addEventListener('input', rebuild);

  pauseButton.addEventListener('click', () => {
    running = !running;
    pauseButton.textContent = running ? 'Pause' : 'Play';
    last = performance.now();
  });

  resetButton.addEventListener('click', rebuild);

  function setMode(mode) {
    fieldMode = mode;

    for (const button of [formButton, scatterButton, swarmButton, flowButton]) {
      button.classList.remove('active');
    }

    const active =
      mode === 'formed' ? formButton :
      mode === 'scattered' ? scatterButton :
      mode === 'swarm' ? swarmButton :
      flowButton;

    active.classList.add('active');

    if (mode === 'scattered') {
      for (const p of particles) {
        p.scatterX = Math.random() * width;
        p.scatterY = Math.random() * height;
        p.vx += (Math.random() - .5) * 220;
        p.vy += (Math.random() - .5) * 220;
      }
    }

    if (mode === 'flow') {
      for (const p of particles) {
        p.vx += (Math.random() - .5) * 90;
        p.vy += (Math.random() - .5) * 90;
      }
    }
  }

  scatterButton.addEventListener('click', () => setMode('scattered'));
  formButton.addEventListener('click', () => setMode('formed'));
  swarmButton.addEventListener('click', () => setMode('swarm'));
  flowButton.addEventListener('click', () => setMode('flow'));

  stage.addEventListener('pointermove', e => {
    const r = stage.getBoundingClientRect();
    pointer.x = e.clientX - r.left;
    pointer.y = e.clientY - r.top;
    pointer.active = true;
  });

  stage.addEventListener('pointerleave', () => {
    pointer.active = false;
  });

  window.addEventListener('resize', resizeCanvas);

  document.fonts.ready.then(() => {
    resizeCanvas();
    rebuild();
  });

  requestAnimationFrame(loop);
})();
