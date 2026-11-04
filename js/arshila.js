const SECTIONS={"BASIC LATIN":["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"],"LATIN-1 SUPLEMENT":["À","Á","Â","Ã","Å","Æ","Ç","È","É","Ê","Ë","Ì","Í","Î","Ï","Ð","Ñ","Ò","Ó","Ô","Õ","Ö","Ø","Ù","Ú","Û","Ü","Ý","Þ","ß","à","á","â","ã","ä","å","æ","ç","è","é","ê","ë","ì","í","î","ï","ð","ñ","ò","ó","ô","õ","ö","ø","ù","ú","û","ü","ý","þ","ÿ"],"LATIN EXTENDED-A":["Ā","ā","Ă","ă","Ą","ą","Ć","ć","Ĉ","ĉ","Ċ","ċ","Č","č","Ď","ď","Đ","đ","Ē","ē","Ĕ","ĕ","Ė","ė","Ę","ę","Ě","ě","Ĝ","ĝ","Ğ","ğ","Ġ","ġ","Ģ","ģ","Ĥ","ĥ","Ħ","ħ","Ĩ","ĩ","Ī","ī","Ĭ","ĭ","Į","į","İ","ı","Ĳ","ĳ","Ĵ","ĵ","Ķ","ķ","ĸ","ü","Ĺ","ĺ","Ļ","ļ","Ľ","ľ","Ŀ","ŀ","Ł","ł","Ń","ń","Ņ","ņ","Ň","ň","ŉ","Ŋ","ŋ","Ō","ō","Ŏ","ŏ","Ő","ő","Œ","œ","Ŕ","ŕ","Ŗ","ŗ","Ř","ř","Ś","ś","Ŝ","ŝ","Ş","ş","Š","š","Ţ","ţ","Ť","ť","Ŧ","ŧ","Ũ","ũ","Ū","ū","Ŭ","ŭ","Ů","ů","Ű","ű","Ų","ų","Ŵ","ŵ","Ŷ","ŷ","Ÿ","Ź","ź","Ż","ż","Ž","ž","ſ"],"LATIN EXTENDED-B":["ƀ","Ƃ","ƃ","Ț","ƅ","Ɔ","Ɖ","Ƌ","ƌ","ƍ","Ǝ","ȗ","Ɛ","Ƒ","ƒ","ƕ","Ș","Ɨ","ƚ","ș","Ɯ","Ɲ","ƞ","Ɵ","Ơ","ơ","Ƨ","ƨ","Ʃ","Ʈ","Ư","ư","Ʊ","Ʋ","ț","Ƶ","ƶ","Ʒ","Ƹ","ƻ","ǀ","ǁ","ǂ","ǃ","Ǆ","ǆ","Ǉ","ǈ","ǉ","Ǌ","ǋ","ǌ","Ǎ","ǎ","Ǐ","ǐ","Ǒ","ǒ","Ǔ","ǔ","Ǖ","ǖ","Ǘ","ǘ","Ǚ","ǚ","Ǜ","ǜ","ǝ","Ǟ","ǟ","Ǡ","ǡ","Ǣ","ǣ","Ǧ","ǧ","Ǩ","ǩ","Ǫ","ǫ","Ǭ","ǭ","Ǯ","ǯ","ǰ","Ǳ","ǲ","ǅ","ǳ","Ǵ","ǵ","Ƕ","Ǹ","ǹ","Ǻ","ǻ","Ǽ","ǽ","Ǿ","ǿ","Ȁ","ȁ","Ȃ","ȃ","Ȅ","ȅ","Ȇ","ȇ","Ȉ","ȉ","Ȋ","ȋ","Ȍ","ȍ","Ȏ","ȏ","Ȑ","ȑ","Ȓ","ȓ","Ȕ","ȕ","Ȗ","Ȟ","ȟ","Ȧ","ȧ","Ȩ","ȩ","Ȫ","ȫ","Ȭ","ȭ","Ȯ","ȯ","Ȱ","ȱ","Ȳ","ȳ","ȷ","ȸ","ȹ","Ⱥ","Ȼ","ȼ","Ƚ","Ⱦ","Ƀ","Ʉ","Ʌ","Ɇ","ɇ","Ɉ","ɉ","ɋ","Ɍ","ɍ","ɏ","Ꝃ","Ʞ","ꭑ","ə"],"NUMERAL & CURRENCIES":["0","1","2","3","4","5","6","7","8","9","$","¢","£","¤","¥","₣","₤","₧","€"],"LIGATURES":["ft","fb","ffb","ffh","ffj","ffk","fh","fj","fk","ſi","ſl","ſſ","ſſi","ſſl","ff","fi","fl","ffi","ffl","HA","HI","HU","HE","HO","AH","IH","UH","EH","OH","MA","MI","MU","ME","MO","ER","TT","BY","EN","EA","TH","La","Li","Lu","Le","Lo","Th","AU","il","ib","ik","ih","II"],"LATIN EXTENDED ADDITIONAL":["Ḁ","ḁ","Ḃ","ḃ","Ḅ","ḅ","Ḇ","ḇ","Ḉ","ḉ","Ḋ","ḋ","Ḍ","ḍ","Ḏ","ḏ","Ḑ","ḑ","Ḓ","ḓ","Ḕ","ḕ","Ḗ","ḗ","Ḙ","ḙ","Ḛ","ḛ","Ḝ","ḝ","Ḟ","ḟ","Ḡ","ḡ","Ḣ","ḣ","Ḥ","ḥ","Ḧ","ḧ","Ḩ","ḩ","Ḫ","ḫ","Ḭ","ḭ","Ḯ","ḯ","Ḱ","ḱ","Ḳ","ḳ","Ḵ","ḵ","Ḷ","ḷ","Ḹ","ḹ","Ḻ","ḻ","Ḽ","ḽ","Ḿ","ḿ","Ṁ","ṁ","Ṃ","ṃ","Ṅ","ṅ","Ṇ","ṇ","Ṉ","ṉ","Ṋ","ṋ","Ṍ","ṍ","Ṏ","ṏ","Ṑ","ṑ","Ṓ","ṓ","Ṕ","ṕ","Ṗ","ṗ","Ṙ","ṙ","Ṛ","ṛ","Ṝ","ṝ","Ṟ","ṟ","Ṡ","ṡ","Ṣ","ṣ","Ṥ","ṥ","Ṧ","ṧ","Ṩ","ṩ","Ṫ","ṫ","Ṭ","ṭ","Ṯ","ṯ","Ṱ","ṱ","Ṳ","ṳ","Ṵ","ṵ","Ṷ","ṷ","Ṹ","ṹ","Ṻ","ṻ","Ṽ","ṽ","Ṿ","ṿ","Ẁ","ẁ","Ẃ","ẃ","Ẅ","ẅ","Ẇ","ẇ","Ẉ","ẉ","Ẋ","ẋ","Ẍ","ẍ","Ẏ","ẏ","Ẑ","ẑ","Ẓ","ẓ","Ẕ","ẕ","ẖ","ẗ","ẘ","ẙ","ẚ","ẛ","ẜ","ẝ","ẞ","Ạ","ạ","Ả","ả","Ấ","ấ","Ầ","ầ","Ẩ","ẩ","Ẫ","ẫ","Ậ","ậ","Ắ","ắ","Ằ","ằ","Ẳ","ẳ","Ẵ","ẵ","Ặ","ặ","Ẹ","ẹ","Ẻ","ẻ","Ẽ","ẽ","Ế","ế","Ề","ề","Ể","ể","Ễ","ễ","Ệ","ệ","Ỉ","ỉ","Ị","ị","Ọ","ọ","Ỏ","ỏ","Ố","ố","Ồ","ồ","Ổ","ổ","Ỗ","ỗ","Ộ","ộ","Ớ","ớ","Ờ","ờ","Ở","ở","Ỡ","ỡ","Ợ","ợ","Ụ","ụ","Ủ","ủ","Ứ","ứ","Ừ","ừ","Ử","ử","Ữ","ữ","Ự","ự","Ỳ","ỳ","Ỵ","ỵ","Ỷ","ỷ","Ỹ","ỹ","Ỻ","ỻ"],"BASIC CYRILLIC":["А","Б","В","Г","Д","Е","Ё","Ж","З","И","Й","К","Л","М","Н","О","П","Р","С","Т","У","Ф","Х","Ц","Ч","Ш","Щ","Ъ","Ы","Ь","Э","Ю","Я","Ѓ","Ґ","Ќ","Є","Ї","Љ","Њ","Ћ","Ђ","Ў","Џ","а","б","в","г","д","е","ё","ж","з","и","й","к","л","м","н","о","п","р","с","т","у","ф","х","ц","ч","ш","щ","ъ","ы","ь","э","ю","я","ѓ","ґ","ќ","є","ї","љ","њ","ћ","ђ","ў","џ"],"EXTENDED CYRILLIC":["Ѐ","Ѳ","Ѣ","Ѵ","Ѝ","ѐ","ѳ","ѣ","ѵ","ѝ"],"ARROW":["↕","↖","↗","↘","↙","⇐","⇑","⇓","⇕","⇖","⇗","⇘","⇙","➡","⬅","⬆","⬇","⬈","⬉","⬊","⬋","⬌","⬍"],"GREEK":["Α","Β","Γ","Δ","Ε","Ζ","Η","Θ","Ι","Κ","Λ","Μ","Ν","Ξ","Ο","Π","Ρ","Σ","Τ","Υ","Φ","Χ","Ψ","Ω","Ά","Έ","Ή","Ί","Ό","Ύ","Ώ","Ϊ","Ϋ","α","β","γ","δ","ε","ζ","η","θ","ι","κ","λ","μ","ν","ξ","ο","π","ρ","ς","σ","τ","υ","φ","χ","ψ","ω","ά","έ","ή","ί","ό","ύ","ώ","ϊ","ϋ","ΐ","ΰ"],"DOUBLE STRUCK":["𝔸","𝔹","ℂ","𝔻","𝔼","𝔽","𝔾","ℍ","𝕀","𝕁","𝕂","𝕃","𝕄","ℕ","𝕆","ℙ","ℚ","ℝ","𝕊","𝕋","𝕌","𝕍","𝕎","𝕏","𝕐","ℤ","𝕒","𝕓","𝕔","𝕕","𝕖","𝕗","𝕘","𝕙","𝕚","𝕛","𝕜","𝕝","𝕞","𝕟","𝕠","𝕡","𝕢","𝕣","𝕤","𝕥","𝕦","𝕧","𝕨","𝕩","𝕪","𝕫"],"PUNCTUATION & SYMBOLS":[".",",","-","+","*","˜","/","\\",":",";","<","=",">","!","?","'","\"","#","@","%","&","(",")","{","|","}","†","‡","[","]","‘","’","“","”","‚","„","•","_","–","—","¯","™","®","©","¡","¿","°","ƒ","−","±","×","÷","¦","…","·","ˆ","¨","ª","º","¹","²","³","‰","§","´","¸","~","‹","›","«","»","˘","˙","˚","˝","˛","ˇ","≠","‽"],"SANS ALTERNATES":["𝖠","𝖡","𝖢","𝖣","𝖤","𝖥","𝖦","𝖧","𝖨","𝖩","𝖪","𝖫","𝖬","𝖭","𝖮","𝖯","𝖰","𝖱","𝖲","𝖳","𝖴","𝖵","𝖶","𝖷","𝖸","𝖹","𝖺","𝖻","𝖼","𝖽","𝖾","𝖿","𝗀","𝗁","𝗂","𝗃","𝗄","𝗅","𝗆","𝗇","𝗈","𝗉","𝗊","𝗋","𝗌","𝗍","𝗎","𝗏","𝗐","𝗑","𝗒","𝗓"],"ALTERNATES":["A","A","B","E","F","H","O","H","A","d","P","R","e","Q","b","B","D","E","F","H","F","I","K","L","M","N","P","R","U","A","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z","a","A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"],"CIRCLE":["🅐","🅑","🅒","🅓","🅔","🅕","🅖","🅗","🅘","🅙","🅚","🅛","🅜","🅝","🅞","🅟","🅠","🅡","🅢","🅣","🅤","🅥","🅦","🅧","🅨","🅩","Ⓐ","Ⓑ","Ⓒ","Ⓓ","Ⓔ","Ⓕ","Ⓖ","Ⓗ","Ⓘ","Ⓙ","Ⓚ","Ⓛ","Ⓜ","Ⓝ","Ⓞ","Ⓟ","Ⓠ","Ⓡ","Ⓢ","Ⓣ","Ⓤ","Ⓥ","Ⓦ","Ⓧ","Ⓨ","Ⓩ","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z","ⓐ","ⓑ","ⓒ","ⓓ","ⓔ","ⓕ","ⓖ","ⓗ","ⓘ","ⓙ","ⓚ","ⓛ","ⓜ","ⓝ","ⓞ","ⓟ","ⓠ","ⓡ","ⓢ","ⓣ","ⓤ","ⓥ","ⓦ","ⓧ","ⓨ","ⓩ"]};
const LANGUAGES=["Belarusian", "Bosnian", "Bulgarian", "Chechen", "Macedonian", "Russian", "Serbian", "Ukrainian", "Greek", "Afrikaans", "Albanian", "Asturian", "Asu", "Basque", "Bemba", "Bena", "Breton", "Catalan", "Chiga", "Colognian", "Cornish", "Croatian", "Czech", "Danish", "Dutch", "Embu", "English", "Esperanto", "Estonian", "Faroese", "Filipino", "Finnish", "French", "Friulian", "Galician", "Ganda", "German", "Gusii", "Hungarian", "Icelandic", "Igbo", "Inari Sami", "Indonesian", "Irish", "Italian", "Jola-Fonyi", "Kabuverdianu", "Kalaallisut", "Kalenjin", "Kamba", "Kikuyu", "Kinyarwanda", "Latvian", "Lithuanian", "Lower Sorbian", "Luo", "Luxembourgish", "Luyia", "Machame", "Makhuwa-Meetto", "Makonde", "Malagasy", "Maltese", "Manx", "Meru", "Morisyen", "Nama", "Northern Sami", "North Ndebele", "Norwegian Bokmål", "Norwegian Nynorsk", "Nyankole", "Oromo", "Polish", "Portuguese", "Prussian", "Quechua", "Romanian", "Romansh", "Rombo", "Rundi", "Rwa", "Samburu", "Sango", "Sangu", "Scottish Gaelic", "Sena", "Shambala", "Shona", "Slovak", "Slovenian", "Soga", "Somali", "Spanish", "Swahili", "Swedish", "Swiss German", "Taita", "Teso", "Turkish", "Upper Sorbian", "Uzbek (Latin)", "Vietnamese", "Volapük", "Vunjo", "Walser", "Welsh", "Western Frisian", "Yoruba", "Zulu"];

