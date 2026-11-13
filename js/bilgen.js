'use strict';
(() => {
 const $ = id => document.getElementById(id);
 const preview = $('typePreview');
 const selector = $('bilgen-style');
 const weight = $('bilgen-weight');
 const slant = $('bilgen-slant');
 function applyAxes() {
   const value = weight.value + ':' + slant.value;
   const preset = Array.from(selector.options).find(option => option.value === value);
   selector.value = preset ? value : 'custom';
   preview.style.fontVariationSettings = `"wght" ${weight.value}, "slnt" ${slant.value}`;
   $('bilgen-weight-value').value = weight.value;
   $('bilgen-slant-value').value = slant.value + '°';
   $('styleStatus').textContent = preset ? 'Bilgen ' + preset.textContent : 'Bilgen Custom';
 }
 function selectStyle() {
   [weight.value, slant.value] = selector.value.split(':');
   applyAxes();
 }
 selector.addEventListener('change', selectStyle);
 weight.addEventListener('input', applyAxes);
 slant.addEventListener('input', applyAxes);
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
   for (const [id, value] of [['size', innerWidth <= 800 ? 40 : 60], ['leading', 1.15], ['tracking', 0]]) {
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
