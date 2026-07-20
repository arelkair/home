# Home

Personal portfolio site of Arel Kair — project showcase plus a blog, with a docs-style sidebar layout.

## Features

- Light/dark theme toggle
- Language selector: English, Spanish, Korean, Mandarin Chinese
- Docs-inspired design: fixed sidebar navigation, flat surfaces, lavender accent
- A blog: one static page per post, listed on `src/blog/index.html`
- Self-hosted, preloaded fonts (Inter, Geist Mono) — no external font requests
- No build step: open `src/index.html` directly, or deploy `src/` as-is

## Structure

```
src/index.html              home page: hero, interests, project tiles
src/blog/index.html         blog post index
src/blog/*.html             individual posts, one file each
src/css/styles.css          single stylesheet (tokens, sidebar, components, animations, responsive)
src/js/main.js              entry script, wires features together
src/js/data/translations.js language dictionaries
src/js/lib/preferences.js   shared environment preferences (reduced motion)
src/js/features/            one file per feature (theme, i18n, language menu, nav, spotlight, status)
```

## Adding a blog post

Copy `src/blog/welcome.html`, update the title, date and content, then link it from `src/blog/index.html`.

## Run

Open `src/index.html` in any browser, or deploy `src/` to Vercel. No build step required.
