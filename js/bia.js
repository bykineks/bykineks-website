
/* Bia Variable Playground V5 */
const SECTIONS={"BASIC LATIN":["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"],"LATIN-1 SUPPLEMENT":["À","Á","Â","Ã","Å","Æ","Ç","È","É","Ê","Ë","Ì","Í","Î","Ï","Ð","Ñ","Ò","Ó","Ô","Õ","Ö","Ø","Ù","Ú","Û","Ü","Ý","Þ","ß","à","á","â","ã","ä","å","æ","ç","è","é","ê","ë","ì","í","î","ï","ð","ñ","ò","ó","ô","õ","ö","ø","ù","ú","û","ü","ý","þ","ÿ"],"LATIN EXTENDED-A":["Ā","ā","Ă","ă","Ą","ą","Ć","ć","Ĉ","ĉ","Ċ","ċ","Č","č","Ď","ď","Đ","đ","Ē","ē","Ĕ","ĕ","Ė","ė","Ę","ę","Ě","ě","Ĝ","ĝ","Ğ","ğ","Ġ","ġ","Ģ","ģ","Ĥ","ĥ","Ħ","ħ","Ĩ","ĩ","Ī","ī","Ĭ","ĭ","Į","į","İ","ı","Ĳ","ĳ","Ĵ","ĵ","Ķ","ķ","ĸ","ü","Ĺ","ĺ","Ļ","ļ","Ľ","ľ","Ŀ","ŀ","Ł","ł","Ń","ń","Ņ","ņ","Ň","ň","ŉ","Ŋ","ŋ","Ō","ō","Ŏ","ŏ","Ő","ő","Œ","œ","Ŕ","ŕ","Ŗ","ŗ","Ř","ř","Ś","ś","Ŝ","ŝ","Ş","ş","Š","š","Ţ","ţ","Ť","ť","Ŧ","ŧ","Ũ","ũ","Ū","ū","Ŭ","ŭ","Ů","ů","Ű","ű","Ų","ų","Ŵ","ŵ","Ŷ","ŷ","Ÿ","Ź","ź","Ż","ż","Ž","ž","ſ"],"LATIN EXTENDED-B":["ƀ","Ɓ","Ƃ","ƃ","Ɔ","Ƈ","ƈ","Ɖ","Ɗ","Ƌ","ƌ","Ǝ","Ɛ","Ƒ","ƒ","Ɠ","Ɨ","ƚ","Ɲ","ƞ","Ɵ","Ơ","ơ","Ƣ","ƣ","Ƥ","Ʀ","Ƨ","ƨ","ƫ","Ư","ư","Ʋ","Ƶ","ƶ","Ʒ","Ƹ","ƹ","ƻ","Ƽ","ǀ","ǁ","ǂ","ǃ","Ǆ","ǅ","ǆ","Ǉ","ǈ","ǉ","Ǌ","ǋ","ǌ","Ǎ","ǎ","Ǐ","ǐ","Ǒ","ǒ","Ǔ","ǔ","Ǖ","ǖ","Ǘ","ǘ","Ǚ","ǚ","Ǜ","ǜ","ǝ","Ǟ","ǟ","Ǡ","ǡ","Ǣ","ǣ","Ǧ","ǧ","Ǩ","ǩ","Ǫ","ǫ","Ǭ","ǭ","Ǯ","ǯ","ǰ","Ǳ","ǲ","ǳ","Ǵ","ǵ","Ƿ","Ǹ","ǹ","Ǻ","ǻ","Ǽ","ǽ","Ǿ","ǿ","Ȁ","ȁ","Ȃ","ȃ","Ȅ","ȅ","Ȇ","ȇ","Ȉ","ȉ","Ȋ","ȋ","Ȍ","ȍ","Ȏ","ȏ","Ȑ","ȑ","Ȓ","ȓ","Ȕ","ȕ","Ȗ","ȗ","Ș","ș","Ț","ț","Ȟ","ȟ","Ƞ","Ȥ","ȥ","Ȧ","ȧ","Ȩ","ȩ","Ȫ","ȫ","Ȭ","ȭ","Ȯ","ȯ","Ȱ","ȱ","Ȳ","ȳ","ȷ","ȸ","ȹ","Ⱥ","Ȼ","ȼ","Ƚ","Ⱦ","Ɂ","ɂ","Ʉ","Ʌ","Ɇ","ɇ","Ɉ","ɉ","Ɋ","ɋ","Ɍ","ɍ","Ɏ","ɏ"],"LATIN EXTENDED-C":["Ⱡ","ⱡ","Ɫ","ⱥ","Ⱨ","ⱨ","Ⱪ","ⱪ","Ⱬ","ⱬ","Ɑ","Ɱ","Ɐ","Ɒ","Ⱶ","ⱻ","Ɀ"],"NUMERAL & CURRENCIES":["0","1","2","3","4","5","6","7","8","9","$","¢","£","¥","₣","₤","₧","€","¼","½","¾"],"LATIN EXTENDED ADDITIONAL":["Ḁ","ḁ","Ḃ","ḃ","Ḅ","ḅ","Ḇ","ḇ","Ḉ","ḉ","Ḋ","ḋ","Ḍ","ḍ","Ḏ","ḏ","Ḑ","ḑ","Ḓ","ḓ","Ḕ","ḕ","Ḗ","ḗ","Ḙ","ḙ","Ḛ","ḛ","Ḝ","ḝ","Ḟ","ḟ","Ḡ","ḡ","Ḣ","ḣ","Ḥ","ḥ","Ḧ","ḧ","Ḩ","ḩ","Ḫ","ḫ","Ḭ","ḭ","Ḯ","ḯ","Ḱ","ḱ","Ḳ","ḳ","Ḵ","ḵ","Ḷ","ḷ","Ḹ","ḹ","Ḻ","ḻ","Ḽ","ḽ","Ḿ","ḿ","Ṁ","ṁ","Ṃ","ṃ","Ṅ","ṅ","Ṇ","ṇ","Ṉ","ṉ","Ṋ","ṋ","Ṍ","ṍ","Ṏ","ṏ","Ṑ","ṑ","Ṓ","ṓ","Ṕ","ṕ","Ṗ","ṗ","Ṙ","ṙ","Ṛ","ṛ","Ṝ","ṝ","Ṟ","ṟ","Ṡ","ṡ","Ṣ","ṣ","Ṥ","ṥ","Ṧ","ṧ","Ṩ","ṩ","Ṫ","ṫ","Ṭ","ṭ","Ṯ","ṯ","Ṱ","ṱ","Ṳ","ṳ","Ṵ","ṵ","Ṷ","ṷ","Ṹ","ṹ","Ṻ","ṻ","Ṽ","ṽ","Ṿ","ṿ","Ẁ","ẁ","Ẃ","ẃ","Ẅ","ẅ","Ẇ","ẇ","Ẉ","ẉ","Ẋ","ẋ","Ẍ","ẍ","Ẏ","ẏ","Ẑ","ẑ","Ẓ","ẓ","Ẕ","ẕ","ẖ","ẗ","ẘ","ẙ","ẚ","ẛ","ẜ","ẝ","ẞ","Ạ","ạ","Ả","ả","Ấ","ấ","Ầ","ầ","Ẩ","ẩ","Ẫ","ẫ","Ậ","ậ","Ắ","ắ","Ằ","ằ","Ẳ","ẳ","Ẵ","ẵ","Ặ","ặ","Ẹ","ẹ","Ẻ","ẻ","Ẽ","ẽ","Ế","ế","Ề","ề","Ể","ể","Ễ","ễ","Ệ","ệ","Ỉ","ỉ","Ị","ị","Ọ","ọ","Ỏ","ỏ","Ố","ố","Ồ","ồ","Ổ","ổ","Ỗ","ỗ","Ộ","ộ","Ớ","ớ","Ờ","ờ","Ở","ở","Ỡ","ỡ","Ợ","ợ","Ụ","ụ","Ủ","ủ","Ứ","ứ","Ừ","ừ","Ử","ử","Ữ","ữ","Ự","ự","Ỳ","ỳ","Ỵ","ỵ","Ỷ","ỷ","Ỹ","ỹ","Ỻ","ỻ"],"STANDARD LIGATURES":["ff","fi","fl","ffi","ffl"],"Punctuation & Symbols":[".",",","-","+","*","˜","/","\\",":",";","<","=",">","!","?","'","\"","#","@","%","&","(",")","{","|","}","†","‡","[","]","‘","’","“","”","‚","„","•","_","–","—","¯","™","®","©","¡","¿","°","ƒ","−","±","×","÷","¦","…","·","`","ˆ","¨","ª","º","¹","²","³","‰","§","´","¸","~","‹","›","«","»","˘","˙","˚","˝","˛","ˇ","̦","≠","☹","←","→","↑","↓"]};
const LANGUAGES=["Afrikaans","Albanian","Asturian","Asu","Basque","Bemba","Bena","Breton","Catalan","Chiga","Colognian","Cornish","Croatian","Czech","Danish","Dutch","Embu","English","Esperanto","Estonian","Faroese","Filipino","Finnish","French","Friulian","Galician","Ganda","German","Gusii","Hungarian","Icelandic","Igbo","Inari Sami","Indonesian","Irish","Italian","Jola-Fonyi","Kabuverdianu","Kalaallisut","Kalenjin","Kamba","Kikuyu","Kinyarwanda","Latvian","Lithuanian","Lower Sorbian","Luo","Luxembourgish","Luyia","Machame","Makhuwa-Meetto","Makonde","Malagasy","Maltese","Manx","Meru","Morisyen","Nama","Northern Sami","North Ndebele","Norwegian Bokmål","Norwegian Nynorsk","Nyankole","Oromo","Polish","Portuguese","Prussian","Quechua","Romanian","Romansh","Rombo","Rundi","Rwa","Samburu","Sango","Sangu","Scottish Gaelic","Sena","Serbian","Shambala","Shona","Slovak","Slovenian","Soga","Somali","Spanish","Swahili","Swedish","Swiss German","Taita","Teso","Turkish","Upper Sorbian","Uzbek (Latin)","Vietnamese","Volapük","Vunjo","Walser","Welsh","Western Frisian","Yoruba","Zulu"];
const axes={
  serf:{range:'serfRange',value:'serfValue',key:'SERF'},
  cntr:{range:'cntrRange',value:'cntrValue',key:'CNTR'},
  ital:{range:'italRange',value:'italValue',key:'ital'},
  wght:{range:'wghtRange',value:'wghtValue',key:'wght'},
  wdth:{range:'wdthRange',value:'wdthValue',key:'wdth'}
};

