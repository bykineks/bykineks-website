# Font routing profiles

These profiles guide discovery; they do not replace inspection of the current font files. User-specified strengths are design priorities. Repository marketing claims must be verified before being presented as audited facts. Update only the font being worked on.

## Bia

- Page/assets: `bia.html`, `css/bia.css`, `js/bia.js`, `assets/fonts/Bia-VF.woff2`, `Bia-SerifLowBold.woff2`.
- Strength: four related Serif/Sans × Low/High contrast voices and variable exploration.
- Verified in the 2026-11-04 audit: five axes SERF/CNTR/wght/wdth/ital; 200 named instances; version 2.100; 1,038 internal glyphs including .notdef. The approved product count is 1,037 excluding that placeholder. 791 preview entries.
- See `bia-revision-qc.md` for axis coordinates, actual feature examples and limitations. Bia's feature exclusions and counts apply only to Bia.

## Arshila

- Page/assets: `arshila.html`, `css/arshila.css`; resolve all actual font files and existing inline scripts before editing.
- User priority: extensive OpenType exploration. Lead with how features change real words/letterforms; group features by task and show verified triggers.
- Current HTML claims 54 styles and over 2,500 glyphs; these are pending binary/package verification, not audited counts.
- Inspect swashes, alternates, ligatures, caps and other features actually present. Do not infer semantics from tags: current labels include `c2sc` as Petite Caps and `titl` as Double Struck, which need source-font verification. Check conflicts rather than allowing or forbidding all stacking.
- Character Set must use Arshila data and preview styles. Do not transplant Bia's four voices or Latin arrays.

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
