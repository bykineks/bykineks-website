import fs from 'node:fs';
import path from 'node:path';

const root = process.cwd();
const baseUrl = 'https://bykineks.com/';
const ignore = new Set(['blog.html']);

const htmlFiles = fs.readdirSync(root)
  .filter((name) => name.endsWith('.html') && !ignore.has(name))
  .sort();

const sitemapPath = path.join(root, 'sitemap.xml');
const llmsPath = path.join(root, 'llms.txt');
const robotsPath = path.join(root, 'robots.txt');

const sitemap = fs.existsSync(sitemapPath) ? fs.readFileSync(sitemapPath, 'utf8') : '';
const llms = fs.existsSync(llmsPath) ? fs.readFileSync(llmsPath, 'utf8') : '';
const robots = fs.existsSync(robotsPath) ? fs.readFileSync(robotsPath, 'utf8') : '';

const errors = [];
const warnings = [];
const products = [];

function canonicalFor(file) {
  return file === 'index.html' ? baseUrl : `${baseUrl}${file}`;
}

function has(pattern, source) {
  return pattern.test(source);
}

for (const file of htmlFiles) {
  const source = fs.readFileSync(path.join(root, file), 'utf8');
  const isProduct = /<main\s+class=["'][^"']*\bproduct\b/i.test(source);
  const canonical = canonicalFor(file);

  if (!has(/<title>[^<]+<\/title>/i, source)) {
    errors.push(`${file}: missing <title>`);
  }

  if (!has(/<meta\s+name=["']description["']\s+content=["'][^"']+["']/i, source)) {
    errors.push(`${file}: missing meta description`);
  }

  if (!has(/<h1\b/i, source)) {
    warnings.push(`${file}: no visible <h1>`);
  }

  if (!source.includes(`rel="canonical" href="${canonical}"`) &&
      !source.includes(`rel='canonical' href='${canonical}'`)) {
    warnings.push(`${file}: canonical should be ${canonical}`);
  }

  if (!source.includes(`property="og:url" content="${canonical}"`) &&
      !source.includes(`property='og:url' content='${canonical}'`)) {
    warnings.push(`${file}: missing or inconsistent og:url`);
  }

  if (isProduct) {
    products.push(file);

    if (!sitemap.includes(`<loc>${canonical}</loc>`)) {
      errors.push(`${file}: product page missing from sitemap.xml`);
    }

    if (!has(/<script\s+type=["']application\/ld\+json["']/i, source)) {
      warnings.push(`${file}: product page has no JSON-LD yet`);
    }

    if (!llms.includes(canonical)) {
      warnings.push(`${file}: product page is not referenced in llms.txt`);
    }
  }
}

if (!robots.includes('Sitemap: https://bykineks.com/sitemap.xml')) {
  errors.push('robots.txt: missing canonical sitemap declaration');
}

if (!sitemap.includes('<loc>https://bykineks.com/</loc>')) {
  errors.push('sitemap.xml: homepage missing');
}

console.log(`GEO audit: ${htmlFiles.length} root HTML pages, ${products.length} product pages.`);

if (warnings.length) {
  console.log('\nWarnings:');
  for (const warning of warnings) console.log(`- ${warning}`);
}

if (errors.length) {
  console.error('\nErrors:');
  for (const error of errors) console.error(`- ${error}`);
  process.exit(1);
}

console.log('\nNo blocking GEO errors found.');
