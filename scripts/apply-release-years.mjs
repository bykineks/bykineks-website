import fs from 'node:fs';

const RELEASES = {
  'kineks-symbol.html': '2026',
  'dareva.html': '2026',
  'bilgen.html': '2024',
  'gin.html': '2022',
  'neela.html': '2023',
  'wakaba.html': '2022'
};

function ensurePublishedRow(file, year) {
  let html = fs.readFileSync(file, 'utf8');
  const existing = /<div class="(?:about-meta-item|info-item)">\s*(?:<div class="font-info-label">|<span>)Published(?:<\/div>|<\/span>)\s*(?:<div class="font-info-value">|<strong>)([^<]+)(?:<\/div>|<\/strong>)\s*<\/div>/m;

  if (existing.test(html)) {
    html = html.replace(existing, (match, current) => current.trim() === year ? match : match.replace(current, year));
  } else if (html.includes('<div class="about-meta">')) {
    const row = `<div class="about-meta-item"><div class="font-info-label">Published</div><div class="font-info-value">${year}</div></div>\n`;
    html = html.replace('<div class="about-meta">\n', `<div class="about-meta">\n${row}`);
  } else if (html.includes('<div class="font-info">')) {
    const row = `    <div class="info-item"><span>Published</span><strong>${year}</strong></div>\n`;
    html = html.replace('<div class="font-info">\n', `<div class="font-info">\n${row}`);
  } else {
    throw new Error(`${file}: could not find metadata container`);
  }

  const marker = '<!-- GEO:PRODUCT-SCHEMA -->';
  const markerIndex = html.indexOf(marker);
  if (markerIndex !== -1) {
    const scriptOpen = '<script type="application/ld+json">';
    const scriptStart = html.indexOf(scriptOpen, markerIndex);
    const scriptEnd = html.indexOf('</script>', scriptStart);
    if (scriptStart !== -1 && scriptEnd !== -1) {
      const jsonStart = scriptStart + scriptOpen.length;
      const jsonText = html.slice(jsonStart, scriptEnd).trim();
      const data = JSON.parse(jsonText);
      const graph = Array.isArray(data['@graph']) ? data['@graph'] : [];
      const product = graph.find(item => item && item['@type'] === 'Product');
      if (product) {
        product.releaseDate = year;
        const replacement = `${scriptOpen}\n${JSON.stringify(data, null, 2)}\n`;
        html = html.slice(0, scriptStart) + replacement + html.slice(scriptEnd);
      }
    }
  }

  fs.writeFileSync(file, html);
  console.log(`updated ${file} -> ${year}`);
}

for (const [file, year] of Object.entries(RELEASES)) {
  ensurePublishedRow(file, year);
}

const configFile = 'scripts/apply-geo-schema.mjs';
let config = fs.readFileSync(configFile, 'utf8');
const replacements = [
  ["category: 'Symbol typeface',\n    props:", "category: 'Symbol typeface', releaseDate: '2026',\n    props:"],
  ["category: 'Typeface family',\n    props: { Styles: '36'", "category: 'Typeface family', releaseDate: '2026',\n    props: { Styles: '36'"],
  ["category: 'Typeface family',\n    props: { Styles: '27', 'Glyphs in Regular': '1,737'", "category: 'Typeface family', releaseDate: '2024',\n    props: { Styles: '27', 'Glyphs in Regular': '1,737'"],
  ["category: 'Display script typeface',\n    props:", "category: 'Display script typeface', releaseDate: '2022',\n    props:"],
  ["category: 'Typeface family',\n    props: { Styles: '27', 'Glyphs in Regular': '206'", "category: 'Typeface family', releaseDate: '2023',\n    props: { Styles: '27', 'Glyphs in Regular': '206'"],
  ["category: 'Handwritten display typeface',\n    props:", "category: 'Handwritten display typeface', releaseDate: '2022',\n    props:"]
];

for (const [before, after] of replacements) {
  if (config.includes(after)) continue;
  if (!config.includes(before)) throw new Error(`config pattern not found: ${before}`);
  config = config.replace(before, after);
}
fs.writeFileSync(configFile, config);
console.log('updated schema rollout releaseDate config');
