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
const titleOwners = new Map();
const descriptionOwners = new Map();

function canonicalFor(file) {
  return file === 'index.html' ? baseUrl : `${baseUrl}${file}`;
}

function has(pattern, source) {
  return pattern.test(source);
}

function capture(pattern, source) {
  return source.match(pattern)?.[1]?.trim() || '';
}

function addOwner(map, key, file) {
  if (!key) return;
  if (!map.has(key)) map.set(key, []);
  map.get(key).push(file);
}

function localTargetExists(file, href) {
  if (!href || href.startsWith('#') || href.startsWith('mailto:') || href.startsWith('tel:') || href.startsWith('javascript:')) return true;
  if (/^https?:\/\//i.test(href) || href.startsWith('//')) return true;

  const clean = href.split('#')[0].split('?')[0];
  if (!clean) return true;

  const fromDir = path.dirname(path.join(root, file));
  const target = path.resolve(fromDir, clean);

  if (fs.existsSync(target)) return true;
  if (clean.endsWith('/') && fs.existsSync(path.join(target, 'index.html'))) return true;
  return false;
}

for (const file of htmlFiles) {
  const source = fs.readFileSync(path.join(root, file), 'utf8');
  const isProduct = /<main\s+class=["'][^"']*\bproduct\b/i.test(source);
  const canonical = canonicalFor(file);

  const title = capture(/<title>([^<]+)<\/title>/i, source);
  const description = capture(/<meta\s+name=["']description["']\s+content=["']([^"']+)["']/i, source);

  if (!title) errors.push(`${file}: missing <title>`);
  if (!description) errors.push(`${file}: missing meta description`);

  addOwner(titleOwners, title, file);
  addOwner(descriptionOwners, description, file);

  if (title && (title.length < 20 || title.length > 70)) {
    warnings.push(`${file}: title length is ${title.length} characters`);
  }

  if (description && (description.length < 70 || description.length > 180)) {
    warnings.push(`${file}: meta description length is ${description.length} characters`);
  }

  if (!has(/<h1\b/i, source)) warnings.push(`${file}: no visible <h1>`);

  if (!source.includes(`rel="canonical" href="${canonical}"`) &&
      !source.includes(`rel='canonical' href='${canonical}'`)) {
    warnings.push(`${file}: canonical should be ${canonical}`);
  }

  if (!source.includes(`property="og:url" content="${canonical}"`) &&
      !source.includes(`property='og:url' content='${canonical}'`)) {
    warnings.push(`${file}: missing or inconsistent og:url`);
  }

  if (!has(/<meta\s+property=["']og:title["']/i, source)) warnings.push(`${file}: missing og:title`);
  if (!has(/<meta\s+property=["']og:description["']/i, source)) warnings.push(`${file}: missing og:description`);
  if (isProduct && !has(/<meta\s+property=["']og:image["']/i, source)) warnings.push(`${file}: product page missing og:image`);

  if (source.includes('href="blog.html"') || source.includes("href='blog.html'")) {
    warnings.push(`${file}: legacy blog.html link found; prefer blog/`);
  }

  const hrefs = [...source.matchAll(/href=["']([^"']+)["']/gi)].map((m) => m[1]);
  for (const href of hrefs) {
    if (!localTargetExists(file, href)) {
      warnings.push(`${file}: local link target not found: ${href}`);
    }
  }

  if (isProduct) {
    products.push(file);

    if (!sitemap.includes(`<loc>${canonical}</loc>`)) {
      errors.push(`${file}: product page missing from sitemap.xml`);
    }

    if (!has(/<script\s+type=["']application\/ld\+json["']/i, source)) {
      warnings.push(`${file}: product page has no JSON-LD yet`);
    }

    if (!source.includes(`${canonical}#product`)) {
      warnings.push(`${file}: product page has no Product entity schema yet`);
    }

    if (!llms.includes(canonical)) {
      warnings.push(`${file}: product page is not referenced in llms.txt`);
    }
  }
}

for (const [title, files] of titleOwners) {
  if (files.length > 1) warnings.push(`duplicate title "${title}" used by: ${files.join(', ')}`);
}

for (const [description, files] of descriptionOwners) {
  if (files.length > 1) warnings.push(`duplicate meta description used by: ${files.join(', ')}`);
}

if (!robots.includes('Sitemap: https://bykineks.com/sitemap.xml')) {
  errors.push('robots.txt: missing canonical sitemap declaration');
}

if (!sitemap.includes('<loc>https://bykineks.com/</loc>')) {
  errors.push('sitemap.xml: homepage missing');
}

console.log(`SEO/GEO audit: ${htmlFiles.length} root HTML pages, ${products.length} product pages.`);

if (warnings.length) {
  console.log('\nWarnings:');
  for (const warning of warnings) console.log(`- ${warning}`);
}

if (errors.length) {
  console.error('\nErrors:');
  for (const error of errors) console.error(`- ${error}`);
  process.exit(1);
}

console.log('\nNo blocking SEO/GEO errors found.');