const ALT_ENTRIES=[{"text": "A", "features": {"swsh": 1}, "name": "swsh A"}, {"text": "B", "features": {"swsh": 1}, "name": "swsh B"}, {"text": "E", "features": {"swsh": 1}, "name": "swsh E"}, {"text": "F", "features": {"swsh": 1}, "name": "swsh F"}, {"text": "H", "features": {"swsh": 1}, "name": "swsh H"}, {"text": "O", "features": {"swsh": 1}, "name": "swsh O"}, {"text": "a", "features": {"swsh": 1}, "name": "swsh a"}, {"text": "A", "features": {"ss04": 1}, "name": "ss04 A"}, {"text": "B", "features": {"ss04": 1}, "name": "ss04 B"}, {"text": "E", "features": {"ss04": 1}, "name": "ss04 E"}, {"text": "F", "features": {"ss04": 1}, "name": "ss04 F"}, {"text": "H", "features": {"ss04": 1}, "name": "ss04 H"}, {"text": "a", "features": {"ss04": 1}, "name": "ss04 a"}, {"text": "n", "features": {"ss04": 1}, "name": "ss04 n"}, {"text": "A", "features": {"ss05": 1}, "name": "ss05 A"}, {"text": "F", "features": {"ss05": 1}, "name": "ss05 F"}, {"text": "a", "features": {"ss05": 1}, "name": "ss05 a"}, {"text": "n", "features": {"ss05": 1}, "name": "ss05 n"}, {"text": "H", "features": {"ss08": 1}, "name": "ss08 H"}, {"text": "O", "features": {"ss08": 1}, "name": "ss08 O"}, {"text": "A", "features": {"fina": 1}, "name": "fina A"}];
const LOOKS={"outline":{"label":"Double-struck","text":"AURA","features":{"titl":1}},"stencil":{"label":"Stencil","text":"ATELIER","features":{"ss07":1}},"sans":{"label":"Sans serif alternates","text":"MODERN","features":{"salt":1}},"stars":{"label":"With stars","text":"NIGHT","features":{"ss06":1}},"circles":{"label":"Outlined circles","text":"EDITION","features":{"ss02":1}},"filled":{"label":"Filled circles","text":"EDITION","features":{"ss03":1}},"swash":{"label":"Swashes","text":"ARSHILA","features":{"swsh":1,"ss04":1},"markup":"<span style=\"font-feature-settings:'swsh' 1,'ss04' 0\">A</span><span style=\"font-feature-settings:'swsh' 0,'ss04' 0\">RSHIL</span><span style=\"font-feature-settings:'swsh' 0,'ss04' 1\">A</span>"},"alternate5":{"label":"Alternate forms 5","text":"Fable","features":{"ss05":1}},"alternate8":{"label":"Alternate forms 8","text":"OH","features":{"ss08":1}},"editorial":{"label":"Discretionary ligatures","text":"HIGH","features":{"dlig":1}},"standard":{"label":"Standard ligatures","text":"office","features":{"liga":1}},"smallcaps":{"label":"Small caps","text":"atelier","features":{"smcp":1}},"petitecaps":{"label":"Petite caps","text":"ATELIER","features":{"c2sc":1}},"superior":{"label":"Superior figures","text":"H2","features":{"sups":1}},"numerator":{"label":"Numerators","text":"12","features":{"numr":1}},"denominator":{"label":"Denominators","text":"12","features":{"dnom":1}},"inferior":{"label":"Inferior figures","text":"H2O","features":{"subs":1}}};
const $=id=>document.getElementById(id);
const axes={wght:{range:'wghtRange',value:'wghtValue'},wdth:{range:'wdthRange',value:'wdthValue'},ital:{range:'italRange',value:'italValue'}};
const defaults={wght:900,wdth:100,ital:0};let state={...defaults};let animationFrame=null;let animationStart=0;
const featureButtons=[...document.querySelectorAll('[data-feature]')];
let features=Object.fromEntries(featureButtons.map(button=>[button.dataset.feature,button.dataset.feature==='liga'?1:0]));
function applyFeatures(){
  if($('liveSpecimen').querySelector('[data-scoped-swash]'))$('liveSpecimen').textContent=$('liveSpecimen').textContent;
  document.querySelectorAll('[data-look]').forEach(button=>{
    const expected={...Object.fromEntries(Object.keys(features).map(tag=>[tag,tag==='liga'?1:0])),...LOOKS[button.dataset.look].features};
    button.setAttribute('aria-pressed',String($('liveSpecimen').textContent===LOOKS[button.dataset.look].text&&Object.keys(features).every(tag=>features[tag]===expected[tag])));
  });
  $('liveSpecimen').style.fontFeatureSettings=Object.entries(features).map(([tag,value])=>'"'+tag+'" '+value).join(',');
  featureButtons.forEach(button=>{const on=!!features[button.dataset.feature];button.setAttribute('aria-pressed',String(on));button.classList.toggle('is-on',on)});
}
function applyVariable(){
  $('liveSpecimen').style.fontVariationSettings=Object.entries(state).map(([tag,value])=>'"'+tag+'" '+value).join(',');
  for(const [tag,axis] of Object.entries(axes)){$(axis.range).value=state[tag];$(axis.value).value=tag==='ital'?Number(state[tag]).toFixed(2):Math.round(state[tag])}
}
function stopAnimation(){if(animationFrame!==null)cancelAnimationFrame(animationFrame);animationFrame=null;$('playVariable').textContent='Animate';$('playVariable').setAttribute('aria-label','Play variable animation');$('playVariable').setAttribute('aria-pressed','false')}
Object.entries(axes).forEach(([tag,axis])=>$(axis.range).addEventListener('input',()=>{stopAnimation();state[tag]=Number($(axis.range).value);applyVariable()}));
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
featureButtons.forEach(button=>button.addEventListener('click',()=>{
 const tag=button.dataset.feature,on=!features[tag];
 if(on && ['Form','Figures'].includes(button.dataset.group) && !$('combineFeatures').checked)featureButtons.filter(other=>other.dataset.group===button.dataset.group).forEach(other=>features[other.dataset.feature]=0);
 features[tag]=Number(on);applyFeatures();$('featureStatus').textContent=button.querySelector('span').firstChild.textContent.trim()+(on?' enabled.':' disabled.');
}));
$('combineFeatures').addEventListener('change',()=>{if(!$('combineFeatures').checked){for(const group of ['Form','Figures']){const selected=featureButtons.filter(button=>button.dataset.group===group&&features[button.dataset.feature]);selected.slice(0,-1).forEach(button=>features[button.dataset.feature]=0)}applyFeatures();$('featureStatus').textContent='Guided feature selection restored.'}});
$('resetFeatures').addEventListener('click',()=>{$('combineFeatures').checked=false;Object.keys(features).forEach(tag=>features[tag]=tag==='liga'?1:0);applyFeatures();$('featureStatus').textContent='Standard forms restored.'});
document.querySelectorAll('[data-look]').forEach(button=>button.addEventListener('click',()=>{
 stopAnimation();Object.keys(features).forEach(tag=>features[tag]=tag==='liga'?1:0);Object.assign(features,LOOKS[button.dataset.look].features);applyFeatures();
 const look=LOOKS[button.dataset.look];$('liveSpecimen').textContent=look.text;resetSpecimen();document.querySelectorAll('[data-text]').forEach(item=>item.setAttribute('aria-pressed','false'));applyFeatures();if(look.markup){$('liveSpecimen').innerHTML='<span data-scoped-swash>'+look.markup+'</span>';$('combineFeatures').checked=true;}$('featureStatus').textContent=look.label+' example loaded.';
 $('systemTitle').focus({preventScroll:true});$('system').scrollIntoView({behavior:reducedMotion.matches?'instant':'smooth'});
}));
document.querySelectorAll('[data-text]').forEach(button=>button.addEventListener('click',()=>{
  $('liveSpecimen').textContent=button.dataset.text;stopAnimation();
  const paragraph=button.textContent==='Paragraph';
  for(const [range,input,value] of [['sizeRange','sizeInput',paragraph?24:(mobile.matches?40:64)],['leadingRange','leadingInput',paragraph?1.4:1.2]]){$(range).value=value;$(input).value=$(range).value;}
  document.querySelectorAll('[data-text]').forEach(item=>item.setAttribute('aria-pressed',String(item===button)));applySpecimen();
}));
$('liveSpecimen').addEventListener('input',()=>document.querySelectorAll('[data-text]').forEach(button=>button.setAttribute('aria-pressed','false')));

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
document.querySelector('[data-text]').setAttribute('aria-pressed','true');
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

