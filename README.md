# Home
Personal homepage of Arel Kair (arelkair.dev) — a single centered page, styled after Nivra's visual language.
## Features
- Light/dark theme, warm neutral palette (no Certifications section, no self-referential "Home" tile)
- Language selector: English, Spanish, Korean, Mandarin Chinese
- Fraunces display wordmark, Inter body text, JetBrains Mono for small utility text
- Self-hosted, preloaded fonts — no external font requests
- A single bundled script (`src/js/app.js`) — one request for everything
- No build step: open `src/index.html` directly, or deploy `src/` as-is
## Structure
```
src/index.html              the whole site: nav, hero wordmark, project grid, footer
src/css/styles.css          single stylesheet (tokens, layout, components, responsive)
src/js/app.js               translations, preferences and every feature, in one file
```
