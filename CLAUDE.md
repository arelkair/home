# Personal Site

The personal portfolio website of Arel Kair: a single-page site with a short bio and project showcase. Built with plain HTML, CSS and JavaScript. Fully responsive, with light/dark themes and a language selector (English, Spanish, Korean, Mandarin Chinese).

## Structure

- `src/index.html` - Markup and page sections
- `src/css/styles.css` - Single stylesheet, organized into sections (fonts, tokens, base, components, animations, responsive)
- `src/js/main.js` - Entry script that wires the features together
- `src/js/data/translations.js` - Language dictionaries and supported language list
- `src/js/lib/preferences.js` - Shared environment preferences (reduced motion)
- `src/js/features/` - One file per feature: `theme.js`, `i18n.js`, `language-menu.js`, `spotlight.js`

JavaScript files are plain deferred scripts sharing a single `window.Portfolio` namespace, loaded in dependency order. This keeps the per-feature file split while still working when `index.html` is opened directly via `file://` (ES modules are blocked there). Section entrance animations are CSS-only, so content is always visible even if scripts do not run.
- `src/assets/fonts/` - Self-hosted Geist and Geist Mono (latin subset, variable weight)
- `src/assets/favicon.svg` - Site icon
- `src/vercel.json` - Deploy configuration (the Vercel root directory is `src/`)

## Design

The visual system mirrors the Calculator project: Geist and Geist Mono fonts, the same dark/light theme tokens, a circular theme toggle in the top right, and the radial-gradient background with drifting blobs and a grain overlay.

## Performance

- Fonts are self-hosted and preloaded; no external font requests or render-blocking Google Fonts CSS.
- Only the latin subset is shipped (covers English and Spanish); CJK falls back to the system font.
- JavaScript ships as small deferred scripts (non-blocking, parsed in parallel, cached separately).
- The CSS stays as a single request to avoid render-blocking `@import` waterfalls.

## Run

Open `src/index.html` in any browser, or deploy `src/` to Vercel. No build step.
