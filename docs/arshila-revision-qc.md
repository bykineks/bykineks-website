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

## Variable layout correction

User clarified the reading order: OpenType library, Shape your words (including OpenType controls), Arshila in use, Character Set. The playground now follows Bia's specimen-left/axes-right structure with typography controls under the specimen. Arshila's three axes and feature data are retained. OpenType controls start collapsed. Checked no page overflow at 320, 390, 768 and 1440 px; desktop uses two columns and mobile stacks. Verified sample switching, axis keyboard adjustment and axis reset in browser. JavaScript syntax and whitespace checks pass.

## OpenType wardrobe expansion

Replaced six partial looks with 23 off/on studies grouped into letterforms, swashes/ligatures, case/editorial details and figures/notation. Uses complete words (AURA, ATELIER, NIGHT, HIGH, office, Fable, season), notation for numeric features and isolated A for oversized swashes. Every example produced a different glyph sequence or positioning under HarfBuzz against the original variable WOFF2 at wght 600 / wdth 100 / ital 0. Case/ordinal/historical controls were added to the existing playground so every example has a visible, resettable control.

salt's first alternate on the selected letters is the sans form; it also exposes other choices, so it is not described as a universal conversion. ordn applies to a/o following numerals (1a 2o), not English st/nd suffixes. fina substitutes A even within words, so its card does not promise end-only contextual behavior. sinf and subs share numeral mappings; locl and aalt are described without inventing separate visual styles.

Try this example explicitly loads its displayed text and feature into the existing playground. The previous ambiguous Apply this look action preserved unrelated text, often hiding the effect. Feature/card state remains based on actual settings and matching text. Responsive browser checks at 320, 390, 768 and 1440 px found no document or card scroll overflow. Tested small-caps and ordinal example transfer and ordinal reset. Native font binaries and unrelated sections retained. Publication is not part of this revision yet.

Swash follow-up: opening and closing cards are merged into ARSHILA (22 studies). Only first A uses swsh; only last A uses ss04; RSHIL explicitly disables both. The playground example uses the same scoped settings. Subsequent feature-control changes remove the scoped example markup and return to whole-text controls.

## Compact wardrobe

Four accessible category tabs show one group at a time; all 22 studies remain in the HTML. Cards have reduced spacing, and notes use a disclosure. On screens up to 600 px, each group becomes a horizontal scroll-snap strip instead of a tall stack. Without JavaScript all groups remain readable. Checked all four tabs (6/6/4/6 cards), arrow-key selection, example transfer and document overflow at 320, 390, 768 and 1440 px. No page overflow; native touch gesture not directly exercised. At 1440 px the selected six-card category occupies about 683 px including its header and tabs.

User narrowed the compact wardrobe to 17 studies: removed Fractions, Ordinals, Historical forms, Case-sensitive punctuation and Alternate A cards and their LOOKS entries. Underlying playground feature controls remain available. The category counts are now 6 / 5 / 2 / 4.

## Unified OpenType and variable workspace

The standalone wardrobe is now a compact category/feature picker inside Shape your words, immediately below the specimen-text toolbar. Its 17 presets use the same live specimen and variable axes. Selecting a feature keeps user text, type size, axis values and running interpolation; it no longer scrolls or focuses another section. Use feature sample explicitly replaces text without resetting axes or animation. Original restores default features only. Full individual controls remain in the Advanced OpenType disclosure.

Swash preset applies opening swsh to the first capital A and closing ss04 to the last capital A (if distinct), leaving intervening letters normal; sample is ARSHILA. Scoped spans are built with textContent, and editing reapplies them on blur. Additional padding accommodates swash overhang.

Verified in browser: AURORA STUDIO retained while switching double-struck to swashes during animation, axis values continued changing and play state stayed true; explicit sample produced ARSHILA; Original removed scoped markup without changing text. No document overflow at 320, 390, 768 and 1440 px. Original font binaries, mockups and character data retained. Not published as part of this local revision.

## Simplified unified toolbar

User found category tabs plus feature chips too complex. Replaced them with two labeled native dropdowns (sample Text and OpenType style); all 17 presets remain available in one list. Try example is shown only after choosing a preset. Removed category-tab handlers. Advanced individual feature controls remain collapsed. Browser verified custom AURORA STUDIO preserved while switching styles with animation running, ARSHILA sample and scoped swashes, original-style reset, sample-text selection, and no page overflow at 320/390/768/1440 px.

Removed the Advanced OpenType panel at user request. Preset feature tags now come directly from LOOKS rather than removed DOM controls; removed combination/reset listeners and unreachable Custom settings option. Original in the dropdown resets the preset.

## Availability hierarchy

Purchase links now form the first row (MyFonts primary, Monotype secondary); existing trial ZIP and specimen PDF are quieter links beneath. Destinations and download behavior retained. Button minimum heights are 48 px and resource links 44 px. Verified no document overflow at 320/390/768/1440 px. Demo ZIP CRC test passed; original OTF/TTF demo entries present. PDF exists with a PDF header. MyFonts destination resolves to Arshila by Bykineks; Monotype search could not be independently fetched by the web tool, so its existing search URL is retained and labeled Find on Monotype Fonts. No new trial/specimen functionality or assets added.

Availability correction: replaced boxed purchase hierarchy with Bia’s existing editorial intro and four inline text links, adapted to Arshila. Removed the unused boxed layout styles. All four original destinations are retained.
