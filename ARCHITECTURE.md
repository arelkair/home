# Personal Site

The personal portfolio website of Arel Kair: a project showcase plus a blog, built with plain HTML, CSS and JavaScript. Fully responsive, with light/dark themes and a language selector (English, Spanish, Korean, Mandarin Chinese).

## Structure

- `src/index.html` - Home page: hero, interest chips, project tiles
- `src/blog/index.html` - Blog index, lists all posts
- `src/blog/*.html` - Individual posts; one static page per post, no templating
- `src/css/styles.css` - Single stylesheet, organized into sections (fonts, tokens, sidebar, components, animations, responsive)
- `src/js/main.js` - Entry script that wires the features together
- `src/js/data/translations.js` - Language dictionaries and supported language list
- `src/js/lib/preferences.js` - Shared environment preferences (reduced motion)
- `src/js/features/` - One file per feature: `theme.js`, `i18n.js`, `language-menu.js`, `nav.js`, `spotlight.js`, `status.js`

JavaScript files are plain deferred scripts sharing a single `window.Portfolio` namespace, loaded in dependency order. This keeps the per-feature file split while still working when a page is opened directly via `file://` (ES modules are blocked there). Section entrance animations are CSS-only, so content is always visible even if scripts do not run.
- `src/assets/fonts/` - Self-hosted Inter and Geist Mono (latin subset, variable weight)
- `src/assets/icons/favicon.svg` - Site icon
- `src/vercel.json` - Deploy configuration (the Vercel root directory is `src/`)

Every page repeats the same sidebar markup (brand, nav, clock, language/theme/GitHub controls) since there is no build step to share a layout partial; the active nav link is set by hand per page. `nav.js` only handles the off-canvas sidebar toggle used below the 960px breakpoint.

## Design

A documentation-site aesthetic inspired by 3ds.hacks.guide (VitePress): a fixed left sidebar for navigation, flat surfaces instead of translucency, a dark theme (`#1b1b1f`) with a warm off-white text color and a lavender accent (`#a8b1ff`), and an equivalent light theme with an indigo accent. Inter is the body/UI font; Geist Mono is kept for the clock and post dates/code. Project and interest icons are inline SVG so they inherit `currentColor` and stay theme-correct. UI controls, nav links and cards share a pointer-tracking "Reveal" hover highlight (`.reveal-target`). The layout collapses to an off-canvas sidebar drawer below 960px.

## Blog

Posts are hand-written static HTML pages under `src/blog/`, following the same "no build step" philosophy as the rest of the site — copy an existing post, edit it, and link it from `src/blog/index.html`. Post content is not run through the language selector; only the surrounding page chrome (nav, dates format, "back to blog") is translated.

## Performance

- Fonts are self-hosted and preloaded; no external font requests or render-blocking Google Fonts CSS.
- Only the latin subset is shipped (covers English and Spanish); CJK falls back to the system font.
- JavaScript ships as small deferred scripts (non-blocking, parsed in parallel, cached separately).
- The CSS stays as a single request to avoid render-blocking `@import` waterfalls.

## Run

Open `src/index.html` in any browser, or deploy `src/` to Vercel. No build step.
