'use strict';
(() => {
 const $ = id => document.getElementById(id);
 const preview = $('typePreview');
 const selector = $('bilgen-style');
 const faces = new Map();
 async function selectStyle() {
   const option = selector.selectedOptions[0];
   if (!faces.has(option.value)) {
     const face = new FontFace('BilgenStyle' + selector.selectedIndex, 'url("' + option.value + '")');
     faces.set(option.value, face.load().then(loaded => {
       document.fonts.add(loaded);
       return loaded;
     }).catch(error => { faces.delete(option.value); throw error; }));
   }
   try {
     const loaded = await faces.get(option.value);
     if (selector.value !== option.value) return;
     preview.style.fontFamily = loaded.family;
     $('styleStatus').textContent = 'Bilgen ' + option.textContent;
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

 const interlock = $('interlock');
 function applyInterlock() { preview.dataset.interlock = interlock.value; }
 interlock.addEventListener('change', applyInterlock);
 const specimenText = preview.textContent;
 function reset() {
   selector.value = 'assets/fonts/bilgen/Bilgen-Regular.woff2';
   interlock.value = 'first';
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