const VOICES={
  'serif-low':{SERF:1,CNTR:0},'serif-high':{SERF:1,CNTR:100},
  'sans-low':{SERF:0,CNTR:0},'sans-high':{SERF:0,CNTR:100}
};
const DEFAULT_VARIABLE={SERF:1,CNTR:0,wght:400,wdth:100,ital:0};
let variableState={...DEFAULT_VARIABLE};
let animationFrame=null;
let animationStart=0;
const $=id=>document.getElementById(id);

function formatAxis(key,value){
  if(key==='SERF'||key==='ital') return Number(value).toFixed(2).replace(/\.00$/,'');
  return Math.round(value);
}

function applyVariable(){
  const specimen=$('liveSpecimen');
  specimen.style.fontVariationSettings=`"SERF" ${variableState.SERF},"CNTR" ${variableState.CNTR},"wght" ${variableState.wght},"wdth" ${variableState.wdth},"ital" ${variableState.ital}`;
  document.querySelectorAll('[data-voice]').forEach(button=>{
    const voice=VOICES[button.dataset.voice];
    button.setAttribute('aria-pressed',String(variableState.SERF===voice.SERF && variableState.CNTR===voice.CNTR));
  });
  Object.values(axes).forEach(axis=>{
    $(axis.range).value=variableState[axis.key];
    $(axis.value).value=formatAxis(axis.key,variableState[axis.key]);
  });
}

