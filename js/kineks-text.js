const SECTIONS={"Basic Latin": ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z", "a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"], "Numerals & currencies": ["$", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "¢", "£", "¥", "₣", "₤", "€"], "Latin extended": ["À", "Á", "Â", "Ã", "Ä", "Å", "Æ", "Ç", "È", "É", "Ê", "Ë", "Ì", "Í", "Î", "Ï", "Ð", "Ñ", "Ò", "Ó", "Ô", "Õ", "Ö", "Ø", "Ù", "Ú", "Û", "Ü", "Ý", "Þ", "ß", "à", "á", "â", "ã", "ä", "å", "æ", "ç", "è", "é", "ê", "ë", "ì", "í", "î", "ï", "ð", "ñ", "ò", "ó", "ô", "õ", "ö", "ø", "ù", "ú", "û", "ü", "ý", "þ", "ÿ", "Ā", "ā", "Ă", "ă", "Ą", "ą", "Ć", "ć", "Ĉ", "ĉ", "Ċ", "ċ", "Č", "č", "Ď", "ď", "Đ", "đ", "Ē", "ē", "Ĕ", "ĕ", "Ė", "ė", "Ę", "ę", "Ě", "ě", "Ĝ", "ĝ", "Ğ", "ğ", "Ġ", "ġ", "Ģ", "ģ", "Ĥ", "ĥ", "Ħ", "ħ", "Ĩ", "ĩ", "Ī", "ī", "Į", "į", "İ", "ı", "Ĳ", "ĳ", "Ĵ", "ĵ", "Ķ", "ķ", "ĸ", "Ĺ", "ĺ", "Ļ", "ļ", "Ľ", "ľ", "Ŀ", "ŀ", "Ł", "ł", "Ń", "ń", "Ņ", "ņ", "Ň", "ň", "ŉ", "Ō", "ō", "Ŏ", "ŏ", "Ő", "ő", "Œ", "œ", "Ŕ", "ŕ", "Ŗ", "ŗ", "Ř", "ř", "Ś", "ś", "Ŝ", "ŝ", "Ş", "ş", "Š", "š", "Ţ", "ţ", "Ť", "ť", "Ŧ", "ŧ", "Ũ", "ũ", "Ū", "ū", "Ŭ", "ŭ", "Ů", "ů", "Ű", "ű", "Ų", "ų", "Ŵ", "ŵ", "Ŷ", "ŷ", "Ÿ", "Ź", "ź", "Ż", "ż", "Ž", "ž", "ſ", "ƒ", "Ș", "ș", "Ț", "ț", "ȷ", "Ẁ", "ẁ", "Ẃ", "ẃ", "Ẅ", "ẅ", "Ꝃ", "Ʞ", "ﬀ", "ﬁ", "ﬂ", "ﬃ", "ﬄ", "ﬅ"], "Punctuation & symbols": ["!", "\"", "#", "%", "&", "'", "(", ")", "*", "+", ",", "-", ".", "/", ":", ";", "<", "=", ">", "?", "@", "[", "\\", "]", "^", "_", "`", "{", "|", "}", "~", "¡", "¦", "§", "¨", "©", "«", "®", "¯", "°", "±", "´", "·", "¸", "»", "¿", "×", "÷", "˘", "˙", "˚", "˛", "˜", "˝", "̦", "–", "—", "‘", "’", "‚", "“", "”", "„", "†", "‡", "•", "…", "‰", "‹", "›", "™", "−", "∙", "≠", "≤", "≥"], "Other characters": ["ª", "²", "³", "¹", "º", "ˆ", "ˇ", "ˉ", "Δ", "Ξ", "И"], "Ligatures": ["ff", "fi", "fl", "ffi", "ffl", "ſt"]};
const LANGUAGES=["Afrikaans", "Albanian", "Asu", "Basque", "Bemba", "Bena", "Breton", "Catalan", "Chiga", "Colognian", "Cornish", "Croatian", "Czech", "Danish", "Dutch", "Embu", "English", "Esperanto", "Estonian", "Faroese", "Filipino", "Finnish", "French", "Friulian", "Galician", "German", "Gusii", "Hungarian", "Icelandic", "Indonesian", "Irish", "Italian", "Kabuverdianu", "Kalaallisut", "Kalenjin", "Kamba", "Kikuyu", "Kinyarwanda", "Latvian", "Lithuanian", "Lower Sorbian", "Luo", "Luxembourgish", "Luyia", "Machame", "Makhuwa-Meetto", "Makonde", "Malagasy", "Maltese", "Manx", "Meru", "Morisyen", "North Ndebele", "Norwegian Bokmål", "Norwegian Nynorsk", "Nyankole", "Oromo", "Polish", "Portuguese", "Quechua", "Romanian", "Romansh", "Rombo", "Rundi", "Rwa", "Samburu", "Sango", "Sangu", "Scottish Gaelic", "Sena", "Serbian", "Shambala", "Shona", "Slovak", "Slovenian", "Soga", "Somali", "Spanish", "Swahili", "Swedish", "Swiss German", "Taita", "Teso", "Turkish", "Upper Sorbian", "Uzbek (Latin)", "Volapük", "Vunjo", "Walser", "Zulu"];
const $=id=>document.getElementById(id);
const defaults={wght:400,slnt:0};let state={...defaults};
const presets={wght:{id:'weightPreset',values:[300,400,500,600,700]},slnt:{id:'stylePreset',values:[0,12]}};
function applyVariable(){
 $('liveSpecimen').style.fontVariationSettings=Object.entries(state).map(([tag,value])=>'"'+tag+'" '+value).join(',');
 for(const [tag,preset] of Object.entries(presets)){
  $(tag+'Range').value=state[tag];$(tag+'Value').value=tag==='slnt'?state[tag].toFixed(1):state[tag];
  const found=preset.values.find(value=>Math.abs(value-state[tag])<1e-7);$(preset.id).value=found===undefined?'custom':String(found);
 }
}
// Animation starts only on request and stops when a manual axis control takes over.
let animationFrame = null;
const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)');
function stopAnimation(){
 if(animationFrame !== null) cancelAnimationFrame(animationFrame);
 animationFrame = null;
 $('animateVariable').textContent = 'Animate';
}
$('animateVariable').addEventListener('click',()=>{
 if(animationFrame !== null){stopAnimation();return}
 const start = performance.now();
 const phases = Object.fromEntries(Object.entries(presets).map(([tag,preset])=>{
  const min=preset.values[0],max=preset.values[preset.values.length-1];
  return [tag,Math.acos(1-2*(state[tag]-min)/(max-min))];
 }));
 // Reduced-motion users explicitly opt in with this button; use a slower cycle.
 const duration = reducedMotion.matches ? 24000 : 10000;
 function tick(now){
  for(const [tag,preset] of Object.entries(presets)){
   const min=preset.values[0],max=preset.values[preset.values.length-1];
   const value=min+(max-min)*(1-Math.cos(phases[tag]+(now-start)*2*Math.PI/duration))/2;
   state[tag]=tag==='wght'?Math.round(value):value;
  }
  applyVariable();
  animationFrame=requestAnimationFrame(tick);
 }
 $('animateVariable').textContent='Pause';
 animationFrame=requestAnimationFrame(tick);
});
document.addEventListener('visibilitychange',()=>{if(document.hidden)stopAnimation()});
window.addEventListener('pagehide',stopAnimation);
reducedMotion.addEventListener('change',stopAnimation);
for(const [tag,preset] of Object.entries(presets)){
 $(tag+'Range').addEventListener('input',()=>{stopAnimation();state[tag]=Number($(tag+'Range').value);applyVariable()});
 $(preset.id).addEventListener('change',()=>{stopAnimation();const n=Number($(preset.id).value);if(preset.values.includes(n)){state[tag]=n;applyVariable()}});
}
$('resetVariable').addEventListener('click',()=>{stopAnimation();state={...defaults};applyVariable()});
$('featurePreset').addEventListener('change',()=>{const v=$('featurePreset').value;$('liveSpecimen').style.fontFeatureSettings='"ss01" '+Number(v==='ss01')+',"ss02" '+Number(v==='ss02')+',"liga" '+Number(v!=='unligated')});
function applySpecimen(){$('liveSpecimen').style.fontSize=$('sizeRange').value+'pt';$('liveSpecimen').style.lineHeight=$('leadingRange').value;$('liveSpecimen').style.letterSpacing=$('trackingRange').value+'em'}
for(const key of ['size','leading','tracking']){
 const range=$(key+'Range'),input=$(key+'Input');
 range.addEventListener('input',()=>{input.value=range.value;applySpecimen()});
 const commit=()=>{const n=input.valueAsNumber;if(Number.isFinite(n))range.value=String(Math.min(Number(range.max),Math.max(Number(range.min),n)));input.value=range.value;applySpecimen()};
 input.addEventListener('input',()=>{const n=input.valueAsNumber;if(Number.isFinite(n)&&n>=Number(range.min)&&n<=Number(range.max)){range.value=String(n);applySpecimen()}});
 input.addEventListener('blur',commit);input.addEventListener('keydown',e=>{if(e.key==='Enter'){e.preventDefault();commit()}});
}
$('resetSpecimen').addEventListener('click',()=>{for(const [key,value] of Object.entries({size:24,leading:1.4,tracking:0})){$(key+'Range').value=value;$(key+'Input').value=value}applySpecimen()});
applyVariable();applySpecimen();
let entries=[];
function showGlyph(cell){
 document.querySelectorAll('.glyph[aria-pressed="true"]').forEach(item=>item.setAttribute('aria-pressed','false'));
 cell.setAttribute('aria-pressed','true');
 $('glyphPreview').textContent=cell.textContent;$('glyphPreview').style.fontFeatureSettings=cell.style.fontFeatureSettings;
 const codes=Array.from(cell.textContent,c=>'U+'+c.codePointAt(0).toString(16).toUpperCase().padStart(4,'0')).join(' ');
 $('glyphPreviewName').textContent=cell.textContent+' · '+codes;$('glyphPreviewName').title=codes;
 $('glyphPreviewCategory').textContent=cell.dataset.category+(cell.dataset.tags?' · '+cell.dataset.tags:'');
}
for(const [index,[category,chars]] of Object.entries(SECTIONS).entries()){
 const group=document.createElement('div');group.className='glyph-group';
 const heading=document.createElement('h3');const title=document.createElement('button');title.type='button';title.className='glyph-title';title.setAttribute('aria-expanded','false');title.setAttribute('aria-controls','text-grid-'+index);title.innerHTML='<span>'+category.replace('SUPLEMENT','SUPPLEMENT')+'</span><small>'+chars.length+' entries</small>';heading.append(title);
 const grid=document.createElement('div');grid.className='glyph-grid';grid.id='text-grid-'+index;grid.hidden=true;
 title.addEventListener('click',()=>{const open=title.getAttribute('aria-expanded')!=='true';title.setAttribute('aria-expanded',String(open));group.classList.toggle('is-open',open);grid.hidden=!open});
 chars.forEach((char,charIndex)=>{
  const cell=document.createElement('button');cell.type='button';cell.className='glyph';cell.textContent=char;cell.dataset.category=category;cell.setAttribute('aria-pressed','false');
  let tags=category.toUpperCase()==='LIGATURES'?{liga:1}:{};
  cell.dataset.tags=Object.keys(tags).join('+');cell.style.fontFeatureSettings=Object.entries(tags).map(([tag,value])=>'"'+tag+'" '+value).join(',')||'normal';
  cell.setAttribute('aria-label',char+(cell.dataset.tags?' '+cell.dataset.tags:''));
  cell.addEventListener('click',()=>showGlyph(cell));cell.addEventListener('focus',()=>showGlyph(cell));cell.addEventListener('pointerenter',event=>{if(event.pointerType==='mouse')showGlyph(cell)});
  grid.append(cell);entries.push(cell);
 });group.append(heading,grid);$('glyphGroups').append(group);
}