/* Full-width mockup carousel, matching Bia. */
(() => {
  const track = document.getElementById('arshila-gallery-track');
  const controls = track.nextElementSibling;
  const [previous, next] = controls.querySelectorAll('button');
  const counter = controls.querySelector('span');
  const slides = track.children;
  const number = value => String(value).padStart(2, '0');
  const index = () => Math.max(0, Math.min(slides.length - 1,
    Math.round(track.scrollLeft / slides[0].getBoundingClientRect().width)));

  function sync() {
    const current = index();
    const label = number(current + 1) + ' / ' + number(slides.length);
    if (counter.textContent !== label) counter.textContent = label;
    previous.setAttribute('aria-disabled', String(current === 0));
    next.setAttribute('aria-disabled', String(current === slides.length - 1));
  }

  function move(step) {
    const target = slides[index() + step];
    if (!target) return;
    track.scrollLeft += target.getBoundingClientRect().left - track.getBoundingClientRect().left;
    sync();
  }

  previous.addEventListener('click', () => move(-1));
  next.addEventListener('click', () => move(1));
  track.addEventListener('keydown', event => {
    if (event.key !== 'ArrowLeft' && event.key !== 'ArrowRight') return;
    event.preventDefault();
    move(event.key === 'ArrowLeft' ? -1 : 1);
  });
  track.addEventListener('scroll', sync, {passive: true});
  window.addEventListener('resize', sync);
  controls.hidden = false;
  sync();
})();

