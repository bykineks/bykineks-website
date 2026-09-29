(() => {
  const stage = document.getElementById('stage');
  const word = document.getElementById('word');
  const textInput = document.getElementById('textInput');
  const sizeRange = document.getElementById('sizeRange');
  const sizeValue = document.getElementById('sizeValue');
  const resetButton = document.getElementById('resetButton');
  const meteorButton = document.getElementById('meteorButton');
  const worldStatus = document.getElementById('worldStatus');
  const worldButtons = [...document.querySelectorAll('.world')];

  const PT_TO_PX = 96 / 72;
  const worlds = {
    earth: { label: 'Earth', g: 1, gravity: 980, bounce: 0.30, drag: 0.997 },
    space: { label: 'Space', g: 0, gravity: 0, bounce: 1, drag: 0.9998 },
    moon:  { label: 'Moon',  g: 0.16, gravity: 155, bounce: 0.72, drag: 0.999 },
    sun:   { label: 'Sun',   g: 27.01, gravity: 3600, bounce: 0.08, drag: 0.985 },
    blackhole: { label: 'Black Hole', g: null, gravity: 0, bounce: 0, drag: 0.992 }
  };

  let world = 'earth';
  let sizePt = 72;
  let bodies = [];
  let active = false;
  let lastTime = performance.now();
  let meteorTimer = null;
  let layoutToken = 0;

  function sizePx() {
    return sizePt * PT_TO_PX;
  }

  function metrics() {
    return { w: stage.clientWidth, h: stage.clientHeight };
  }

  function setGlyphFont(el) {
    el.style.fontSize = `${sizePx()}px`;
    el.style.fontFamily = 'KineksText, Arial, sans-serif';
    el.style.fontWeight = '700';
    el.style.lineHeight = '1';
  }

  function attachPointerEvents(body) {
    const el = body.el;

    el.addEventListener('pointerdown', e => {
      e.preventDefault();
      body.dragging = true;
      body.pointerId = e.pointerId;

      const r = stage.getBoundingClientRect();
      const px = e.clientX - r.left;
      const py = e.clientY - r.top;
      body.offsetX = px - body.x;
      body.offsetY = py - body.y;
      body.lastPX = px;
      body.lastPY = py;
      body.lastT = performance.now();
      el.classList.add('dragging');
      el.setPointerCapture(e.pointerId);
    });

    el.addEventListener('pointermove', e => {
      if (!body.dragging || e.pointerId !== body.pointerId) return;
      const r = stage.getBoundingClientRect();
      const px = e.clientX - r.left;
      const py = e.clientY - r.top;
      const now = performance.now();
      const dt = Math.max((now - body.lastT) / 1000, 0.008);
      body.vx = (px - body.lastPX) / dt;
      body.vy = (py - body.lastPY) / dt;
      body.x = px - body.offsetX;
      body.y = py - body.offsetY;
      body.lastPX = px;
      body.lastPY = py;
      body.lastT = now;
    });

    const release = () => {
      if (!body.dragging) return;
      body.dragging = false;
      body.pointerId = null;
      el.classList.remove('dragging');
      if (!active) {
        body.vx = 0;
        body.vy = 0;
        body.va = 0;
      }
    };

    el.addEventListener('pointerup', release);
    el.addEventListener('pointercancel', release);
  }

  function createGlyph(char, index) {
    const el = document.createElement('span');
    el.className = 'glyph';
    el.textContent = char === ' ' ? '\u00a0' : char;
    setGlyphFont(el);
    word.appendChild(el);

    const rect = el.getBoundingClientRect();
    const body = {
      el,
      char,
      index,
      x: 0,
      y: 0,
      width: Math.max(1, rect.width),
      height: Math.max(1, rect.height),
      vx: 0,
      vy: 0,
      angle: 0,
      va: 0,
      dragging: false,
      pointerId: null,
      offsetX: 0,
      offsetY: 0,
      lastPX: 0,
      lastPY: 0,
      lastT: 0
    };

    bodies.push(body);
    attachPointerEvents(body);
    return body;
  }

  async function layoutText() {
    const token = ++layoutToken;
    const text = [...textInput.value].slice(0, 80);
    const { w, h } = metrics();

    word.innerHTML = '';
    bodies = [];
    active = false;

    if (!text.length) return;

    // Wait for the actual Kineks Text font before measuring. This prevents
    // fallback-font metrics from throwing the sentence out of alignment.
    if (document.fonts && document.fonts.ready) await document.fonts.ready;
    if (token !== layoutToken) return;

    text.forEach((ch, i) => createGlyph(ch, i));

    // Re-measure after the font is definitely applied.
    bodies.forEach(b => {
      const rect = b.el.getBoundingClientRect();
      b.width = Math.max(1, rect.width);
      b.height = Math.max(1, rect.height);
    });

    const gap = Math.max(0, sizePx() * 0.004);
    const totalWidth = bodies.reduce((sum, b) => sum + b.width, 0) + gap * Math.max(0, bodies.length - 1);
    const startX = Math.max(0, (w - totalWidth) / 2);

    // Center using the actual visual bounds of the whole line, not a single glyph.
    const maxHeight = Math.max(...bodies.map(b => b.height));
    const startY = Math.max(0, (h - maxHeight) / 2);

    let x = startX;
    bodies.forEach(b => {
      b.x = x;
      // Glyph top positions are aligned to the same visual line.
      b.y = startY;
      x += b.width + gap;
    });

    render();
  }

  function resizeBodies() {
    // Rebuild rather than attempting to scale physical bodies: this guarantees
    // that a resized viewport keeps the resting, non-physics state centered.
    if (!active) layoutText();
    else {
      bodies.forEach(b => {
        setGlyphFont(b.el);
        const rect = b.el.getBoundingClientRect();
        b.width = Math.max(1, rect.width);
        b.height = Math.max(1, rect.height);
      });
    }
  }

  function activateWorld(next) {
    world = next;
    active = true;
    const data = worlds[next];
    worldButtons.forEach(btn => btn.classList.toggle('active', btn.dataset.world === next));
    worldStatus.textContent = data.g === null ? data.label : `${data.label} · ${data.g.toFixed(2)} g`;

    // The sentence stays exactly where it was until the user chooses a world.
    // Then gravity takes over from rest.
    bodies.forEach((b, i) => {
      b.vx = 0;
      b.vy = 0;
      b.va = 0;
      if (next === 'space') {
        const a = (i / Math.max(1, bodies.length)) * Math.PI * 2 + (Math.random() - 0.5) * 0.7;
        const speed = 18 + Math.random() * 28;
        b.vx = Math.cos(a) * speed;
        b.vy = Math.sin(a) * speed;
        b.va = (Math.random() - 0.5) * 0.6;
      }
    });
  }

  function reset() {
    clearTimeout(meteorTimer);
    stage.classList.remove('meteor-impact');
    active = false;
    worldButtons.forEach(btn => btn.classList.toggle('active', btn.dataset.world === 'earth'));
    worldStatus.textContent = 'Earth · 1.00 g';
    layoutText();
  }

  function meteorStrike() {
    if (!bodies.length) return;

    active = true;
    clearTimeout(meteorTimer);
    stage.classList.remove('meteor-impact');
    void stage.offsetWidth;
    stage.classList.add('meteor-impact');

    // A compact, central impact produces the feeling of a single meteor strike.
    const impactX = stage.clientWidth * 0.5;
    const impactY = stage.clientHeight * 0.5;

    bodies.forEach((b, i) => {
      const bx = b.x + b.width / 2;
      const by = b.y + b.height / 2;
      let dx = bx - impactX;
      let dy = by - impactY;
      const len = Math.hypot(dx, dy) || 1;
      const radial = 900 + (i % 5) * 90;
      const tangent = 300;

      b.vx = (dx / len) * radial + (-dy / len) * tangent + (Math.random() - 0.5) * 180;
      b.vy = (dy / len) * radial + ( dx / len) * tangent + (Math.random() - 0.5) * 180;
      b.va = (Math.random() - 0.5) * 5.5;
      b.angle = (Math.random() - 0.5) * 8;
    });

    meteorTimer = setTimeout(() => stage.classList.remove('meteor-impact'), 520);
  }

  function collide(a, b) {
    const ax = a.x + a.width / 2;
    const ay = a.y + a.height / 2;
    const bx = b.x + b.width / 2;
    const by = b.y + b.height / 2;
    const ox = Math.min(a.x + a.width, b.x + b.width) - Math.max(a.x, b.x);
    const oy = Math.min(a.y + a.height, b.y + b.height) - Math.max(a.y, b.y);
    if (ox <= 0 || oy <= 0) return;

    if (ox < oy) {
      const dir = ax < bx ? -1 : 1;
      const correction = ox + 0.25;
      if (a.dragging && !b.dragging) b.x -= dir * correction;
      else if (b.dragging && !a.dragging) a.x += dir * correction;
      else { a.x += dir * correction * 0.5; b.x -= dir * correction * 0.5; }

      const rel = a.vx - b.vx;
      if (rel * dir > 0) {
        const impulse = rel * 0.42;
        if (!a.dragging && !b.dragging) { a.vx -= impulse * 0.5; b.vx += impulse * 0.5; }
        else if (a.dragging && !b.dragging) b.vx += impulse;
        else if (b.dragging && !a.dragging) a.vx -= impulse;
      }
    } else {
      const dir = ay < by ? -1 : 1;
      const correction = oy + 0.25;
      if (a.dragging && !b.dragging) b.y -= dir * correction;
      else if (b.dragging && !a.dragging) a.y += dir * correction;
      else { a.y += dir * correction * 0.5; b.y -= dir * correction * 0.5; }

      const rel = a.vy - b.vy;
      if (rel * dir > 0) {
        const impulse = rel * 0.46;
        if (!a.dragging && !b.dragging) { a.vy -= impulse * 0.5; b.vy += impulse * 0.5; }
        else if (a.dragging && !b.dragging) b.vy += impulse;
        else if (b.dragging && !a.dragging) a.vy -= impulse;
      }
    }
  }

  function physics(dt) {
    if (!active) return;
    const data = worlds[world];
    const w = stage.clientWidth;
    const h = stage.clientHeight;

    bodies.forEach(b => {
      if (b.dragging) return;

      if (world === 'blackhole') {
        // Strong radial attraction toward the center. The previous inverse-square
        // force became almost zero at normal stage distances, so the glyphs barely moved.
        const cx = w * 0.5;
        const cy = h * 0.5;
        const bx = b.x + b.width * 0.5;
        const by = b.y + b.height * 0.5;
        const dx = cx - bx;
        const dy = cy - by;
        const dist = Math.hypot(dx, dy);

        if (dist > 3) {
          const nx = dx / dist;
          const ny = dy / dist;

          // Desired velocity grows with distance, producing a visible pull
          // while easing as each glyph reaches the singularity.
          const desiredSpeed = Math.min(1900, 260 + dist * 3.8);
          const desiredVX = nx * desiredSpeed;
          const desiredVY = ny * desiredSpeed;
          const follow = 1 - Math.exp(-7.5 * dt);

          b.vx += (desiredVX - b.vx) * follow;
          b.vy += (desiredVY - b.vy) * follow;

          // Slight orbital rotation while falling inward.
          b.va += b.vx * 0.0011;
          b.angle += b.va * dt * 60;
          b.x += b.vx * dt;
          b.y += b.vy * dt;
        } else {
          // Once captured, keep the glyphs packed around the center.
          b.vx *= Math.pow(0.03, dt);
          b.vy *= Math.pow(0.03, dt);
          b.x = cx - b.width * 0.5;
          b.y = cy - b.height * 0.5;
          b.angle += b.va * dt * 60;
        }
        return;
      }

      b.vy += data.gravity * dt;
      b.vx *= Math.pow(data.drag, dt * 60);
      b.vy *= Math.pow(data.drag, dt * 60);
      b.va += b.vx * 0.0007;
      b.angle += b.va * dt * 60;
      b.x += b.vx * dt;
      b.y += b.vy * dt;

      if (b.x < 0) { b.x = 0; b.vx = Math.abs(b.vx) * 0.55; }
      if (b.x + b.width > w) { b.x = Math.max(0, w - b.width); b.vx = -Math.abs(b.vx) * 0.55; }
      if (b.y < 0) { b.y = 0; b.vy = Math.abs(b.vy) * 0.4; }
      if (b.y + b.height > h) {
        b.y = Math.max(0, h - b.height);
        b.vy = -Math.abs(b.vy) * data.bounce;
        b.vx *= 0.94;
        if (Math.abs(b.vy) < 18) b.vy = 0;
      }
    });

    if (world !== 'blackhole') {
      for (let pass = 0; pass < 2; pass++) {
        for (let i = 0; i < bodies.length; i++) {
          for (let j = i + 1; j < bodies.length; j++) collide(bodies[i], bodies[j]);
        }
      }
    }
  }

  function render() {
    bodies.forEach(b => {
      b.el.style.transform = `translate3d(${b.x}px, ${b.y}px, 0) rotate(${Math.max(-180, Math.min(180, b.angle))}deg)`;
    });
  }

  function loop(now) {
    const dt = Math.min((now - lastTime) / 1000, 0.025);
    lastTime = now;
    physics(dt);
    render();
    requestAnimationFrame(loop);
  }

  textInput.addEventListener('input', () => layoutText());

  sizeRange.addEventListener('input', () => {
    sizePt = Math.max(12, Math.min(240, Number(sizeRange.value) || 12));
    sizeValue.textContent = `${sizePt} pt`;
    layoutText();
  });

  worldButtons.forEach(btn => btn.addEventListener('click', () => activateWorld(btn.dataset.world)));
  meteorButton.addEventListener('click', meteorStrike);
  resetButton.addEventListener('click', reset);
  window.addEventListener('resize', resizeBodies);

  sizeRange.value = sizePt;
  sizeValue.textContent = `${sizePt} pt`;
  layoutText();
  requestAnimationFrame(loop);
})();
