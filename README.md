# BYKINEKS Website

The source for [bykineks.com](https://bykineks.com/), a static site published through GitHub Pages.

## Where to edit

| Page or asset | File or folder |
| --- | --- |
| Homepage | `index.html` |
| Font pages | The font's folder, for example `alvera/index.html` |
| About and Contact | `about/index.html` and `contact/index.html` |
| Blog | `blog/index.html` and each article's folder under `blog/` |
| Labs | `labs/index.html` and each experiment's folder under `labs/` |
| Styles, scripts, fonts, and images | `css/`, `js/`, and `assets/` |

For example, `alvera/index.html` serves `/alvera/`. The separate `alvera.html` at the top level redirects the old address to that page. Keep these redirect files so existing links continue to work.

## Preview and publish

Run a static web server from the repository root and open its local URL. For example, with Python installed, run `python -m http.server 8000` and visit `http://localhost:8000/`.

Before opening a pull request, preview the pages you changed. For changes to URLs or metadata, run `node scripts/geo-audit.mjs` from the repository root. Merging into `main` publishes through GitHub Pages.