function stopAnimation(){
  if(animationFrame!==null){
    cancelAnimationFrame(animationFrame);
    animationFrame=null;
  }
  $('playVariable').textContent='▶';
  $('playVariable').setAttribute('aria-label','Play variable animation');
  $('playVariable').setAttribute('aria-pressed','false');
}

Object.values(axes).forEach(axis=>$(axis.range).addEventListener('input',()=>{
  stopAnimation();
  variableState[axis.key]=parseFloat($(axis.range).value);
  applyVariable();
}));

function resetVariable(){
  stopAnimation();
  variableState={...DEFAULT_VARIABLE};
  applyVariable();
}

/* V5 interpolation path: staged movement inspired by the reference interpolation lab.
   Every target range is reached, but the axes peak at different moments so the
   specimen visibly changes character instead of simply becoming a single
   simultaneous max/min state. */
const animationFrames=[
  {t:0.00, SERF:0, CNTR:0,   wght:300, wdth:50,  ital:0},
  {t:0.25, SERF:0, CNTR:25,  wght:700, wdth:100, ital:0},
  {t:0.50, SERF:1, CNTR:100, wght:300, wdth:150, ital:0},
  {t:0.75, SERF:1, CNTR:35,  wght:700, wdth:100, ital:1},
  {t:1.00, SERF:0, CNTR:0,   wght:300, wdth:50,  ital:0}
];
const animationDuration=8000;

function ease(t){return t*t*(3-2*t)}
function lerp(a,b,t){return a+(b-a)*t}

