const SECTIONS={"BASIC LATIN":["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"],"LATIN-1 SUPLEMENT":["À","Á","Â","Ã","Å","Æ","Ç","È","É","Ê","Ë","Ì","Í","Î","Ï","Ð","Ñ","Ò","Ó","Ô","Õ","Ö","Ø","Ù","Ú","Û","Ü","Ý","Þ","ß","à","á","â","ã","ä","å","æ","ç","è","é","ê","ë","ì","í","î","ï","ð","ñ","ò","ó","ô","õ","ö","ø","ù","ú","û","ü","ý","þ","ÿ"],"LATIN EXTENDED-A":["Ā","ā","Ă","ă","Ą","ą","Ć","ć","Ĉ","ĉ","Ċ","ċ","Č","č","Ď","ď","Đ","đ","Ē","ē","Ĕ","ĕ","Ė","ė","Ę","ę","Ě","ě","Ĝ","ĝ","Ğ","ğ","Ġ","ġ","Ģ","ģ","Ĥ","ĥ","Ħ","ħ","Ĩ","ĩ","Ī","ī","Ĭ","ĭ","Į","į","İ","ı","Ĳ","ĳ","Ĵ","ĵ","Ķ","ķ","ĸ","ü","Ĺ","ĺ","Ļ","ļ","Ľ","ľ","Ŀ","ŀ","Ł","ł","Ń","ń","Ņ","ņ","Ň","ň","ŉ","Ŋ","ŋ","Ō","ō","Ŏ","ŏ","Ő","ő","Œ","œ","Ŕ","ŕ","Ŗ","ŗ","Ř","ř","Ś","ś","Ŝ","ŝ","Ş","ş","Š","š","Ţ","ţ","Ť","ť","Ŧ","ŧ","Ũ","ũ","Ū","ū","Ŭ","ŭ","Ů","ů","Ű","ű","Ų","ų","Ŵ","ŵ","Ŷ","ŷ","Ÿ","Ź","ź","Ż","ż","Ž","ž","ſ"],"LATIN EXTENDED-B":["ƀ","Ƃ","ƃ","Ț","ƅ","Ɔ","Ɖ","Ƌ","ƌ","ƍ","Ǝ","ȗ","Ɛ","Ƒ","ƒ","ƕ","Ș","Ɨ","ƚ","ș","Ɯ","Ɲ","ƞ","Ɵ","Ơ","ơ","Ƨ","ƨ","Ʃ","Ʈ","Ư","ư","Ʊ","Ʋ","ț","Ƶ","ƶ","Ʒ","Ƹ","ƻ","ǀ","ǁ","ǂ","ǃ","Ǆ","ǆ","Ǉ","ǈ","ǉ","Ǌ","ǋ","ǌ","Ǎ","ǎ","Ǐ","ǐ","Ǒ","ǒ","Ǔ","ǔ","Ǖ","ǖ","Ǘ","ǘ","Ǚ","ǚ","Ǜ","ǜ","ǝ","Ǟ","ǟ","Ǡ","ǡ","Ǣ","ǣ","Ǧ","ǧ","Ǩ","ǩ","Ǫ","ǫ","Ǭ","ǭ","Ǯ","ǯ","ǰ","Ǳ","ǲ","ǅ","ǳ","Ǵ","ǵ","Ƕ","Ǹ","ǹ","Ǻ","ǻ","Ǽ","ǽ","Ǿ","ǿ","Ȁ","ȁ","Ȃ","ȃ","Ȅ","ȅ","Ȇ","ȇ","Ȉ","ȉ","Ȋ","ȋ","Ȍ","ȍ","Ȏ","ȏ","Ȑ","ȑ","Ȓ","ȓ","Ȕ","ȕ","Ȗ","Ȟ","ȟ","Ȧ","ȧ","Ȩ","ȩ","Ȫ","ȫ","Ȭ","ȭ","Ȯ","ȯ","Ȱ","ȱ","Ȳ","ȳ","ȷ","ȸ","ȹ","Ⱥ","Ȼ","ȼ","Ƚ","Ⱦ","Ƀ","Ʉ","Ʌ","Ɇ","ɇ","Ɉ","ɉ","ɋ","Ɍ","ɍ","ɏ","Ꝃ","Ʞ","ꭑ","ə"],"NUMERAL & CURRENCIES":["0","1","2","3","4","5","6","7","8","9","$","¢","£","¤","¥","₣","₤","₧","€"],"LIGATURES":["ft","fb","ffb","ffh","ffj","ffk","fh","fj","fk","ſi","ſl","ſſ","ſſi","ſſl","ff","fi","fl","ffi","ffl","HA","HI","HU","HE","HO","AH","IH","UH","EH","OH","MA","MI","MU","ME","MO","ER","TT","BY","EN","EA","TH","La","Li","Lu","Le","Lo","Th","AU","il","ib","ik","ih","II"],"LATIN EXTENDED ADDITIONAL":["Ḁ","ḁ","Ḃ","ḃ","Ḅ","ḅ","Ḇ","ḇ","Ḉ","ḉ","Ḋ","ḋ","Ḍ","ḍ","Ḏ","ḏ","Ḑ","ḑ","Ḓ","ḓ","Ḕ","ḕ","Ḗ","ḗ","Ḙ","ḙ","Ḛ","ḛ","Ḝ","ḝ","Ḟ","ḟ","Ḡ","ḡ","Ḣ","ḣ","Ḥ","ḥ","Ḧ","ḧ","Ḩ","ḩ","Ḫ","ḫ","Ḭ","ḭ","Ḯ","ḯ","Ḱ","ḱ","Ḳ","ḳ","Ḵ","ḵ","Ḷ","ḷ","Ḹ","ḹ","Ḻ","ḻ","Ḽ","ḽ","Ḿ","ḿ","Ṁ","ṁ","Ṃ","ṃ","Ṅ","ṅ","Ṇ","ṇ","Ṉ","ṉ","Ṋ","ṋ","Ṍ","ṍ","Ṏ","ṏ","Ṑ","ṑ","Ṓ","ṓ","Ṕ","ṕ","Ṗ","ṗ","Ṙ","ṙ","Ṛ","ṛ","Ṝ","ṝ","Ṟ","ṟ","Ṡ","ṡ","Ṣ","ṣ","Ṥ","ṥ","Ṧ","ṧ","Ṩ","ṩ","Ṫ","ṫ","Ṭ","ṭ","Ṯ","ṯ","Ṱ","ṱ","Ṳ","ṳ","Ṵ","ṵ","Ṷ","ṷ","Ṹ","ṹ","Ṻ","ṻ","Ṽ","ṽ","Ṿ","ṿ","Ẁ","ẁ","Ẃ","ẃ","Ẅ","ẅ","Ẇ","ẇ","Ẉ","ẉ","Ẋ","ẋ","Ẍ","ẍ","Ẏ","ẏ","Ẑ","ẑ","Ẓ","ẓ","Ẕ","ẕ","ẖ","ẗ","ẘ","ẙ","ẚ","ẛ","ẜ","ẝ","ẞ","Ạ","ạ","Ả","ả","Ấ","ấ","Ầ","ầ","Ẩ","ẩ","Ẫ","ẫ","Ậ","ậ","Ắ","ắ","Ằ","ằ","Ẳ","ẳ","Ẵ","ẵ","Ặ","ặ","Ẹ","ẹ","Ẻ","ẻ","Ẽ","ẽ","Ế","ế","Ề","ề","Ể","ể","Ễ","ễ","Ệ","ệ","Ỉ","ỉ","Ị","ị","Ọ","ọ","Ỏ","ỏ","Ố","ố","Ồ","ồ","Ổ","ổ","Ỗ","ỗ","Ộ","ộ","Ớ","ớ","Ờ","ờ","Ở","ở","Ỡ","ỡ","Ợ","ợ","Ụ","ụ","Ủ","ủ","Ứ","ứ","Ừ","ừ","Ử","ử","Ữ","ữ","Ự","ự","Ỳ","ỳ","Ỵ","ỵ","Ỷ","ỷ","Ỹ","ỹ","Ỻ","ỻ"],"BASIC CYRILLIC":["А","Б","В","Г","Д","Е","Ё","Ж","З","И","Й","К","Л","М","Н","О","П","Р","С","Т","У","Ф","Х","Ц","Ч","Ш","Щ","Ъ","Ы","Ь","Э","Ю","Я","Ѓ","Ґ","Ќ","Є","Ї","Љ","Њ","Ћ","Ђ","Ў","Џ","а","б","в","г","д","е","ё","ж","з","и","й","к","л","м","н","о","п","р","с","т","у","ф","х","ц","ч","ш","щ","ъ","ы","ь","э","ю","я","ѓ","ґ","ќ","є","ї","љ","њ","ћ","ђ","ў","џ"],"EXTENDED CYRILLIC":["Ѐ","Ѳ","Ѣ","Ѵ","Ѝ","ѐ","ѳ","ѣ","ѵ","ѝ"],"ARROW":["↕","↖","↗","↘","↙","⇐","⇑","⇓","⇕","⇖","⇗","⇘","⇙","➡","⬅","⬆","⬇","⬈","⬉","⬊","⬋","⬌","⬍"],"GREEK":["Α","Β","Γ","Δ","Ε","Ζ","Η","Θ","Ι","Κ","Λ","Μ","Ν","Ξ","Ο","Π","Ρ","Σ","Τ","Υ","Φ","Χ","Ψ","Ω","Ά","Έ","Ή","Ί","Ό","Ύ","Ώ","Ϊ","Ϋ","α","β","γ","δ","ε","ζ","η","θ","ι","κ","λ","μ","ν","ξ","ο","π","ρ","ς","σ","τ","υ","φ","χ","ψ","ω","ά","έ","ή","ί","ό","ύ","ώ","ϊ","ϋ","ΐ","ΰ"],"DOUBLE STRUCK":["𝔸","𝔹","ℂ","𝔻","𝔼","𝔽","𝔾","ℍ","𝕀","𝕁","𝕂","𝕃","𝕄","ℕ","𝕆","ℙ","ℚ","ℝ","𝕊","𝕋","𝕌","𝕍","𝕎","𝕏","𝕐","ℤ","𝕒","𝕓","𝕔","𝕕","𝕖","𝕗","𝕘","𝕙","𝕚","𝕛","𝕜","𝕝","𝕞","𝕟","𝕠","𝕡","𝕢","𝕣","𝕤","𝕥","𝕦","𝕧","𝕨","𝕩","𝕪","𝕫"],"PUNCTUATION & SYMBOLS":[".",",","-","+","*","˜","/","\\",":",";","<","=",">","!","?","'","\"","#","@","%","&","(",")","{","|","}","†","‡","[","]","‘","’","“","”","‚","„","•","_","–","—","¯","™","®","©","¡","¿","°","ƒ","−","±","×","÷","¦","…","·","ˆ","¨","ª","º","¹","²","³","‰","§","´","¸","~","‹","›","«","»","˘","˙","˚","˝","˛","ˇ","≠","‽"],"SANS ALTERNATES":["𝖠","𝖡","𝖢","𝖣","𝖤","𝖥","𝖦","𝖧","𝖨","𝖩","𝖪","𝖫","𝖬","𝖭","𝖮","𝖯","𝖰","𝖱","𝖲","𝖳","𝖴","𝖵","𝖶","𝖷","𝖸","𝖹","𝖺","𝖻","𝖼","𝖽","𝖾","𝖿","𝗀","𝗁","𝗂","𝗃","𝗄","𝗅","𝗆","𝗇","𝗈","𝗉","𝗊","𝗋","𝗌","𝗍","𝗎","𝗏","𝗐","𝗑","𝗒","𝗓"],"ALTERNATES":["A","A","B","E","F","H","O","H","A","d","P","R","e","Q","b","B","D","E","F","H","F","I","K","L","M","N","P","R","U","A","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z","a","A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"],"CIRCLE":["🅐","🅑","🅒","🅓","🅔","🅕","🅖","🅗","🅘","🅙","🅚","🅛","🅜","🅝","🅞","🅟","🅠","🅡","🅢","🅣","🅤","🅥","🅦","🅧","🅨","🅩","Ⓐ","Ⓑ","Ⓒ","Ⓓ","Ⓔ","Ⓕ","Ⓖ","Ⓗ","Ⓘ","Ⓙ","Ⓚ","Ⓛ","Ⓜ","Ⓝ","Ⓞ","Ⓟ","Ⓠ","Ⓡ","Ⓢ","Ⓣ","Ⓤ","Ⓥ","Ⓦ","Ⓧ","Ⓨ","Ⓩ","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z","ⓐ","ⓑ","ⓒ","ⓓ","ⓔ","ⓕ","ⓖ","ⓗ","ⓘ","ⓙ","ⓚ","ⓛ","ⓜ","ⓝ","ⓞ","ⓟ","ⓠ","ⓡ","ⓢ","ⓣ","ⓤ","ⓥ","ⓦ","ⓧ","ⓨ","ⓩ"]};
const LANGUAGES=["Belarusian", "Bosnian", "Bulgarian", "Chechen", "Macedonian", "Russian", "Serbian", "Ukrainian", "Greek", "Afrikaans", "Albanian", "Asturian", "Asu", "Basque", "Bemba", "Bena", "Breton", "Catalan", "Chiga", "Colognian", "Cornish", "Croatian", "Czech", "Danish", "Dutch", "Embu", "English", "Esperanto", "Estonian", "Faroese", "Filipino", "Finnish", "French", "Friulian", "Galician", "Ganda", "German", "Gusii", "Hungarian", "Icelandic", "Igbo", "Inari Sami", "Indonesian", "Irish", "Italian", "Jola-Fonyi", "Kabuverdianu", "Kalaallisut", "Kalenjin", "Kamba", "Kikuyu", "Kinyarwanda", "Latvian", "Lithuanian", "Lower Sorbian", "Luo", "Luxembourgish", "Luyia", "Machame", "Makhuwa-Meetto", "Makonde", "Malagasy", "Maltese", "Manx", "Meru", "Morisyen", "Nama", "Northern Sami", "North Ndebele", "Norwegian Bokmål", "Norwegian Nynorsk", "Nyankole", "Oromo", "Polish", "Portuguese", "Prussian", "Quechua", "Romanian", "Romansh", "Rombo", "Rundi", "Rwa", "Samburu", "Sango", "Sangu", "Scottish Gaelic", "Sena", "Shambala", "Shona", "Slovak", "Slovenian", "Soga", "Somali", "Spanish", "Swahili", "Swedish", "Swiss German", "Taita", "Teso", "Turkish", "Upper Sorbian", "Uzbek (Latin)", "Vietnamese", "Volapük", "Vunjo", "Walser", "Welsh", "Western Frisian", "Yoruba", "Zulu"];

