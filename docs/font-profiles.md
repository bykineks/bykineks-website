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

- Page/assets: `kineks-compact.html`, `css/kineks-compact.css`, `js/kineks-compact.js`, `assets/fonts/KineksCompact-VF.woff2` (user-supplied binary, unchanged).
- Binary audit 2026-11-05: version 1.000; 388 internal glyphs including .notdef, 367 Unicode mappings; existing product count 388 retained. Ten named instances agree with the existing ten-style inventory: five weights 300/400/500/600/700, upright and oblique.
- Actual axes: wght 300–700 (font default 700; playground starts at Regular 400), slnt 0–9.600006103515625. Preserve the positive slnt coordinate in this particular font; no synthetic italic or width control.
- GSUB tags: aalt, case, hist, liga, locl, ordn, salt, ss01, ss02, sups. HarfBuzz verified ss01 affects A/n/y, ss02 affects a/n and liga handles fi/fl/ff/ffi/ffl/long-s+t. The focused toolbar offers Original, alternate sets 1/2, and Ligatures off. It does not claim every GSUB feature is exposed.
- Character browser: 370 entries = 364 visible encoded characters plus six verified ligature sequences. Categories generated from the supplied font cmap, not copied from Arshila. Unicode/category search restores prior selection and expansion on clear.
- Layout follows Arshila's hierarchy with a simpler two-axis workspace, 8/10/12 pt samples and six user-supplied interface concepts. Each image has 2000×1000 and 1000×500 WebP variants. The full-resolution lightbox supports outside click, close button and Escape.
- Axis animation: explicit Animate/Pause, manual axis/preset and Reset axes stop it; hidden tabs stop it. Reduced-motion preference uses a slower, explicitly requested cycle.
- Existing 90-language list and licensing/trial/PDF destinations preserved. Full linguistic coverage, Safari/iOS and download contents are not independently certified. See `kineks-compact-revision-qc.md` for verification scope.

## Kineks Text

- Page/assets: kineks-text.html, css/kineks-text.css, js/kineks-text.js; original `assets/fonts/Kineks Text-VF.woff2` and static KineksText assets retained unchanged.
- Audit 2026-11-07: variable and Regular have 389 internal glyphs (including .notdef), 365 cmap entries, version 1.000. Ten named instances match five weights (300/400/500/600/700), upright and oblique. Variable font default weight 700; playground starts at 400.
- Actual axes wght 300–700 and slnt 0–12, distinct from Compact's 0–9.600006103515625. No synthetic italic or copied Compact axis bound.
- Original ss01 substitutions A/n/y, ss02 a/n and standard ligatures ff/fi/fl/ffi/ffl/long-s+t verified via GSUB and HarfBuzz. Toolbar uses Original, the two alternate sets, and Ligatures off.
- Character study regenerated from Text cmap: 362 visible encoded characters plus six ligature sequences = 368 preview entries; spaces/control characters excluded. Every displayed codepoint is supported by this font. Total internal glyph count is separate from preview count.
- Compact structure adapted to extended reading: editable variable specimen, synchronized named styles, explicit axis animation, 12/14/16 pt samples. Playground size is in real CSS pt, minimum 12 pt (16 CSS px), default 24 pt.
- Six supplied 2000×1000 PNGs converted unchanged in composition to 2000×1000 and 1000×500 WebP variants. Grid/lightbox follows Compact; captions describe reading/editorial concepts rather than client work.
- Existing 90-language list and licensing/demo/PDF destinations retained. Full linguistic coverage, commercial download inventory and Safari/iOS are not independently certified. See kineks-text-revision-qc.md.

## Other fonts / new family

Kineks, Avita, Alvera, Dareva, Gin, Neela, Wakaba, and future products have no verified capability profile in this benchmark yet. Inspect their actual page and assets before assigning a main experience. Do not derive specifications or use cases solely from names or visual similarity. Add a compact evidence-backed profile when first audited, following the fields in `font-page-benchmark.md`.

