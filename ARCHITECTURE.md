# Personal Site

The personal homepage of Arel Kair (arelkair.dev): a single centered page, built with plain HTML, CSS and JavaScript. Fully responsive, with light/dark themes and a language selector (English, Spanish, Korean, Mandarin Chinese).

## Structure

- `src/index.html` - The whole site: brand and controls, one-line statement, project grid, footer. Icons are an inline SVG sprite (Phosphor).
- `src/css/styles.css` - Single stylesheet: fonts, tokens, controls, hero, cards, responsive, motion
- `src/js/app.js` - Translations, shared preferences, theme and language menu, sharing a single `window.Portfolio` namespace
- `src/assets/fonts/` - Self-hosted Geist and Geist Mono (latin subset)
- `src/assets/icons/favicon.svg` - Site icon
- `src/vercel.json` - Deploy configuration (the Vercel root directory is `src/`); also sets a one-year immutable `Cache-Control` on `/assets/*`

`app.js` is one plain deferred script, so there is a single JS request per page load. This also keeps things working when the page is opened directly via `file://` (ES modules are blocked there).

## Design

Purely typographic and quiet, in the visual language of Nivra: neutral near-black dark theme and a cool off-white light theme, no accent color, hairline borders, one radius scale (10px controls, 16px cards), no shadows, gradients or images. One type family (Geist, with Geist Mono for addresses). The only expressive element is the large left-aligned statement; everything else is small and evenly spaced.

Projects are four square cards (1 column on phones, 2 from 600px). Each shows its address, an arrow, its name and a one-line description taken from the project's own site. Descriptions are translated in `app.js`; project names keep their canonical form.

Motion is one load sequence (statement, then cards staggered 50ms), an arrow nudge and border change on hover (only on devices that can hover), a press scale on tap, and the language menu opening. Everything respects `prefers-reduced-motion`.

## Performance

- Fonts are self-hosted and the main one is preloaded; no external font requests.
- Only the latin subset is shipped (covers English and Spanish); CJK falls back to the system font.
- All JavaScript ships as a single deferred `app.js` request (non-blocking, parsed once).
- The CSS stays as a single request to avoid render-blocking `@import` waterfalls.
- `/assets/*` (fonts, icons) are served with a one-year immutable `Cache-Control` header.
- `css/styles.css` and `js/app.js` are linked with a `?v=N` query string. Vercel applies its own multi-hour cache to plain `/css/*` and `/js/*` paths regardless of `Cache-Control` headers set in `vercel.json` (confirmed: custom headers there do not override it), so a deploy that changes either file without bumping its `v` would leave visitors with a recently cached copy stuck on stale styles or script against fresh HTML. **Bump the `v` on both tags any time `styles.css` or `app.js` changes.**

## Run

Open `src/index.html` in any browser, or deploy `src/` to Vercel. No build step.
