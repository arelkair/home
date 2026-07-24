# Personal Site

The personal portfolio website of Arel Kair: a project showcase plus a blog, built with plain HTML, CSS and JavaScript. Fully responsive, with light/dark themes and a language selector (English, Spanish, Korean, Mandarin Chinese).

## Structure

- `src/index.html` - Home page: hero, interest chips, project tiles
- `src/blog/index.html` - Blog index, lists all posts
- `src/blog/*.html` - Individual posts; one static page per post, no templating
- `src/css/styles.css` - Single stylesheet, organized into sections (fonts, tokens, sidebar, components, responsive)
- `src/js/app.js` - Everything: translations, shared preferences, and every feature (theme, i18n, language menu, nav, status clock), sharing a single `window.Portfolio` namespace
- `src/assets/fonts/` - Self-hosted Inter and Geist Mono (latin subset, variable weight)
- `src/assets/icons/favicon.svg` - Site icon
- `src/vercel.json` - Deploy configuration (the Vercel root directory is `src/`); also sets a one-year immutable `Cache-Control` on `/assets/*`

`app.js` is one plain deferred script, loaded by every page, so there is a single JS request per page load instead of one per feature. This also keeps things working when a page is opened directly via `file://` (ES modules are blocked there). Every page repeats the same sidebar markup (brand, nav, clock, language/theme/GitHub controls) since there is no build step to share a layout partial; the active nav link is set by hand per page.

## Design

Strictly black and white, minimal: a fixed left sidebar for navigation (same background as the page, separated only by a border), a near-black dark theme (`#0a0a0a`, off-white text, white accent) and a pure white light theme (black text and accent). Inter is the body/UI font; Geist Mono is kept for the clock and post dates/code. Project and interest icons are inline SVG so they inherit `currentColor` and stay theme-correct. Motion is intentionally minimal: no entrance animations, no hover-triggered movement or glow, just simple color/border transitions and the functional sidebar-drawer slide on mobile (below 960px).

## Blog

Posts are hand-written static HTML pages under `src/blog/`, following the same "no build step" philosophy as the rest of the site — copy an existing post, edit it, and link it from `src/blog/index.html`. Post title, excerpt and body paragraphs use `data-i18n` keys (namespaced `post<Name><Field>`, e.g. `postWelcomeP1`) in the `Portfolio.translations` object in `src/js/app.js`, so a post's content changes with the selected language like the rest of the UI. A new post needs its own translation keys added for every supported language; the post date is left untranslated (language-agnostic ISO format).

## Performance

- Fonts are self-hosted and preloaded; no external font requests or render-blocking Google Fonts CSS.
- Only the latin subset is shipped (covers English and Spanish); CJK falls back to the system font.
- All JavaScript ships as a single deferred `app.js` request (non-blocking, parsed once).
- The CSS stays as a single request to avoid render-blocking `@import` waterfalls.
- `/assets/*` (fonts, icons) are served with a one-year immutable `Cache-Control` header.

## Run

Open `src/index.html` in any browser, or deploy `src/` to Vercel. No build step.
