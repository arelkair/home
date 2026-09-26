# Personal Site

The portfolio of Arel Kair (arelkair.dev), built with plain HTML, CSS and JavaScript. No framework and no build step. Light and dark themes (following the system by default) and four languages (English, Spanish, Korean, Mandarin Chinese).

## Structure

- `src/index.html` - Home: hero, selected work, other repositories, about, tools, contact
- `src/work/pool.html`, `src/work/poisoned-candy.html`, `src/work/nivra.html` - One case study per project
- `src/404.html` - Not found page (served automatically by Vercel)
- `src/css/styles.css` - Single stylesheet: fonts, tokens, header, hero, projects, case studies, responsive, motion
- `src/js/app.js` - Translations, preferences, theme toggle, language menu and the hero cue ball, sharing a single `window.Portfolio` namespace
- `src/assets/work/` - Real screenshots of each project (Pool's comes from its repository; the others were captured from the live sites)
- `src/assets/fonts/` - Self-hosted Bricolage Grotesque, Geist and Geist Mono (latin subset)
- `src/assets/icons/` - Favicon and Apple touch icon
- `src/assets/og.png` - Social preview image (1200x630)
- `src/robots.txt`, `src/sitemap.xml` - Crawling
- `src/vercel.json` - Deploy configuration (the Vercel root directory is `src/`): clean URLs, security headers and a one-year cache on `/assets/*`

All pages share the same header, footer and inline theme script. That script must stay byte-identical across pages because its SHA-256 hash is allowed in the Content Security Policy in `vercel.json`; if it changes, update the hash.

## Content

Every fact on the site comes from a public source: the GitHub profile and its README, each repository's README and `package.json`, and what the live sites show. Only projects that are public (a public repository or a live site) are listed. Nivra's repository is private, so it links only to the live app.

## Design

- Palette: neutral paper and ink in both themes, with one accent, the green of Pool's table, used for focus rings, the live status dot, hover states and the aim line.
- Type: Bricolage Grotesque for the name and headings, Geist for text, Geist Mono only for code paths and domains.
- Layout: each project has its own treatment instead of identical cards. Pool is image-led, Poisoned Candy shows the real board and Nivra pairs the desktop dashboard with the phone screen.
- The signature element is a cue ball in the hero that can be dragged and released, like a shot in Pool: an aim line shows the direction, the ball rolls with friction and bounces off the edges. It is decorative (hidden from assistive technology) and is removed when reduced motion is requested.
- Motion is limited to one load sequence, hover feedback on devices that can hover, press feedback, the language menu and the cue ball.

## Translations

The English text lives in the HTML. `app.js` stores the original text of every `data-i18n` element on load and swaps in the Spanish, Korean or Chinese strings from `Portfolio.translations`. Image descriptions use `data-i18n-alt`.

## Performance

- No framework, one stylesheet, one deferred script.
- Fonts are self-hosted and the two main ones are preloaded.
- Images below the fold load lazily and have explicit dimensions.
- `/assets/*` is cached for a year. `css/styles.css` and `js/app.js` are linked with a `?v=N` query string because Vercel applies its own multi-hour cache to those paths that `vercel.json` cannot override. **Bump `v` on every page any time `styles.css` or `app.js` changes.**
