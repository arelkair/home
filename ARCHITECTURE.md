# Personal Site

The personal homepage of Arel Kair (arelkair.dev): a single centered page, built with plain HTML, CSS and JavaScript. Fully responsive, with light/dark themes and a language selector (English, Spanish, Korean, Mandarin Chinese).

## Structure

- `src/index.html` - The whole site: sticky nav, hero wordmark, project grid, footer
- `src/css/styles.css` - Single stylesheet, organized into sections (fonts, tokens, nav, hero, cards, responsive)
- `src/js/app.js` - Everything: translations, shared preferences, and every feature (theme, i18n, language menu, status clock), sharing a single `window.Portfolio` namespace
- `src/assets/fonts/` - Self-hosted Fraunces, Inter and JetBrains Mono (latin subset)
- `src/assets/icons/favicon.svg` - Site icon
- `src/vercel.json` - Deploy configuration (the Vercel root directory is `src/`); also sets a one-year immutable `Cache-Control` on `/assets/*`

`app.js` is one plain deferred script, so there is a single JS request per page load instead of one per feature. This also keeps things working when the page is opened directly via `file://` (ES modules are blocked there).

## Design

Visual language adapted from Nivra (arelkair.dev's sibling project at nivra.arelkair.dev), reproduced from its actual design tokens rather than approximated: a near-black dark theme (`#09090b` paper, `#131316` surface) and a warm-cream light theme (`#f2f1ed` paper, `#fbfaf7` surface), both neutral with no color accent — the "inverted" near-white/near-black tone itself is the only accent, used for primary emphasis and hover states. Fraunces (a high-contrast serif) carries the one big display moment — the "Arel Kair" wordmark — used nowhere else; Inter handles all body and UI text; JetBrains Mono is reserved for small utility text (the clock, project URLs). Cards and controls share a consistent radius scale (12px controls/inputs, 20px project cards, full pill for chips) and a hairline border (`rgba(0,0,0,.07)` light / `rgba(255,255,255,.08)` dark) — no shadows, gradients or glassmorphism beyond the sticky nav's subtle blur.

Motion is restrained: the wordmark performs a single translateY/opacity reveal on load (borrowed from Nivra's own intro animation, as a deliberate cross-reference between the two sites), cards lift 3px and brighten their border on hover, and everything respects `prefers-reduced-motion`.

## Projects section

Lists Arel Kair's four public projects (Nivra, Pool, Poisoned Candy, Hello World) as a 2-column card grid (1 column on narrow screens), each linking out to its own `*.arelkair.dev` subdomain. Card copy (name, one-line description) is sourced from each project's own live site, not invented. The project descriptions are translated per language in `app.js`; project names are kept as their canonical brand names in every language, matching how the projects refer to themselves.

## Performance

- Fonts are self-hosted and preloaded; no external font requests or render-blocking Google Fonts CSS.
- Only the latin subset is shipped (covers English and Spanish); CJK falls back to the system font.
- All JavaScript ships as a single deferred `app.js` request (non-blocking, parsed once).
- The CSS stays as a single request to avoid render-blocking `@import` waterfalls.
- `/assets/*` (fonts, icons) are served with a one-year immutable `Cache-Control` header.
- `css/styles.css` and `js/app.js` are linked with a `?v=N` query string. Vercel applies its own multi-hour cache to plain `/css/*` and `/js/*` paths regardless of `Cache-Control` headers set in `vercel.json` (confirmed: custom headers there do not override it), so a deploy that changes either file without bumping its `v` would leave visitors with a recently cached copy stuck on stale styles or script against fresh HTML. **Bump the `v` on both tags any time `styles.css` or `app.js` changes.**

## Run

Open `src/index.html` in any browser, or deploy `src/` to Vercel. No build step.
