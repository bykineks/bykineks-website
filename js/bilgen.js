'use strict';
(() => {
 const $ = id => document.getElementById(id);
 const preview = $('typePreview');
 const selector = $('bilgen-style');
 const weight = $('bilgen-weight');
 const slant = $('bilgen-slant');
const testerModes = [...document.querySelectorAll('[data-bilgen-mode]')];
testerModes.forEach(button => button.addEventListener('click', () => {
  testerModes.forEach(mode => {
    const selected = mode === button;
    mode.setAttribute('aria-pressed', String(selected));
    $(mode.getAttribute('aria-controls')).hidden = !selected;
  });
}));
const testerToggle = $('bilgenToolsToggle');
testerToggle.addEventListener('click', () => {
  testerToggle.setAttribute('aria-expanded', String(testerToggle.getAttribute('aria-expanded') === 'false'));
});


 const play = $('playVariable');
 let frame = null;
 let started;
 function stopAnimation() {
   if (frame !== null) cancelAnimationFrame(frame);
   frame = null;
   play.setAttribute('aria-pressed','false');
   play.title = 'Play variable animation';
   play.setAttribute('aria-label',play.title);
   applyAxes();
 }
 function animate(time) {
   started ??= time;
   const wave = Math.sin((time-started) * Math.PI / 3000);
   weight.value = Math.round(500 + 400 * wave);
   slant.value = (15 * wave).toFixed(1);
   applyAxes(false);
   frame = requestAnimationFrame(animate);
 }
 play.addEventListener('click', () => {
   if (frame !== null) { stopAnimation(); return; }
   started = undefined;
   play.setAttribute('aria-pressed','true');
   play.title = 'Pause variable animation';
   play.setAttribute('aria-label',play.title);
   frame = requestAnimationFrame(animate);
 });
 document.addEventListener('visibilitychange', () => {
   if (document.hidden && frame !== null) stopAnimation();
 });

 function applyAxes(announce = true) {
   const value = weight.value + ':' + slant.value;
   const preset = Array.from(selector.options).find(option => option.value === value);
   selector.value = preset ? value : 'custom';
   preview.style.fontVariationSettings = `"wght" ${weight.value}, "slnt" ${slant.value}`;
   $('bilgen-weight-value').value = weight.value;
   $('bilgen-slant-value').value = slant.value + '°';
   if (announce) $('styleStatus').textContent = preset ? 'Bilgen ' + preset.textContent : 'Bilgen Custom';
 }
 function selectStyle() {
   [weight.value, slant.value] = selector.value.split(':');
   stopAnimation();
 }
 selector.addEventListener('change', selectStyle);
 weight.addEventListener('input', stopAnimation);
 slant.addEventListener('input', stopAnimation);
 const controls=[['size','fontSize','px'],['leading','lineHeight',''],['tracking','letterSpacing','em']];
 controls.forEach(([id,prop,unit])=>{
  const range=$(id+'Range'),field=$(id+'Input');
  const apply=source=>{
   if(source.value.trim()===''||!Number.isFinite(Number(source.value)))return;
   const value=Math.min(Number(range.max),Math.max(Number(range.min),Number(source.value)));
   range.value=value;field.value=value;preview.style[prop]=value+unit;
  };
  range.addEventListener('input',()=>apply(range));
  field.addEventListener('input',()=>apply(field));
  apply(range);
 });

 const interlock = $('interlock');
 function applyInterlock() { preview.dataset.interlock = interlock.value; }
 interlock.addEventListener('change', applyInterlock);
 const specimenText = preview.textContent;
 function reset() {
   selector.value = selector.querySelector('option[selected]').value;
   interlock.value = 'mix';
   applyInterlock();
   preview.textContent = specimenText;
   for (const [id, value] of [['size', Math.min(190, Math.max(48, Math.round(document.documentElement.clientWidth * .105)))], ['leading', 1.15], ['tracking', 0]]) {
     $(id + 'Range').value = value;
     $(id + 'Range').dispatchEvent(new Event('input'));
   }
   selectStyle();
 }
 $('resetSpecimen').addEventListener('click', reset);
 function showGlyph(event) {
   const cell = event.target.closest('button.glyph');
   if (!cell) return;
   $('glyphPreview').replaceChildren(cell.firstElementChild.cloneNode(true));
   $('glyphPreviewName').textContent = cell.getAttribute('aria-label');
   $('glyphPreviewCode').textContent = cell.dataset.code;
 }
 const gallery = document.querySelector('.glyph-groups');
 for (const event of ['click', 'focusin', 'pointerover']) gallery.addEventListener(event, showGlyph);
 reset();
})();

(() => {
  const gallery = document.getElementById('bilgen-gallery-track');
  const dialog = document.getElementById('bilgen-context-lightbox');
  if (!gallery || !dialog || typeof dialog.showModal !== 'function') return;
  const fullImage = document.getElementById('bilgen-context-image');
  const caption = document.getElementById('bilgen-context-caption');
  let opener;
  let previousOverflow;
  gallery.querySelectorAll('figure').forEach(figure => {
    const image = figure.querySelector('img');
    const button = document.createElement('button');
    button.type = 'button';
    button.className = 'bilgen-context-open';
    button.setAttribute('aria-label', 'Enlarge image: ' + image.alt);
    button.setAttribute('aria-haspopup', 'dialog');
    image.before(button);
    button.append(image);
    button.addEventListener('click', () => {
      opener = button;
      fullImage.src = image.src;
      fullImage.alt = image.alt;
      caption.textContent = figure.querySelector('figcaption').textContent;
      previousOverflow = document.documentElement.style.overflow;
      dialog.showModal();
      document.documentElement.style.overflow = 'hidden';
    });
  });
  dialog.querySelector('.bilgen-context-close').addEventListener('click', () => dialog.close());
  let startedOutside = false;
  dialog.addEventListener('pointerdown', event => { startedOutside = event.target === dialog; });
  dialog.addEventListener('click', event => {
    if (startedOutside && event.target === dialog) dialog.close();
    startedOutside = false;
  });
  dialog.addEventListener('close', () => {
    document.documentElement.style.overflow = previousOverflow;
    fullImage.removeAttribute('src');
    if (opener) opener.focus({preventScroll: true});
  });
})();

(() => {
  const title = document.querySelector('.bilgen-hero .product-title');
  const button = document.getElementById('bilgenHeroMotion');
  let inView = true;
  function updateMotion() {
    const paused = button.getAttribute('aria-pressed') === 'true';
    title.classList.toggle('is-paused', paused || !inView || document.hidden);
  }
  button.addEventListener('click', () => {
    const paused = button.getAttribute('aria-pressed') !== 'true';
    button.setAttribute('aria-pressed', String(paused));
    button.setAttribute('aria-label', paused ? 'Play title animation' : 'Pause title animation');
    button.firstElementChild.textContent = paused ? '▶' : 'Ⅱ';
    updateMotion();
  });
  if ('IntersectionObserver' in window) {
    const observer = new IntersectionObserver(([entry]) => {
      inView = entry.isIntersecting;
      updateMotion();
    });
    observer.observe(title);
  }
  document.addEventListener('visibilitychange', updateMotion);
})();
