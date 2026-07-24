# Home

Personal portfolio site of Arel Kair — project showcase plus a blog, with a docs-style sidebar layout.

## Features

- Light/dark theme toggle, strictly black and white
- Language selector: English, Spanish, Korean, Mandarin Chinese
- Minimal design: fixed sidebar navigation, flat surfaces, almost no animation
- A blog: one static page per post, listed on `src/blog/index.html`, translated with the rest of the site
- Self-hosted, preloaded fonts (Inter, Geist Mono) — no external font requests
- A single bundled script (`src/js/app.js`) — one request instead of eight
- No build step: open `src/index.html` directly, or deploy `src/` as-is

## Structure

```
src/index.html              home page: hero, interests, project tiles
src/blog/index.html         blog post index
src/blog/*.html             individual posts, one file each
src/css/styles.css          single stylesheet (tokens, sidebar, components, responsive)
src/js/app.js               translations, preferences and every feature, in one file
```

## Adding a blog post

Copy `src/blog/welcome.html`, update the date, add `data-i18n` keys for the title/excerpt/paragraphs (namespaced like `postWelcomeP1`) to every language in the `Portfolio.translations` object at the top of `src/js/app.js`, then link the post from `src/blog/index.html`.

## Run

Open `src/index.html` in any browser, or deploy `src/` to Vercel. No build step required.
