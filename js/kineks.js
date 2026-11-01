'use strict';
(() => {
 const $ = id => document.getElementById(id);
 const preview=$('typePreview'), status=$('styleStatus');
 const defaults={kind:'Sans',weight:'Regular',width:'Normal',style:'Upright'};
 const cache=new Map(); let request=0;
 async function updateStyle(){
  const token=++request;
  const selected=KINEKS_STYLES.find(s=>Object.keys(defaults).every(k=>s[k]===$(k).value));
  if(!selected)return;
  const name='KineksStyle'+KINEKS_STYLES.indexOf(selected);
  status.textContent='Loading selected style…';
  try{
   if(!cache.has(name)){
    const face=new FontFace(name,'url("assets/fonts/'+selected.file+'")');
    cache.set(name,face.load().then(loaded=>{document.fonts.add(loaded);return loaded;}).catch(error=>{cache.delete(name);throw error;}));
   }
   await cache.get(name);
   if(token!==request)return;
   preview.style.fontFamily='"'+name+'"';
   $('glyphGroups').style.setProperty('--selected-font','"'+name+'"');
   document.querySelectorAll('.glyph').forEach(el=>el.style.fontFamily='"'+name+'"');
   $('glyphPreview').style.fontFamily='"'+name+'"';
   status.textContent='Kineks '+selected.kind+' · '+selected.weight.replace('SemiBold','Semi Bold')+' · '+selected.width+' · '+selected.style;
  }catch(error){if(token===request)status.textContent='This style could not load. Please select it again to retry.';}
 }
 Object.keys(defaults).forEach(k=>$(k).addEventListener('change',updateStyle));
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
 $('resetSpecimen').addEventListener('click',()=>{
  Object.entries(defaults).forEach(([k,v])=>$(k).value=v);
  [['size',window.innerWidth<=800?40:60],['leading',1.15],['tracking',0]].forEach(([id,v])=>{
   $(id+'Range').value=v;$(id+'Range').dispatchEvent(new Event('input'));
  });
  preview.textContent='Structure, with character.';updateStyle();
 });
 if(window.innerWidth<=800){$('sizeRange').value=40;$('sizeRange').dispatchEvent(new Event('input'));}
 const groups={};
 KINEKS_CODEPOINTS.forEach(c=>{
  const group=(c>=65&&c<=90)||(c>=97&&c<=122)?'Basic Latin':c>=192&&c<=255?'Latin-1 Supplement':c>=256&&c<=383?'Latin Extended-A':c>=384&&c<=591?'Latin Extended-B':c>=7680&&c<=7935?'Latin Extended Additional':c>=64256&&c<=64260?'Standard Ligatures':(c>=48&&c<=57)||[36,162,163,165,8355,8356,8364].includes(c)?'Numerals & Currencies':'Punctuation & Symbols';
  (groups[group]||=[]).push(c);
 });
 const order=['Basic Latin','Latin-1 Supplement','Latin Extended-A','Latin Extended-B','Latin Extended Additional','Numerals & Currencies','Standard Ligatures','Punctuation & Symbols'];
 Object.entries(groups).sort((a,b)=>order.indexOf(a[0])-order.indexOf(b[0])).forEach(([label,codes],index)=>{
  const group=document.createElement('div');group.className='glyph-group'+(index===0?' is-open':'');
  const toggle=document.createElement('button');toggle.className='glyph-title';toggle.type='button';toggle.setAttribute('aria-expanded',String(index===0));toggle.setAttribute('aria-controls','glyph-grid-'+index);
  const title=document.createElement('span');title.textContent=label;toggle.append(title);
  const count=document.createElement('small');count.textContent=codes.length;toggle.append(count);
  const grid=document.createElement('div');grid.className='glyph-grid';grid.id='glyph-grid-'+index;
  codes.forEach(c=>{
   const char=String.fromCodePoint(c),unicode='U+'+c.toString(16).toUpperCase().padStart(4,'0');
   const button=document.createElement('button');button.type='button';button.className='glyph';button.textContent=char;button.setAttribute('aria-label',char+' '+unicode);
   button.addEventListener('click',()=>{$('glyphPreview').textContent=char;$('glyphPreviewName').textContent=unicode;$('glyphPreviewCategory').textContent=label;});
   grid.append(button);
  });
  toggle.addEventListener('click',()=>{const open=group.classList.toggle('is-open');toggle.setAttribute('aria-expanded',String(open));});
  group.append(toggle,grid);$('glyphGroups').append(group);
 });
 updateStyle();
})();
