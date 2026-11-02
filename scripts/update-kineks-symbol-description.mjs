import fs from 'node:fs';

const file = 'kineks-symbol.html';
let html = fs.readFileSync(file, 'utf8');

const sectionStart = '<section class="top-grid about-layout" aria-label="About Kineks Symbol">';
const sectionEnd = '</div></section>';
const start = html.indexOf(sectionStart);
if (start === -1) throw new Error('Kineks Symbol about section not found');
const end = html.indexOf(sectionEnd, start);
if (end === -1) throw new Error('Kineks Symbol about section end not found');

const section = html.slice(start, end + sectionEnd.length);
const oldCopyPattern = /<div><div class="kicker">About<\/div><div class="copy">[\s\S]*?<\/div><\/div>\n<div class="about-meta">/;

const newCopy = `<div><div class="kicker">About</div><div class="copy">
<p><strong>Kineks Symbols</strong> is a curated collection of functional symbols designed for digital and physical spaces. Built within the Kineks design language, it brings together directional signs, interface elements, wayfinding symbols, transportation, facilities, safety markers, geometric forms, and everyday visual signs.</p>
<p>Kineks Symbols is designed to work across signage, maps, interfaces, presentations, branding, information graphics, and other visual communication systems.</p>
<p>Rather than trying to cover every possible symbol, Kineks Symbols focuses on a carefully selected set of essential and versatile forms. Each symbol is designed with a consistent visual character, proportion, and rhythm, allowing different categories to work together as one cohesive system.</p>
<p><strong>Kineks Symbols — a visual language for digital and physical space.</strong></p>
</div></div>
<div class="about-meta">`;

if (!oldCopyPattern.test(section)) throw new Error('Existing About copy pattern not found');
const updatedSection = section.replace(oldCopyPattern, newCopy);
html = html.slice(0, start) + updatedSection + html.slice(end + sectionEnd.length);
fs.writeFileSync(file, html);
console.log('Updated Kineks Symbol About description');
