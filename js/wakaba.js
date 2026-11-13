'use strict';
(() => {
 const $ = id => document.getElementById(id);
 const preview = $('typePreview');
 const ligatures = $('ligatures');
 function applyLigatures() {
   preview.dataset.ligatures = ligatures.value;
   $('styleStatus').textContent = 'Wakaba · Ligatures ' + ligatures.value;
 }
 ligatures.addEventListener('change', applyLigatures);
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

 const specimenText = preview.textContent;
 function reset() {
   ligatures.value = 'on';
   preview.textContent = specimenText;
   for (const [id, value] of [['size', innerWidth <= 800 ? 40 : 60], ['leading', 1.15], ['tracking', 0]]) {
     $(id + 'Range').value = value;
     $(id + 'Range').dispatchEvent(new Event('input'));
   }
   applyLigatures();
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
  const gallery = document.getElementById('wakaba-gallery-track');
  const dialog = document.getElementById('wakaba-context-lightbox');
  if (!gallery || !dialog || typeof dialog.showModal !== 'function') return;
  const fullImage = document.getElementById('wakaba-context-image');
  const caption = document.getElementById('wakaba-context-caption');
  let opener;
  let previousOverflow;
  gallery.querySelectorAll('figure').forEach(figure => {
    const image = figure.querySelector('img');
    const button = document.createElement('button');
    button.type = 'button';
    button.className = 'wakaba-context-open';
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
  dialog.querySelector('.wakaba-context-close').addEventListener('click', () => dialog.close());
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
