# Home
Personal homepage of Arel Kair (arelkair.dev), a single page in the visual language of Nivra.
## Features
- Light/dark theme, neutral palette, four project cards with real screenshots
- Language selector: English, Spanish, Korean, Mandarin Chinese
- Geist and Geist Mono, one type family
- Self-hosted, preloaded fonts, no external font requests
- A single bundled script (`src/js/app.js`), one request for everything
- No build step: open `src/index.html` directly, or deploy `src/` as-is
## Structure
```
src/index.html              the whole site: controls, hero wordmark, project grid, footer
src/assets/img/             project screenshots
src/css/styles.css          single stylesheet (tokens, layout, components, responsive)
src/js/app.js               translations, preferences and every feature, in one file
```
