# Personal Site

The portfolio of Arel Kair (arelkair.dev), built with plain HTML, CSS and JavaScript. No framework and no build step. Light and dark themes (following the system by default) and four languages (English, Spanish, Korean, Mandarin Chinese).

## Structure

- `src/index.html` - Home: hero, selected work (bento grid), other repositories, about, tools matrix, social links
- `src/work/pool.html`, `src/work/poisoned-candy.html`, `src/work/nivra.html`, `src/work/wii-party-recomp.html` - One case study per project
- `src/404.html` - Not found page (served automatically by Vercel)
- `src/css/styles.<hash>.css` - Single stylesheet: fonts, tokens, header, hero, projects, case studies, responsive, motion
- `src/js/app.<hash>.js` - Translations, preferences, theme toggle and language menu, sharing a single `window.Portfolio` namespace
- `src/assets/work/` - Real screenshots of each project (Pool's comes from its repository; the others were captured from the live sites)
- `src/assets/fonts/` - Self-hosted Archivo (variable weight and width), Geist and Geist Mono (latin subset)
- `src/assets/icons/` - Favicon (SVG, adapts to light and dark) and Apple touch icon: a rounded square with a green dot
- `src/assets/og.png` - Social preview image (1200x630)
- `src/robots.txt`, `src/sitemap.xml` - Crawling
- `src/vercel.json` - Deploy configuration (the Vercel root directory is `src/`): clean URLs, security headers and a one-year cache on `/assets/*`

All pages share the same header, footer and inline theme script. That script must stay byte-identical across pages because its SHA-256 hash is allowed in the Content Security Policy in `vercel.json`; if it changes, update the hash.

## Content

Every fact on the site comes from a public source: the GitHub profile and its README, each repository's README and `package.json`, and what the live sites show. Nivra's repository is private, so it links only to the live app. Wii Party Recomp links to its repository; its page is built from the project's README and uses its own original icon and progress estimates instead of game screenshots, which would be Nintendo's content. The trailer was removed from the page on 2026-10-13.

## Design

- Palette: cool off-white and near-black ink in light and dark, with one cobalt accent (`#2542e8` light, `#8ba0ff` dark) for focus rings, status dots, progress bars, tool marks and hover states.
- Type: Archivo at its narrowest width and heaviest weight for the name, project names and headings; Geist for text; Geist Mono for stacks and handles. The hero name is sized with a container query unit so it always spans the full content width.
- Layout: the work section is a bento grid, with Wii Party Recomp across the full width with its estimated progress, Nivra and Pool side by side, and Poisoned Candy across the full width with two real screenshots. Each cell links to its case study through a stretched link, with the external links layered above it.
- Tools: a matrix of technologies against projects, so each tool is backed by the project that uses it. It replaces any skills list.
- Social links, in order: GitHub, X, YouTube, TikTok and Discord, each with its brand icon from Simple Icons.
- Motion: one load sequence on the hero, hover feedback only on devices that can hover, press feedback and the language menu. Everything respects `prefers-reduced-motion`.

## Translations

The English text lives in the HTML. `app.js` stores the original text of every `data-i18n` element on load and swaps in the Spanish, Korean or Chinese strings from `Portfolio.translations`. Image descriptions use `data-i18n-alt`.

## Performance

- No framework, one stylesheet, one deferred script.
- Fonts are self-hosted and the two main ones are preloaded.
- Images below the fold load lazily and have explicit dimensions.
- `/assets/*` is cached for a year.
- The stylesheet and the script carry a fingerprint of their content in the file name (`styles.<hash>.css`, `app.<hash>.js`). Vercel's edge cache ignores query strings, so a `?v=N` parameter cannot force a fresh copy; a new file name always can. **Whenever `styles` or `app` changes, rename it with the first 10 characters of the SHA-256 of its contents (LF line endings) and update the `<link>` and `<script>` tags on every page.**
