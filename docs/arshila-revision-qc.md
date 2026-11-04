# Arshila revision and QA — 2026-11-04

## Scope and sources

Audited the latest repository main available at c3a4ac9 and the original Arshila WOFF2 assets. Existing sections were hero, About/product facts, variable playground/OpenType controls, Character Set, language list, specimen image, Availability and footer. Added a feature-led before/after library, section navigation and a gallery of six user-supplied mockups. No production publication is part of this revision.

Font verification and caveats are recorded in the Arshila entry in font-profiles.md. Original font binaries, licensing/download destinations and language list are retained. The 54 named instances match nine weights, three widths and two italic states; this verifies font instance metadata rather than independently certifying the commercial download contents.

## Key corrections

- Axis label Italic matches the actual ital axis. Original bounds are retained.
- Numeric inputs permit intermediate typing; commit on Enter/change/blur normalizes bounds and slider steps.
- OpenType examples are checked against actual GSUB mappings. Petite Caps is retained after comparing c2sc and smcp outline heights. salt is labeled Alternate forms, rather than pretending every lookup input is a sans substitution.
- Guided selection chooses one form/figure style at a time; optional advanced combinations preserve the ability to stack features. smcp and c2sc can be combined because their primary letter inputs differ. These are interaction choices, not a claim that every combination gives an independent visible effect.
- Look selection preserves custom text; explicit sample buttons replace it. Paragraph uses 24 px and 1.4 leading. Form changes do not impersonate alternate styles with CSS skew/bold.
- The study copies actual feature settings from selected cells, including ligatures and circled letters. ALTERNATES now contains 21 verified mappings instead of 82 repeated aalt-first-choice stand-ins. Other original arrays remain intact. 1,225 preview entries are labeled separately from total font glyphs.
- Search handles characters, categories, feature tags and Unicode. Clear restores selection and group expansion. Preview has meaningful selected state and metadata.
- Semantic headings, named editable/number controls, keyboard focus, reduced-motion handling and pause for the hero were added. Existing stacked sticky controls were made static to avoid obstructing mobile content.

## Supplied mockup conversion

All originals are 2000 × 1000 PNGs. Converted in Pillow to WebP quality 88, method 6, retaining full dimensions and composition. Additional 1000 × 500 WebPs use quality 86 for responsive loading. Originals in the user's Drive were not changed. No AI regeneration was used.

| Source | Desktop WebP | Mobile WebP |
| --- | ---: | ---: |
| Preview my03 2.0.png — fashion editorial | 298,588 B | 87,678 B |
| Preview my05 2.0.png — stickers | 129,932 B | 48,832 B |
| Preview my06 2.0.png — digital fashion | 182,664 B | 57,288 B |
| Preview my07 2.0.png — book | 284,018 B | 93,720 B |
| Preview my08 2.0.png — music | 359,652 B | 99,856 B |
| Preview my09 2.0.png — skincare | 71,890 B | 24,024 B |

The six originals total 12,174,695 B; desktop WebPs total 1,326,744 B (about 89% smaller). The gallery follows Bia: one full-width, uncropped image per slide, overlaid previous/next controls and counter, caption underneath and native horizontal scrolling. Responsive sources, explicit dimensions and lazy loading are retained. The former grid and modal viewer were removed.

## Validation performed

- WOFF2 table audit: glyphs, cmap, named instances, axes, GSUB tags/triggers, c2sc/smcp bounds. Every code point in the original preview and all original liga/dlig sequences are present in the variable font.
- WebP files decoded successfully and a six-image contact sheet was visually inspected against the supplied reference images.
- Browser interaction: looks preserve custom words, form selection replaces previous guided selection, advanced stacking works, smcp/c2sc coexist, paragraph preset uses reading size, numeric sequential 7 → 2 → Enter yields 72, and selected swsh glyph preview uses swsh.
- Original modal checks were superseded by the Bia carousel revision; see the follow-up validation below.
- Layout checked at 320, 390, 768, 820 and 1440 px: no horizontal overflow and no card scroll overflow. Swash example size/padding adjusted to keep its overhang within the card.
- JavaScript syntax, schema JSON and Git whitespace checks pass; no JavaScript errors observed in the exercised browser flows.

Safari/iOS, an operating-system reduced-motion change and exhaustive shaping across every style/language have not been directly tested. The original glyph arrays include a selection of coverage; the Character Set does not claim full coverage. Commercial font-package files were not inventoried beyond available web assets.

## Bia carousel follow-up

Replaced only the mockup grid and modal with Bia's full-width scroll-snap carousel. Browser checks passed for Next (02 / 06), keyboard ArrowRight (03 / 06), and the final-slide disabled state (06 / 06). At 320, 390, 768 and 1440 px, each slide matches the track width and the document has no horizontal overflow. Screenshot visually verified after resetting the viewport. Native touch swiping was not directly tested. JavaScript syntax and Git whitespace checks pass.

Mockup placement follows the OpenType feature library, before the playground. Section navigation follows the same reading order.