const ALT_ENTRIES=[{"text": "A", "features": {"swsh": 1}, "name": "swsh A"}, {"text": "B", "features": {"swsh": 1}, "name": "swsh B"}, {"text": "E", "features": {"swsh": 1}, "name": "swsh E"}, {"text": "F", "features": {"swsh": 1}, "name": "swsh F"}, {"text": "H", "features": {"swsh": 1}, "name": "swsh H"}, {"text": "O", "features": {"swsh": 1}, "name": "swsh O"}, {"text": "a", "features": {"swsh": 1}, "name": "swsh a"}, {"text": "A", "features": {"ss04": 1}, "name": "ss04 A"}, {"text": "B", "features": {"ss04": 1}, "name": "ss04 B"}, {"text": "E", "features": {"ss04": 1}, "name": "ss04 E"}, {"text": "F", "features": {"ss04": 1}, "name": "ss04 F"}, {"text": "H", "features": {"ss04": 1}, "name": "ss04 H"}, {"text": "a", "features": {"ss04": 1}, "name": "ss04 a"}, {"text": "n", "features": {"ss04": 1}, "name": "ss04 n"}, {"text": "A", "features": {"ss05": 1}, "name": "ss05 A"}, {"text": "F", "features": {"ss05": 1}, "name": "ss05 F"}, {"text": "a", "features": {"ss05": 1}, "name": "ss05 a"}, {"text": "n", "features": {"ss05": 1}, "name": "ss05 n"}, {"text": "H", "features": {"ss08": 1}, "name": "ss08 H"}, {"text": "O", "features": {"ss08": 1}, "name": "ss08 O"}, {"text": "A", "features": {"fina": 1}, "name": "fina A"}];
const LOOKS={"outline":{"label":"Double-struck","text":"AURA","features":{"titl":1}},"stencil":{"label":"Stencil","text":"ATELIER","features":{"ss07":1}},"sans":{"label":"Sans serif alternates","text":"MODERN","features":{"salt":1}},"stars":{"label":"With stars","text":"NIGHT","features":{"ss06":1}},"circles":{"label":"Outlined circles","text":"EDITION","features":{"ss02":1}},"filled":{"label":"Filled circles","text":"EDITION","features":{"ss03":1}},"swash":{"label":"Swashes","text":"ARSHILA","features":{"swsh":1,"ss04":1}},"alternate5":{"label":"Alternate forms 5","text":"Fable","features":{"ss05":1}},"alternate8":{"label":"Alternate forms 8","text":"OH","features":{"ss08":1}},"editorial":{"label":"Discretionary ligatures","text":"HIGH","features":{"dlig":1}},"standard":{"label":"Standard ligatures","text":"office","features":{"liga":1}},"smallcaps":{"label":"Small caps","text":"atelier","features":{"smcp":1}},"petitecaps":{"label":"Petite caps","text":"ATELIER","features":{"c2sc":1}},"superior":{"label":"Superior figures","text":"H2","features":{"sups":1}},"numerator":{"label":"Numerators","text":"12","features":{"numr":1}},"denominator":{"label":"Denominators","text":"12","features":{"dnom":1}},"inferior":{"label":"Inferior figures","text":"H2O","features":{"subs":1}}};
const $=id=>document.getElementById(id);
const axes={wght:{range:'wghtRange',value:'wghtValue'},wdth:{range:'wdthRange',value:'wdthValue'},ital:{range:'italRange',value:'italValue'}};
const stylePresets={wght:{id:'weightPreset',values:[100,200,300,400,500,600,700,800,900]},wdth:{id:'widthPreset',values:[75,100,125]},ital:{id:'stylePreset',values:[0,1]}};
const defaults={wght:900,wdth:100,ital:0};let state={...defaults};let animationFrame=null;let animationStart=0;
const featureTags=[...new Set(['liga',...Object.values(LOOKS).flatMap(look=>Object.keys(look.features))])];
let activeLook=null;
let features=Object.fromEntries(featureTags.map(tag=>[tag,Number(tag==='liga')]));
function applyFeatures(){
 const specimen=$('liveSpecimen');
 specimen.classList.toggle('has-scoped-swash',activeLook==='swash');
 if(specimen.querySelector('[data-scoped-swash]'))specimen.textContent=specimen.textContent;
 specimen.style.fontFeatureSettings=Object.entries(features).map(([tag,value])=>'"'+tag+'" '+value).join(',');
 if(activeLook==='swash'){
  const text=specimen.textContent,first=text.indexOf('A'),last=text.lastIndexOf('A');
  specimen.style.fontFeatureSettings=Object.entries(features).map(([tag,value])=>'"'+tag+'" '+(['swsh','ss04'].includes(tag)?0:value)).join(',');
  if(first!==-1){
   const wrapper=document.createElement('span');wrapper.dataset.scopedSwash='';
   for(const [index,char] of Array.from(text).entries()){
    // String offsets are used below so non-BMP text before A remains intact.
   }
   const append=(value,tag)=>{const span=document.createElement('span');span.textContent=value;if(tag)span.style.fontFeatureSettings='"swsh" '+Number(tag==='swsh')+',"ss04" '+Number(tag==='ss04');wrapper.append(span)};
   append(text.slice(0,first));append('A','swsh');
   if(last>first){append(text.slice(first+1,last));append('A','ss04');append(text.slice(last+1));}
   else append(text.slice(first+1));
   specimen.replaceChildren(wrapper);
  }
 }
 $('featurePreset').value=activeLook||'original';
 $('useLookExample').hidden=!activeLook;
}
function applyVariable(){
  $('liveSpecimen').style.fontVariationSettings=Object.entries(state).map(([tag,value])=>'"'+tag+'" '+value).join(',');
  for(const [tag,axis] of Object.entries(axes)){
    $(axis.range).value=state[tag];
    $(axis.value).value=tag==='ital'?Number(state[tag]).toFixed(2):Number(state[tag].toFixed(2));
    const preset=stylePresets[tag],match=preset.values.find(value=>Math.abs(value-state[tag])<1e-6);
    const selected=match===undefined?'custom':String(match);
    if($(preset.id).value!==selected)$(preset.id).value=selected;
  }
}
function stopAnimation(){if(animationFrame!==null)cancelAnimationFrame(animationFrame);animationFrame=null;$('playVariable').textContent='Animate';$('playVariable').setAttribute('aria-label','Play variable animation');$('playVariable').setAttribute('aria-pressed','false')}
Object.entries(axes).forEach(([tag,axis])=>$(axis.range).addEventListener('input',()=>{stopAnimation();state[tag]=Number($(axis.range).value);applyVariable()}));
Object.entries(stylePresets).forEach(([tag,preset])=>$(preset.id).addEventListener('change',()=>{
 const value=Number($(preset.id).value);
 if(!preset.values.includes(value))return;
 stopAnimation();state[tag]=value;applyVariable();
}));
$('resetVariable').addEventListener('click',()=>{stopAnimation();state={...defaults};applyVariable()});
const frames=[{wght:900,wdth:100,ital:0},{wght:100,wdth:75,ital:0},{wght:500,wdth:125,ital:0},{wght:900,wdth:125,ital:1},{wght:900,wdth:100,ital:0}];
function animate(time){const p=((time-animationStart)%8000)/8000*4;const index=Math.floor(p),t=p-index,e=t*t*(3-2*t);for(const tag of Object.keys(state))state[tag]=frames[index][tag]+(frames[index+1][tag]-frames[index][tag])*e;applyVariable();animationFrame=requestAnimationFrame(animate)}
$('playVariable').addEventListener('click',()=>{if(animationFrame!==null){stopAnimation();return}animationStart=performance.now();$('playVariable').textContent='Pause';$('playVariable').setAttribute('aria-label','Pause variable animation');$('playVariable').setAttribute('aria-pressed','true');animationFrame=requestAnimationFrame(animate)});
function applySpecimen(){ $('liveSpecimen').style.fontSize=$('sizeRange').value+'px';$('liveSpecimen').style.lineHeight=$('leadingRange').value;$('liveSpecimen').style.letterSpacing=$('trackingRange').value+'em' }
for(const [rangeId,inputId] of [['sizeRange','sizeInput'],['leadingRange','leadingInput'],['trackingRange','trackingInput']]){
 const range=$(rangeId),input=$(inputId);
 range.addEventListener('input',()=>{input.value=range.value;applySpecimen()});
 const commit=()=>{const n=input.valueAsNumber;if(Number.isFinite(n))range.value=String(Math.min(Number(range.max),Math.max(Number(range.min),n)));input.value=range.value;applySpecimen()};
 input.addEventListener('input',()=>{const n=input.valueAsNumber;if(Number.isFinite(n)&&n>=Number(range.min)&&n<=Number(range.max)){range.value=String(n);applySpecimen()}});
 input.addEventListener('blur',commit);input.addEventListener('change',commit);input.addEventListener('keydown',event=>{if(event.key==='Enter'){event.preventDefault();commit()}});
}
const mobile=matchMedia('(max-width:800px)');
function resetSpecimen(){for(const [range,input,value] of [['sizeRange','sizeInput',mobile.matches?40:64],['leadingRange','leadingInput',1.2],['trackingRange','trackingInput',0]]){$(range).value=value;$(input).value=$(range).value}applySpecimen()}
$('resetSpecimen').addEventListener('click',resetSpecimen);
$('featurePreset').addEventListener('change',()=>{
 activeLook=$('featurePreset').value==='original'?null:$('featurePreset').value;
 Object.keys(features).forEach(tag=>features[tag]=tag==='liga'?1:0);
 if(activeLook)Object.assign(features,LOOKS[activeLook].features);
 applyFeatures();
 $('featureStatus').textContent=activeLook==='swash'?'Swashes apply to the first and last capital A.':'';
});
$('useLookExample').addEventListener('click',()=>{
 if(!activeLook)return;
 $('liveSpecimen').textContent=LOOKS[activeLook].text;
 applyFeatures();$('featureStatus').textContent='';
});

