# Home

Personal portfolio site of Arel Kair — project showcase plus a blog, with a docs-style sidebar layout.

## Features

- Light/dark theme toggle
- Language selector: English, Spanish, Korean, Mandarin Chinese
- Warm, minimal design: fixed sidebar navigation, flat surfaces, amber accent, almost no animation
- A blog: one static page per post, listed on `src/blog/index.html`, translated with the rest of the site
- Self-hosted, preloaded fonts (Inter, Geist Mono) — no external font requests
- No build step: open `src/index.html` directly, or deploy `src/` as-is

## Structure

```
src/index.html              home page: hero, interests, project tiles
src/blog/index.html         blog post index
src/blog/*.html             individual posts, one file each
src/css/styles.css          single stylesheet (tokens, sidebar, components, responsive)
src/js/main.js              entry script, wires features together
src/js/data/translations.js language dictionaries, including per-post blog content
src/js/lib/preferences.js   shared environment preferences (reduced motion)
src/js/features/            one file per feature (theme, i18n, language menu, nav, status)
```

## Adding a blog post

Copy `src/blog/welcome.html`, update the date, add `data-i18n` keys for the title/excerpt/paragraphs (namespaced like `postWelcomeP1`) to every language in `src/js/data/translations.js`, then link the post from `src/blog/index.html`.

## Run

Open `src/index.html` in any browser, or deploy `src/` to Vercel. No build step required.
