# Font routing profiles

These profiles guide discovery; they do not replace inspection of the current font files. User-specified strengths are design priorities. Repository marketing claims must be verified before being presented as audited facts. Update only the font being worked on.

## Bia

- Page/assets: `bia.html`, `css/bia.css`, `js/bia.js`, `assets/fonts/Bia-VF.woff2`, `Bia-SerifLowBold.woff2`.
- Strength: four related Serif/Sans × Low/High contrast voices and variable exploration.
- Verified in the 2026-11-04 audit: five axes SERF/CNTR/wght/wdth/ital; 200 named instances; version 2.100; 1,038 internal glyphs including .notdef. The approved product count is 1,037 excluding that placeholder. 791 preview entries.
- See `bia-revision-qc.md` for axis coordinates, actual feature examples and limitations. Bia's feature exclusions and counts apply only to Bia.

- Current Bia playground: standalone Four voices cards removed. Family selector preserves the four SERF/CNTR pairs, alongside synchronized Weight/Width/Style/OpenType selectors. All 200 named combinations verified against Bia-VF. Intermediate axes show Custom; Save & share was subsequently removed at user request; the toolbar OpenType selector remains.

## Arshila

- Page/assets: arshila.html, css/arshila.css, js/arshila.js; original Arshila-VF.woff2 and Arshila-Black.woff2 preserved.
- User priority: extensive OpenType exploration. Main experience now uses verified before/after looks, grouped controls, an advanced combination option and application mockups supplied by BYKINEKS.
- Binary audit 2026-11-04: variable version 2.000, 54 named instances (9 weights × 3 widths × 2 italic states), 2,501 internal glyphs / 1,319 Unicode mappings. Product count 2,500 excludes .notdef. The static Black asset differs: 2,502 internal glyphs / 1,321 mappings; do not silently assume identical assets.
- Actual axes: wght 100–900, wdth 75–125, ital 0–1. All preview text code points and all original liga/dlig sequences were verified against the variable font.
- c2sc is a smaller petite-cap design in this font (A.c2sc cap height 508 vs a.smcp 558 at default coordinates); preserve the family-specific Petite Caps label. salt offers alternate lists; it is not a universal Sans Serif switch. titl provides double-struck forms.
- The old ALTERNATES grid repeated 82 base characters with aalt, which could not address each advertised alternate. It now contains 21 explicitly mapped swsh/ss04/ss05/ss08/fina examples. The displayed total is 1,225 preview entries, not the complete font glyph count. Preview clones each cell's feature setting.
- Existing 110 language names retained; full linguistic coverage is not independently certified. See arshila-revision-qc.md for limitations and conversion details.

- Wardrobe follow-up: 23 grouped off/on examples verified with HarfBuzz; ordinal a/o require preceding numerals, fina is not end-only, and sinf/subs share numeral forms. Explicit example actions load matching text.

- Unified workspace follow-up: the 17 retained wardrobe presets now share the live variable specimen. Feature selection preserves text, axes and interpolation; only Use feature sample replaces text. Swashes scope to first/last capital A.

- Named-style toolbar follow-up: Text selector removed; Weight (100–900), Width (75/100/125) and Style (ital 0/1) are synchronized with the variable sliders. All 54 combinations match original named instances. Off-instance values show Custom; 17 OpenType presets remain independent.

## Bilgen

- Page/assets: `bilgen.html`, `css/bilgen.css`, `js/bilgen.js`; resolve static/variable assets.
- User priority: interlocking capitals. Existing page describes paired capitals and a Mix option; preserve working composition behavior.
- First audit join triggers, sets, mixed combinations, unsupported pairs and style availability. A pair/word builder with verified examples is more relevant than Bia's voice cards.
- Current HTML claims 27 styles and nine weights with upright/left/right styles; verify package inventory and axis coordinates before adding controls or counts.

## Caelia

- Page/assets: `caelia.html`, `css/caelia.css`, `js/caelia-character-set.js`, `assets/fonts/Caelia-*.woff2`.
- User priority: multiscript. Begin by mapping actual scripts and shaping support; emphasize script-specific specimens and mixed-script hierarchy.
- Previous binary audit: five weight assets, 1,932 glyphs and 1,607 Unicode mappings per file. Previous displayed repertoire: 1,273 entries. Recheck current assets; preview coverage is a selection.
- Existing categories include Latin, IPA, Cyrillic, Greek, ligatures and symbols. Native-script labels and appropriate samples should replace a Latin-only default where useful. Verify language claims independently; do not copy Bia's 102-language list.

## Kineks Symbols

- Page/assets: `kineks-symbol.html`, `css/kineks-symbol.css`, `js/kineks-symbol.js`, `Kineks-Symbol.woff2`.
- Role: functional symbols and visual communication. User confirmed sole style Bold (internal weight 700).
- Previous audit: 356 glyphs, 354 Unicode mappings, 351 displayed SVG outlines; omitted mappings are carriage return and spaces. Verify SVG outlines remain aligned with the current font.
- Emphasize category discovery, shape/proportion and practical symbol compositions; no fabricated text-font axes or paragraph presets.

## Kineks Compact

- Page/assets: `kineks-compact.html`, `css/kineks-compact.css`, actual Compact WOFF2 files.
- Current product positioning: space-efficient interfaces. Prior audit: 388 glyphs/367 mappings per asset; 349 preview entries with repeats/sequences. Verify current ten-style product inventory separately from extra files in the asset folder.
- Demonstrate labels, numerals, dense information and small-screen hierarchy. Use actual styles; do not create Bia-style variable controls for static assets.

## Other fonts / new family

Kineks, Kineks Text, Avita, Alvera, Dareva, Gin, Neela, Wakaba, and future products have no verified capability profile in this benchmark yet. Inspect their actual page and assets before assigning a main experience. Do not derive specifications or use cases solely from names or visual similarity. Add a compact evidence-backed profile when first audited, following the fields in `font-page-benchmark.md`.
