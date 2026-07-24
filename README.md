# Home

Personal portfolio site of Arel Kair — a single-page project showcase with a docs-style sidebar layout.

## Features

- Light/dark theme toggle, strictly black and white
- Language selector: English, Spanish, Korean, Mandarin Chinese
- Minimal design: fixed sidebar navigation, flat surfaces, almost no animation
- Self-hosted, preloaded fonts (Inter, Geist Mono) — no external font requests
- A single bundled script (`src/js/app.js`) — one request instead of eight
- No build step: open `src/index.html` directly, or deploy `src/` as-is

## Structure

```
src/index.html              home page: hero, interests, project tiles
src/css/styles.css          single stylesheet (tokens, sidebar, components, responsive)
src/js/app.js               translations, preferences and every feature, in one file
```

## Run

Open `src/index.html` in any browser, or deploy `src/` to Vercel. No build step required.
