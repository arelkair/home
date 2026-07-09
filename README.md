# Home

Personal portfolio site of Arel Kair — a single-page site with a short bio and project showcase.

## Features

- Light/dark theme toggle
- Language selector: English, Spanish, Korean, Mandarin Chinese
- Fluent/Windows 11-inspired design: translucent surfaces, Mica-style texture, monochrome accent
- Self-hosted, preloaded fonts (Geist, Geist Mono) — no external font requests
- No build step: open `src/index.html` directly, or deploy `src/` as-is

## Structure

```
src/index.html              markup and page sections
src/css/styles.css          single stylesheet (fonts, tokens, base, components, animations, responsive)
src/js/main.js              entry script, wires features together
src/js/data/translations.js language dictionaries
src/js/lib/preferences.js   shared environment preferences (reduced motion)
src/js/features/            one file per feature (theme, i18n, language menu, spotlight, status)
```

## Run

Open `src/index.html` in any browser, or deploy `src/` to Vercel. No build step required.
