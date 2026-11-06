# Kineks Text revision — 2026-11-07

Based on main 7e52601. User requested Kineks Compact's current structure, adapted for Kineks Text with a 12 pt minimum and six provided reading/editorial images.

## Scope

Target HTML/CSS/JS only, generated Text WebPs and the target capability/QC documentation. Retains Text's About copy, ten-style product inventory, 389 glyphs, version 1.000 (displayed 1.0), 90-language list, cover and existing licensing/trial/PDF links. No font binary, Compact page or shared styles changed.

## Verified font data

Original variable and Regular font tables audited. Axes are weight 300–700 and positive slnt 0–12; ten named instances verified. GSUB/HarfBuzz checks confirm alternate sets A/n/y and a/n and standard ligatures. Character browser uses the actual Text cmap (362 visible entries plus six sequences), not Compact's data. Complete language certification is outside this check.

## Images

Sources: Preview 3, 4, 6, 8, 9 and 11.png from the supplied Kineks Text Preview/2000x1000 folder. Full 2000×1000 quality-88 WebPs plus 1000×500 quality-86 WebPs, method 6, no crop. Original PNGs unchanged. Inputs total 2,425,118 B; all twelve generated variants total 1,171,320 B. Contact sheet visually checked against the supplied artwork, and all six thumbnails loaded in browser. Lightbox uses the full-resolution WebP.

## Browser and static verification

- Custom sentence survives weight 600, Oblique 12, alternate selection. Actual font loaded as KineksText with correct axis settings.
- Sequential size entry 1 → 2 → Enter produces 12 pt / 16 CSS px. Reading samples compute to 16 / 18.6667 / 21.3333 CSS px for 12/14/16 pt.
- Animation continues while OpenType changes, explicit pause and manual axis reset tested.
- Unicode search U+0041 returns one entry; no-match state and clear restoration work.
- Gallery opens full-resolution image; Escape closes it. Inherited close/outside-click/focus-restoration implementation retained from Compact.
- Responsive widths 320, 390, 540/541, 768, 1000/1001, 1440: no document overflow, gallery follows one/two/three columns. Browser rounds some requested odd widths by one pixel.
- JavaScript syntax, JSON-LD parsing, single H1, unique IDs, local links/assets, all character codepoints and Git whitespace pass. Repository SEO/GEO audit reports no blocking errors; unrelated warnings remain.

## Limits

No Safari/iOS device run, full language certification, commercial/trial contents audit or checkout test. No production publication performed in this revision.
