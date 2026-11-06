# Kineks static refresh QC

Date: 2026-11-07. Base: 23e98845599c35d97c86d03699948c8183baa8f7. Branch: wd-01/kineks-static-refresh.

## Scope and asset evidence

Target-only HTML/CSS/JS refresh using Compact conventions, adapted to a static superfamily. All 90 original font binaries and js/kineks-data.js preserved. No axes or interpolation. Complete 3 families × 5 weights × 3 widths × 2 styles verified from assets; every font has no fvar, 387 internal glyphs including .notdef, 365 common cmap entries and version 1.000. HarfBuzz confirmed ss01 Aany, ss02 an and liga sample changes in every file. Character set derives from common cmap: 362 visible characters and six ligature sequences.

Six supplied 2000×1000 PNGs (Preview 2/3/4/5/6/9) converted to full 2000×1000 and mobile 1000×500 WebP. Originals untouched; composition retained. Input total 12,910,654 bytes; all twelve output files total 1,375,346 bytes. Original family poster remains separate below language support. Existing trial/PDF destinations retained, no new download functionality.

## Checks

- JavaScript syntax and git whitespace checks passed.
- Font inventory, common cmap coverage and OpenType shaping audited across 90 files.
- Browser: custom text preserved while switching to Serif Light Condensed Italic, then Slab Bold Expanded Italic, and alternate set 2. Selected font propagated into character study.
- Sequential numeric typing and Reset size & spacing preserve custom text and style.
- Search U+0041 returns one match; no-result search and Clear checked.
- Responsive widths 320, 390, 768, 1000 and 1280: no horizontal document overflow. Gallery 1/2/3 columns as appropriate.
- Lightbox opens with original full-size WebP. Escape closes and restores focus to originating button.
- Desktop gallery screenshot: ../kineks-gallery-review.png. WebP contact sheet: ../kineks-webp-proof.jpg.

## Limits

Local Chromium preview only; Safari/iOS, full linguistic coverage and commercial download contents not independently tested. Existing SEO metadata retained. Not pushed, merged or deployed as part of this revision.
