# Character Set QC — 2026-11-04

## WOFF2 audit

Inspected the repository's original WOFF2 files with fontTools 4.68.0 and Brotli 1.2.1. No font binaries were changed.

| Family | Files inspected | Glyphs per file | Unicode mappings | Unencoded glyphs |
| --- | ---: | ---: | ---: | ---: |
| Kineks Symbol | 1 | 356 | 354 | 2 |
| Kineks Compact | 10 | 388 | 367 | 21 |
| Caelia | 5 | 1,932 | 1,607 | 325 |

Also inspected the additional `KineksCompact-SemiBoldOblique.woff2` asset: its counts match the ten styles. Every font opened successfully. Weights match their filenames, except Kineks Symbol has internal OS/2 weight 700 while the website markets its sole style as Regular. This is recorded for a future source-font decision; the binary and product style label are unchanged.

All code points used by the existing previews are supported by their respective fonts. This verifies character coverage, not every OpenType shaping outcome.

| Preview | Entries | Unique entry strings | Encoded code points absent from preview |
| --- | ---: | ---: | ---: |
| Symbols | 351 | 351 | 3 (carriage return, space, nonbreaking space) |
| Compact | 349 | 346 | 28 |
| Caelia | 1,273 | 1,271 | 356 |

Compact and Caelia previews contain sequences, repeated entries, and a selection of the full font coverage. Their headings now say “preview entries”; the font totals remain unchanged. Missing preview entries and duplicate entries predate this revision. No glyph repertoire has been added or removed. A complete coverage expansion would be a separate change.

Compact includes GSUB features such as liga, hist, salt, ss01 and ss02. Caelia includes liga, dlig, small caps, figure features and other substitutions. Unencoded alternate glyphs explain part of the difference between Unicode mappings and total glyph counts.

## Implementation and checks

- Existing category order and character data retained for all three pages.
- Categories use native buttons, aria-expanded, aria-controls and hidden panels.
- Preview selection supports click, mouse hover and keyboard focus.
- Caelia enhances the existing character markup into buttons at initialization, keeping its HTML diff small.
- Removed the obsolete homepage Symbols animation whose `.symbol-mark` target no longer exists.
- Browser layout checks at 320, 390, 768 and 1440 px: all three pages fit the viewport; fonts report loaded.
- Keyboard category toggle, selected glyph preview and representative ligature/Greek selections checked in the local browser.
- JavaScript syntax and Git whitespace checks pass. Homepage no longer reports the missing-symbol-mark exception.

No merge or production deployment performed.