showGlyph(entries[0]);$('glyphCount').textContent=entries.length.toLocaleString('en-US')+' preview entries';
let previousSelection=null,previousGroups=null;
function filterGlyphs(){const q=$('glyphSearch').value.trim(),query=q.toLowerCase();const groups=[...document.querySelectorAll('.glyph-group')];
 if(q&&!previousGroups){previousSelection=entries.find(cell=>cell.getAttribute('aria-pressed')==='true');previousGroups=groups.map(group=>group.classList.contains('is-open'))}
 let first=null,count=0;
 groups.forEach((group,index)=>{let matches=0;group.querySelectorAll('.glyph').forEach(cell=>{const codes=Array.from(cell.textContent,c=>'U+'+c.codePointAt(0).toString(16).toUpperCase().padStart(4,'0')).join(' ');const found=!q||(Array.from(q).length===1?cell.textContent===q:(cell.textContent+' '+cell.dataset.category+' '+cell.dataset.tags+' '+codes).toLowerCase().includes(query));cell.hidden=!found;if(found){matches++;count++;first??=cell}});group.hidden=!matches;const open=q?matches>0:(previousGroups?previousGroups[index]:group.classList.contains('is-open'));group.classList.toggle('is-open',open);group.querySelector('.glyph-title').setAttribute('aria-expanded',String(open));group.querySelector('.glyph-grid').hidden=!open});
 if(q&&first)showGlyph(first);else if(q){entries.forEach(cell=>cell.setAttribute('aria-pressed','false'));$('glyphPreview').textContent='—';$('glyphPreviewName').textContent='No matching character';$('glyphPreviewCategory').textContent=''}else if(previousSelection)showGlyph(previousSelection);
 $('searchStatus').textContent=q?count+' matching preview entries':'';if(!q){previousGroups=null;previousSelection=null}
}
$('glyphSearch').addEventListener('input',filterGlyphs);$('clearSearch').addEventListener('click',()=>{$('glyphSearch').value='';filterGlyphs();$('glyphSearch').focus()});
$('languageList').textContent=LANGUAGES.join(' · ');

(() => {
  const gallery = document.getElementById('text-gallery-track');
  const dialog = document.getElementById('text-context-lightbox');
  if (!gallery || !dialog || typeof dialog.showModal !== 'function') return;
  const fullImage = document.getElementById('text-context-image');
  const caption = document.getElementById('text-context-caption');
  let opener;
  let previousOverflow;
  gallery.querySelectorAll('figure').forEach(figure => {
    const image = figure.querySelector('img');
    const button = document.createElement('button');
    button.type = 'button';
    button.className = 'text-context-open';
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
  dialog.querySelector('.text-context-close').addEventListener('click', () => dialog.close());
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