$('liveSpecimen').addEventListener('blur',()=>{if(activeLook==='swash')applyFeatures()});

/* Correct feature-specific specimen entries; no aalt-first-choice stand-ins. */
SECTIONS.ALTERNATES=ALT_ENTRIES.map(entry=>entry.text);
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
 const heading=document.createElement('h3');const title=document.createElement('button');title.type='button';title.className='glyph-title';title.setAttribute('aria-expanded','false');title.setAttribute('aria-controls','arshila-grid-'+index);title.innerHTML='<span>'+category.replace('SUPLEMENT','SUPPLEMENT')+'</span><small>'+chars.length+' entries</small>';heading.append(title);
 const grid=document.createElement('div');grid.className='glyph-grid';grid.id='arshila-grid-'+index;grid.hidden=true;
 title.addEventListener('click',()=>{const open=title.getAttribute('aria-expanded')!=='true';title.setAttribute('aria-expanded',String(open));group.classList.toggle('is-open',open);grid.hidden=!open});
 chars.forEach((char,charIndex)=>{
  const cell=document.createElement('button');cell.type='button';cell.className='glyph';cell.textContent=char;cell.dataset.category=category;cell.setAttribute('aria-pressed','false');
  let tags={};if(category==='LIGATURES')tags={liga:1,dlig:1};if(category==='ALTERNATES')tags=ALT_ENTRIES[charIndex].features;if(category==='CIRCLE'&&charIndex>=52&&charIndex<78)tags={ss03:1};
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

/* Arshila in use: thumbnails and full-resolution modal viewer. */
(() => {
  const gallery = document.getElementById('arshila-gallery-track');
  const dialog = document.getElementById('arshila-context-lightbox');
  if (!gallery || !dialog || typeof dialog.showModal !== 'function') return;
  const fullImage = document.getElementById('arshila-context-image');
  const caption = document.getElementById('arshila-context-caption');
  let opener;
  let previousOverflow;
  gallery.querySelectorAll('figure').forEach(figure => {
    const image = figure.querySelector('img');
    const button = document.createElement('button');
    button.type = 'button';
    button.className = 'arshila-context-open';
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
  dialog.querySelector('.arshila-context-close').addEventListener('click', () => dialog.close());
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

const reducedMotion=matchMedia('(prefers-reduced-motion:reduce)');
function pauseHero(paused){document.querySelector('.arshila-variable').style.animationPlayState=paused?'paused':'running';$('heroMotion').setAttribute('aria-pressed',String(paused));$('heroMotion').setAttribute('aria-label',paused?'Play title animation':'Pause title animation');$('heroMotion').firstElementChild.textContent=paused?'▶':'Ⅱ'}
$('heroMotion').addEventListener('click',()=>pauseHero($('heroMotion').getAttribute('aria-pressed')!=='true'));reducedMotion.addEventListener('change',()=>{stopAnimation();pauseHero(reducedMotion.matches)});document.addEventListener('visibilitychange',()=>{if(document.hidden){stopAnimation();document.querySelector('.arshila-variable').style.animationPlayState='paused'}else pauseHero($('heroMotion').getAttribute('aria-pressed')==='true')});
applyVariable();applyFeatures();resetSpecimen();pauseHero(reducedMotion.matches);
