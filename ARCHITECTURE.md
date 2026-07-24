# Personal Site

The personal portfolio website of Arel Kair: a single centered page, built with plain HTML, CSS and JavaScript. Fully responsive, with light/dark themes and a language selector (English, Spanish, Korean, Mandarin Chinese).

## Structure

- `src/index.html` - The whole site: name, interest chips, project tiles
- `src/css/styles.css` - Single stylesheet, organized into sections (fonts, tokens, layout, components, responsive)
- `src/js/app.js` - Everything: translations, shared preferences, and every feature (theme, i18n, language menu, status clock), sharing a single `window.Portfolio` namespace
- `src/assets/fonts/` - Self-hosted Geist and Geist Mono (latin subset, variable weight)
- `src/assets/icons/favicon.svg` - Site icon
- `src/vercel.json` - Deploy configuration (the Vercel root directory is `src/`); also sets a one-year immutable `Cache-Control` on `/assets/*`

`app.js` is one plain deferred script, so there is a single JS request per page load instead of one per feature. This also keeps things working when the page is opened directly via `file://` (ES modules are blocked there).

## Design

Strictly black and white, minimal: a near-black dark theme (`#0a0a0a`, off-white text, white accent) and a pure white light theme (black text and accent), centered on the page — no sidebar, no navigation, no separate pages. Geist is the body/UI font; Geist Mono is kept for the clock. Project and interest icons are inline SVG so they inherit `currentColor` and stay theme-correct. Motion is intentionally minimal: no entrance animations, no hover-triggered movement or glow, just simple color/border transitions.

## Performance

- Fonts are self-hosted and preloaded; no external font requests or render-blocking Google Fonts CSS.
- Only the latin subset is shipped (covers English and Spanish); CJK falls back to the system font.
- All JavaScript ships as a single deferred `app.js` request (non-blocking, parsed once).
- The CSS stays as a single request to avoid render-blocking `@import` waterfalls.
- `/assets/*` (fonts, icons) are served with a one-year immutable `Cache-Control` header.

## Run

Open `src/index.html` in any browser, or deploy `src/` to Vercel. No build step.
