import fs from 'node:fs';

function replaceRequired(file, before, after) {
  let text = fs.readFileSync(file, 'utf8');
  if (text.includes(after)) return;
  if (!text.includes(before)) throw new Error(`${file}: pattern not found: ${before}`);
  text = text.replace(before, after);
  fs.writeFileSync(file, text);
}

const metaDescription = 'Kineks Symbols is a curated symbol system for digital and physical spaces, covering wayfinding, interfaces, transportation, facilities, safety, and geometric forms.';
const schemaDescription = 'Kineks Symbols is a curated collection of functional symbols for digital and physical spaces, including directional signs, interface elements, wayfinding, transportation, facilities, safety markers, geometric forms, and everyday visual signs.';

const page = 'kineks-symbol.html';
const replacements = [
  ['<meta name="description" content="Explore arrows, geometric forms and pictograms from Kineks Symbol in an interactive glyph specimen.">', `<meta name="description" content="${metaDescription}">`],
  ['<title>Kineks Symbol — Symbol Typeface | Bykineks</title>', '<title>Kineks Symbols — Symbol Typeface | Bykineks</title>'],
  ['<meta property="og:title" content="Kineks Symbol — Symbol Typeface | Bykineks">', '<meta property="og:title" content="Kineks Symbols — Symbol Typeface | Bykineks">'],
  ['<meta property="og:description" content="Explore arrows, geometric forms and pictograms from Kineks Symbol in an interactive glyph specimen.">', `<meta property="og:description" content="${metaDescription}">`],
  ['<meta property="og:image:alt" content="Kineks Symbol specimen">', '<meta property="og:image:alt" content="Kineks Symbols specimen">'],
  ['<meta name="twitter:title" content="Kineks Symbol — Symbol Typeface | Bykineks">', '<meta name="twitter:title" content="Kineks Symbols — Symbol Typeface | Bykineks">'],
  ['<meta name="twitter:description" content="Explore arrows, geometric forms and pictograms from Kineks Symbol in an interactive glyph specimen.">', `<meta name="twitter:description" content="${metaDescription}">`],
  ['"name": "Kineks Symbol",', '"name": "Kineks Symbols",'],
  ['"description": "Kineks Symbol brings arrows, geometric forms, and pictograms into a single symbol typeface for navigation, marks, patterns, and visual systems.",', `"description": "${schemaDescription}",`],
  ['"name": "Kineks Symbol — Symbol Typeface | Bykineks",', '"name": "Kineks Symbols — Symbol Typeface | Bykineks",'],
  ['<h1 class="product-title">Kineks Symbol</h1>', '<h1 class="product-title">Kineks Symbols</h1>'],
  ['aria-label="About Kineks Symbol"', 'aria-label="About Kineks Symbols"']
];
for (const [before, after] of replacements) replaceRequired(page, before, after);

replaceRequired('index.html', 'aria-label="Kineks Symbol"', 'aria-label="Kineks Symbols"');
replaceRequired('llms.txt', '- Kineks Symbol: https://bykineks.com/kineks-symbol.html', '- Kineks Symbols: https://bykineks.com/kineks-symbol.html');
replaceRequired('blog/what-is-a-type-system/index.html', '>Kineks Symbol</a> extends the visual language', '>Kineks Symbols</a> extends the visual language');

let map = fs.readFileSync('SEO-GEO-CONTENT-MAP.md', 'utf8');
map = map.replaceAll('Kineks Symbol', 'Kineks Symbols');
fs.writeFileSync('SEO-GEO-CONTENT-MAP.md', map);

let schema = fs.readFileSync('scripts/apply-geo-schema.mjs', 'utf8');
schema = schema.replace("file: 'kineks-symbol.html', name: 'Kineks Symbol',", "file: 'kineks-symbol.html', name: 'Kineks Symbols',");
schema = schema.replace("title: 'Kineks Symbol — Symbol Typeface | Bykineks',", "title: 'Kineks Symbols — Symbol Typeface | Bykineks',");
schema = schema.replace("description: 'Kineks Symbol brings arrows, geometric forms, and pictograms into a single symbol typeface for navigation, marks, patterns, and visual systems.',", `description: '${schemaDescription}',`);
if (!schema.includes("name: 'Kineks Symbols'")) throw new Error('schema generator name update failed');
fs.writeFileSync('scripts/apply-geo-schema.mjs', schema);

console.log('Kineks Symbols entity naming and metadata synchronized.');