function animateVariable(time){
  const elapsed=time-animationStart;
  const p=(elapsed%animationDuration)/animationDuration;

  let a=animationFrames[0];
  let b=animationFrames[1];

  for(let i=0;i<animationFrames.length-1;i++){
    if(p>=animationFrames[i].t && p<=animationFrames[i+1].t){
      a=animationFrames[i];
      b=animationFrames[i+1];
      break;
    }
  }

  const local=ease((p-a.t)/(b.t-a.t || 1));

  Object.keys(variableState).forEach(key=>{
    variableState[key]=lerp(a[key],b[key],local);
  });

  applyVariable();
  animationFrame=requestAnimationFrame(animateVariable);
}

function startAnimation(){
  if(animationFrame!==null)return;
  $('playVariable').textContent='Ⅱ';
  $('playVariable').setAttribute('aria-label','Pause variable animation');
  $('playVariable').setAttribute('aria-pressed','true');
  animationStart=performance.now();
  animationFrame=requestAnimationFrame(animateVariable);
}

$('playVariable').addEventListener('click',()=>animationFrame!==null?stopAnimation():startAnimation());
$('resetVariable').addEventListener('click',resetVariable);

const compactScreen=matchMedia('(max-width:800px)');
const SAMPLES={
  headline:{text:'A study in form.',size:72,mobileSize:48,leading:1.1,tracking:-0.025},
  brand:{text:'Forma Studio',size:96,mobileSize:56,leading:1.05,tracking:-0.035},
  paragraph:{text:'Good typography gives ideas a voice. Bia brings a shared structure to different expressions, from quiet reading to a confident headline.',size:24,mobileSize:24,leading:1.4,tracking:0},
  numerals:{text:'0123456789\n€125.00 / $98.50\n09:41 — 2026',size:56,mobileSize:36,leading:1.2,tracking:0}
};
const DEFAULT_SPECIMEN={size:compactScreen.matches?48:72,leading:1.1,tracking:-0.025};
$('sizeRange').value=DEFAULT_SPECIMEN.size;
$('sizeInput').value=DEFAULT_SPECIMEN.size;
function applySpecimenControls(){
  const specimen=$('liveSpecimen');
  specimen.style.fontSize=$('sizeRange').value+'px';
  specimen.style.lineHeight=$('leadingRange').value;
  specimen.style.letterSpacing=$('trackingRange').value+'em';
}
function syncSpecimenControl(rangeId,inputId){
  const range=$(rangeId),input=$(inputId);
  range.addEventListener('input',()=>{input.value=range.value;applySpecimenControls()});
  function commitValue(){
    const value=input.valueAsNumber;
    range.value=Number.isFinite(value)?String(Math.min(Number(range.max),Math.max(Number(range.min),value))):range.value;
    input.value=range.value;
    applySpecimenControls();
  }
  input.addEventListener('input',()=>{
    const value=input.valueAsNumber;
    if(!Number.isFinite(value)) return;
    range.value=String(Math.min(Number(range.max),Math.max(Number(range.min),value)));
    if(value<Number(range.min)||value>Number(range.max)) input.value=range.value;
    applySpecimenControls();
  });
  input.addEventListener('change',commitValue);
  input.addEventListener('blur',commitValue);
}
syncSpecimenControl('sizeRange','sizeInput');
syncSpecimenControl('leadingRange','leadingInput');
syncSpecimenControl('trackingRange','trackingInput');
$('resetSpecimen').addEventListener('click',()=>{
  $('sizeRange').value=DEFAULT_SPECIMEN.size; $('sizeInput').value=DEFAULT_SPECIMEN.size;
  $('leadingRange').value=DEFAULT_SPECIMEN.leading; $('leadingInput').value=DEFAULT_SPECIMEN.leading;
  $('trackingRange').value=DEFAULT_SPECIMEN.tracking; $('trackingInput').value=DEFAULT_SPECIMEN.tracking;
  applySpecimenControls();
});
let activeGlyphSection=Object.keys(SECTIONS)[0];
const glyphPreview=$("glyphPreview");
const glyphPreviewName=$("glyphPreviewName");
const glyphPreviewCategory=$("glyphPreviewCategory");
function showGlyphPreview(char,category,cell){
  if(cell){
    document.querySelectorAll('.glyph[aria-pressed="true"]').forEach(item=>item.setAttribute('aria-pressed','false'));
    cell.setAttribute('aria-pressed','true');
  }
  glyphPreview.textContent=char;
  const codes=Array.from(char,c=>'U+'+c.codePointAt(0).toString(16).toUpperCase().padStart(4,'0')).join(' ');
  glyphPreviewName.textContent=char+' · '+codes;
  glyphPreviewName.title=codes;
  glyphPreviewCategory.textContent=category;
}
function renderGlyphs(){
  const box=$("glyphGroups");
  box.innerHTML="";
  Object.entries(SECTIONS).forEach(([name,chars],index)=>{
    const section=document.createElement("div");
    section.className=`glyph-group${index===0?" is-open":""}`;

    const title=document.createElement("button");
    title.className="glyph-title";
    title.type="button";
    title.setAttribute("aria-expanded",index===0?"true":"false");
    title.setAttribute("aria-controls",`glyph-grid-${index}`);
    title.innerHTML=`<span>${name}</span><small>${chars.length} glyphs</small>`;

    const grid=document.createElement("div");
    grid.className="glyph-grid";
    grid.id=`glyph-grid-${index}`;
    grid.hidden=index!==0;

    title.addEventListener("click",()=>{
      const open=section.classList.toggle("is-open");
      title.setAttribute("aria-expanded",String(open));
      grid.hidden=!open;
    });

    const heading=document.createElement("h3");
    heading.appendChild(title);
    chars.forEach((c,cellIndex)=>{
      const cell=document.createElement("button");
      cell.className="glyph";
      cell.type="button";
      cell.textContent=c;
      cell.setAttribute("aria-label",`Glyph ${c}`);
      cell.setAttribute("aria-pressed",String(index===0 && cellIndex===0));
      cell.addEventListener("mouseenter",()=>showGlyphPreview(c,name,cell));
      cell.addEventListener("pointerdown",()=>showGlyphPreview(c,name,cell),{passive:true});
      cell.addEventListener("focus",()=>showGlyphPreview(c,name,cell));
      cell.addEventListener("click",()=>showGlyphPreview(c,name,cell));
      grid.appendChild(cell);
    });

    section.append(heading,grid);
    box.appendChild(section);
  });
}
function renderLanguages(){$('languageList').innerHTML=LANGUAGES.map(x=>`<span>${x}</span>`).join(' · ')}
showGlyphPreview(SECTIONS[activeGlyphSection][0],activeGlyphSection);
renderGlyphs();renderLanguages();applyVariable();applySpecimenControls();

