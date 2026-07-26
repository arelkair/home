# Home

Personal portfolio site of Arel Kair — a single centered page, minimal, black and white.

## Features

- Light/dark theme toggle, strictly black and white
- Language selector: English, Spanish, Korean, Mandarin Chinese
- Minimal design: one centered page, flat surfaces, almost no animation
- Self-hosted, preloaded fonts (Geist, Geist Mono) — no external font requests
- A single bundled script (`src/js/app.js`) — one request for everything
- No build step: open `src/index.html` directly, or deploy `src/` as-is

## Structure

```
src/index.html              the whole site: name, interests, project tiles, certifications
src/css/styles.css          single stylesheet (tokens, layout, components, responsive)
src/js/app.js               translations, preferences and every feature, in one file
```

## Run

Open `src/index.html` in any browser, or deploy `src/` to Vercel. No build step required.
