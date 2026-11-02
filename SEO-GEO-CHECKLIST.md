# Bykineks SEO + GEO House Rules

Use this checklist whenever a new public page is added or an existing typeface receives a meaningful update.

## New typeface page

- Unique `<title>` that identifies the typeface and classification or primary use.
- Unique meta description based on visible page facts.
- `index, follow` robots meta unless the page intentionally should not be indexed.
- Canonical URL using `https://bykineks.com/...`.
- Matching `og:title`, `og:description`, `og:url`, and representative `og:image`.
- One clear visible `<h1>` using the official typeface name.
- Factual About copy that explains what the typeface is, what it is for, and how it differs.
- Public specifications kept consistent across visible copy and structured data: styles/fonts, classification, glyphs, scripts/languages, version, release year, axes, and designer where applicable.
- Product/WebPage JSON-LD linked to:
  - `https://bykineks.com/#organization`
  - `https://bykineks.com/about.html#dede-kurniawan`
  - `https://bykineks.com/#website`
- Add the canonical URL to `sitemap.xml`.
- Add major public typeface pages to `llms.txt`.
- Link to relevant related typefaces or articles when the relationship is useful to a reader.
- Run `node scripts/geo-audit.mjs` before merging.

## Typeface update

When a typeface changes version, glyph count, style count, language/script coverage, axes, availability, or positioning:

1. Update the visible page first.
2. Update structured data to match the visible page.
3. Update `llms.txt` only if the high-level description or important product map changed.
4. Keep the existing canonical URL when the product is still fundamentally the same typeface.
5. If a URL must change, preserve the old URL with an appropriate redirect where hosting supports it.
6. Re-run the SEO/GEO audit.

Do not publish unreleased specifications as current product facts unless the page is explicitly presented as a preview or work in progress.

## New article

- Unique title, description, canonical URL, and Open Graph metadata.
- Visible author and publication date.
- Article JSON-LD with headline, description, author, publisher, datePublished, mainEntityOfPage, and representative image.
- Connect Dede Kurniawan to `https://bykineks.com/about.html#dede-kurniawan` when applicable.
- Connect Bykineks to `https://bykineks.com/#organization`.
- Add the article to the blog index and `sitemap.xml`.
- Link naturally to relevant typeface/product pages.
- Prefer articles that answer real typography, design, branding, interface, reading, multilingual, or type-system questions rather than keyword-only content.

## General rules

- Visible facts and JSON-LD must agree.
- Never invent prices, reviews, release dates, language counts, or product specifications for schema.
- Do not change a stable canonical URL only for SEO wording.
- Keep navigation URLs consistent; prefer `/blog/` over legacy `blog.html`.
- Treat title/meta length as a diagnostic hint, not a ranking rule.
- Preserve the visual identity: SEO/GEO metadata should not require redesigning the page.
- Prefer useful internal links over repetitive keyword links.
- Audit external platform facts periodically so Bykineks, MyFonts, Monotype, GitHub, and other authoritative profiles do not contradict the official site.

## Before merge

Run:

```bash
node scripts/geo-audit.mjs
```

Blocking issues should be fixed before merge. Warnings should be reviewed for factual relevance rather than cleared only to make the report empty.
