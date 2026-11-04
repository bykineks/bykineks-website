# Bia revision — stages 1–4

## Verified font facts

- Original Bia-VF.woff2: version 2.100, 200 named instances, 1,038 internal glyphs including .notdef; the product's 1,037 count excludes that placeholder.
- Axis ranges: SERF 0–1, CNTR 0–100, wght 300–700, wdth 50–150, ital 0–1.
- Named instances establish Sans = SERF 0, Serif = SERF 1, Low = CNTR 0, High = CNTR 100.
- GSUB features used by the controls: liga, dlig (B Y), ss01 (A/E/O/a), ss02 (E), frac.
- Original character data retained: 791 preview entries, including sequences and duplicates; all their code points are supported by the font. Language list retains its original 102 entries; full linguistic coverage is not independently certified.
- No WOFF2 binaries changed.

## Delivered

1. Accurate Italic axis without CSS skew; synchronized and bounded inputs; semantic headings, accessible controls, visible focus, selected glyph state, Unicode metadata, reduced-motion rules and title pause; single character-set render; stable specimen image dimensions.
2. Four Voices comparison cards, text presets, larger headline default, and hero navigation. Voice selection preserves custom text. Mobile voice selection focuses the playground heading rather than opening the virtual keyboard.
3. Two independently selected voices with shared comparison text; three labeled editorial/identity/packaging concept studies; clearer existing licensing links. No client work or product claims are implied by the demonstrations.
4. Character/name/category/Unicode search, optional OpenType controls with verified examples, explicit local save/restore, and setting links.

## Setting behavior

- Saved state contains playground text, five axes, size, leading, tracking and five feature switches; it does not include the separate two-voice comparison.
- Local saving happens only when requested. Storage failure is reported and sharing remains available.
- Shared state uses the URL fragment. Text is assigned with textContent, never parsed as HTML.
- Invalid state is rejected; finite numeric values are constrained by the actual control ranges. Save/share accepts at most 5,000 text characters and reports longer text instead of truncating it.
- Clipboard failure exposes a labeled readonly link field for manual copying.
- No saved setting resumes an animation automatically.

## Validation

- Syntax and Git whitespace checks.
- Original character and language data compared with the previous implementation.
- Browser checks at 320, 390, 768, 1024, 1440 px: no horizontal overflow or clipped concept studies.
- Four voice mappings checked against font named instances; custom text preserved while changing voices; sample presets and comparison selectors exercised.
- Input 999 normalized to 240; empty input restored on blur; Italic has no additional CSS transform.
- Search cases: A, U+0041, arrow, ligatures, no results, clear and restoration of previously open categories.
- OpenType toggle application and reset; local save/change/restore; copied link opened and restored; invalid setting rejected; out-of-range values bounded; HTML-like specimen text rendered literally.
- No JavaScript errors observed during these checks.

Checks used the available desktop browser. Safari/iOS rendering and an operating-system reduced-motion preference change have not been tested directly; reduced-motion behavior is implemented in CSS and preference listeners. Production has not been updated by this work.

## Final review fixes

- Number inputs preserve intermediate keystrokes. A browser test entered `7`, then `2`, then Enter and verified `72 px`. Out-of-range values are committed on Enter/change/blur.
- Alternate sets ss01/ss02 are mutually exclusive; the latest user selection wins. Older saved state enabling both is normalized to ss02.
- Character search previews its first result, shows an empty-result state, and restores the selected glyph and open categories when cleared.
- Added compact sticky section navigation; anchor offsets account for the two-row mobile navigation.
- Grouped secondary storage tools in Save & share and made title motion control an accessible icon.
- Retested save/restore after grouping, keyboard interaction and responsive navigation at 320, 390, 768 and 1440 px; no horizontal overflow or JavaScript errors observed.

## Arshila-style simplification — 2026-11-04

Started from clean published main b89cddf. Removed only the Four voices. One system section and its card handlers/styles; its hero link now targets the retained comparison section. The family distinctions remain in the font and are available in one Family selector (Serif Low/High, Sans Low/High). Weight, Width, Style and OpenType selectors replace the old sample toolbar, using Bia-specific values rather than Arshila's inventory. Five sliders remain available. Off-instance serif/contrast or style values display Custom. Manual family/style selection stops animation, while OpenType and Try example preserve animation and axes. Feature choices preserve custom text; explicit Try example replaces it.

Re-audited original Bia-VF.woff2: SERF 0–1, CNTR 0–100, wght 300–700, wdth 50–150, ital 0–1. All 200 named instances exactly match four family pairs × five weights × five widths × two italic states. No binary, glyph array, original defaults or other pages changed. Removed the redundant OpenType disclosure in favor of the single dropdown; stored legacy combinations remain supported and are labeled Custom.

Validation: browser tested named settings (Sans Low / Semi Bold / Condensed / Italic), Custom on all four selectors after slider edits, text retention, feature switching during interpolation, Try example, local Save/Restore and an existing v1 shared setting with intermediate axis coordinates and combined features. The legacy shared example restored text, coordinates and both dlig/ss02 flags, with Custom selected. Comparison text and context carousel navigation still respond. No page overflow at 320/390/768/820/1440 px; desktop uses one toolbar row and mobile uses two columns with OpenType spanning the row. JavaScript syntax, internal anchors and unique IDs checked. Not pushed or published with this local revision.