const reducedMotion=matchMedia('(prefers-reduced-motion:reduce)');
function pauseHero(paused){document.querySelector('.arshila-variable').style.animationPlayState=paused?'paused':'running';$('heroMotion').setAttribute('aria-pressed',String(paused));$('heroMotion').setAttribute('aria-label',paused?'Play title animation':'Pause title animation');$('heroMotion').firstElementChild.textContent=paused?'▶':'Ⅱ'}
$('heroMotion').addEventListener('click',()=>pauseHero($('heroMotion').getAttribute('aria-pressed')!=='true'));reducedMotion.addEventListener('change',()=>{stopAnimation();pauseHero(reducedMotion.matches)});document.addEventListener('visibilitychange',()=>{if(document.hidden){stopAnimation();document.querySelector('.arshila-variable').style.animationPlayState='paused'}else pauseHero($('heroMotion').getAttribute('aria-pressed')==='true')});
applyVariable();applyFeatures();resetSpecimen();pauseHero(reducedMotion.matches);

/* Keep the complete wardrobe within one category panel at a time. */
(() => {
 const tabs=[...document.querySelectorAll('.wardrobe-tabs [role="tab"]')];
 const panels=[...document.querySelectorAll('.wardrobe-group')];
 function select(index,focus=false){
  tabs.forEach((tab,i)=>{tab.setAttribute('aria-selected',String(i===index));tab.tabIndex=i===index?0:-1;panels[i].hidden=i!==index;});
  if(focus)tabs[index].focus();
 }
 tabs.forEach((tab,index)=>{
  const panel=panels[index];panel.setAttribute('role','tabpanel');panel.setAttribute('aria-labelledby',tab.id);panel.tabIndex=0;
  tab.addEventListener('click',()=>select(index));
  tab.addEventListener('keydown',event=>{
   let target=index;
   if(event.key==='ArrowRight')target=(index+1)%tabs.length;
   else if(event.key==='ArrowLeft')target=(index+tabs.length-1)%tabs.length;
   else if(event.key==='Home')target=0;
   else if(event.key==='End')target=tabs.length-1;
   else return;
   event.preventDefault();select(target,true);
  });
 });
 document.querySelector('.wardrobe-tabs').hidden=false;
 document.querySelector('.wardrobe-swipe').hidden=false;
 document.querySelector('.feature-library').classList.add('has-category-tabs');
 select(0);
})();
