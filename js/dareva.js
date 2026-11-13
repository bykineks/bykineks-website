'use strict';
(() => {
 const $ = id => document.getElementById(id);
 const preview = $('typePreview');
 const selector = $('dareva-style');
 const optical = $('dareva-optical');
 const groups = Array.from(selector.querySelectorAll('optgroup'));
 const defaultStyle = selector.value;
 function selectOpticalSize(style) {
   const group = groups.find(candidate => candidate.label === optical.value);
   const option = Array.from(group.children).find(candidate => candidate.textContent === group.label + ' ' + style);
   selector.replaceChildren(group);
   selector.value = option.value;
   selectStyle();
 }
 optical.addEventListener('change', () => {
   const style = selector.selectedOptions[0].textContent.replace(/^\S+ /, '');
   selectOpticalSize(style);
 });
 const faces = new Map();
 async function selectStyle() {
   const option = selector.selectedOptions[0];
   if (!faces.has(option.value)) {
     const face = new FontFace('DarevaStyle' + groups.indexOf(option.parentElement) + '-' + selector.selectedIndex, 'url("' + option.value + '")');
     faces.set(option.value, face.load().then(loaded => {
       document.fonts.add(loaded);
       return loaded;
     }).catch(error => { faces.delete(option.value); throw error; }));
   }
   try {
     const loaded = await faces.get(option.value);
     if (selector.value !== option.value) return;
     preview.style.fontFamily = loaded.family;
     $('styleStatus').textContent = 'Dareva ' + option.textContent;
   } catch {
     if (selector.value === option.value) $('styleStatus').textContent = 'Style could not load. Choose it again to retry.';
   }
 }
 selector.addEventListener('change', selectStyle);
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
   optical.value = 'Text';
   selectOpticalSize('Regular');
   selector.value = defaultStyle;
   preview.textContent = specimenText;
   for (const [id, value] of [['size', innerWidth <= 800 ? 40 : 60], ['leading', 1.15], ['tracking', 0]]) {
     $(id + 'Range').value = value;
     $(id + 'Range').dispatchEvent(new Event('input'));
   }
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
  const gallery = document.getElementById('dareva-gallery-track');
  const dialog = document.getElementById('dareva-context-lightbox');
  if (!gallery || !dialog || typeof dialog.showModal !== 'function') return;
  const fullImage = document.getElementById('dareva-context-image');
  const caption = document.getElementById('dareva-context-caption');
  let opener;
  let previousOverflow;
  gallery.querySelectorAll('figure').forEach(figure => {
    const image = figure.querySelector('img');
    const button = document.createElement('button');
    button.type = 'button';
    button.className = 'dareva-context-open';
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
  dialog.querySelector('.dareva-context-close').addEventListener('click', () => dialog.close());
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