$('preview-count').textContent=Object.values(SECTIONS).reduce((total,chars)=>total+chars.length,0).toLocaleString('en-US')+' preview entries';
const reducedMotion=matchMedia('(prefers-reduced-motion: reduce)');
const heroTitle=document.querySelector('.bia-variable');
const heroToggle=$('toggleHeroMotion');
function setHeroPaused(paused){
  heroTitle.style.animationPlayState=paused?'paused':'running';
  heroToggle.setAttribute('aria-pressed',String(paused));
  heroToggle.textContent=paused?'Play title animation':'Pause title animation';
}
heroToggle.addEventListener('click',()=>setHeroPaused(heroToggle.getAttribute('aria-pressed')!=='true'));
reducedMotion.addEventListener('change',()=>{stopAnimation();setHeroPaused(reducedMotion.matches)});
document.addEventListener('visibilitychange',()=>{
  if(document.hidden){stopAnimation();heroTitle.style.animationPlayState='paused'}
  else setHeroPaused(heroToggle.getAttribute('aria-pressed')==='true');
});
setHeroPaused(reducedMotion.matches);

function selectSample(key){
  const sample=SAMPLES[key];
  $('liveSpecimen').textContent=sample.text;
  for(const [range,input,value] of [
    ['sizeRange','sizeInput',compactScreen.matches?sample.mobileSize:sample.size],
    ['leadingRange','leadingInput',sample.leading],['trackingRange','trackingInput',sample.tracking]
  ]){$(range).value=value;$(input).value=$(range).value;}
  document.querySelectorAll('[data-sample]').forEach(button=>button.setAttribute('aria-pressed',String(button.dataset.sample===key)));
  applySpecimenControls();
}
document.querySelectorAll('[data-sample]').forEach(button=>button.addEventListener('click',()=>{stopAnimation();selectSample(button.dataset.sample)}));
$('liveSpecimen').addEventListener('input',()=>document.querySelectorAll('[data-sample]').forEach(button=>button.setAttribute('aria-pressed','false')));
document.querySelectorAll('[data-voice]').forEach(button=>button.addEventListener('click',()=>{
  stopAnimation();
  variableState={...variableState,...VOICES[button.dataset.voice]};
  applyVariable();
  $('system-title').focus({preventScroll:true});
  $('system').scrollIntoView({behavior:reducedMotion.matches?'instant':'smooth',block:'start'});
}));
selectSample('headline');
