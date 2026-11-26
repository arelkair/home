# Personal Site

The portfolio of Arel Kair (arelkair.dev), built with Astro and Tailwind CSS v4 as a fully static site. The browser receives HTML with the stylesheet inlined, the font and images, and no JavaScript.

## Structure

- `src/pages/index.astro` - Home: a short intro and the three projects as rows, each linking to its GitHub repository in a new tab
- `src/pages/404.astro` - Not found page
- `src/layouts/Base.astro` - Document head, the header (name and tagline), the footer with links elsewhere, and the body classes that set the column
- `src/data/projects.ts` - Every project: name, repository, summary, status and start date
- `src/styles/global.css` - Tailwind import, the Geist font faces, the theme (colors, the rise animation), the light and dark variables and the `link` utility
- `src/assets/fonts/geist.woff2` - Geist Sans, the Latin variable file from `@fontsource-variable/geist` (29 KB), copied here so the stylesheet can reference it. Its license is in `public/geist-OFL.txt`
- `public/` - Favicon, social image, robots.txt and Geist's license
- `vercel.json` - Deploy configuration: Astro framework, clean URLs, security headers (the CSP allows no scripts at all) and caching: one year on `/_astro/*`, one day on the other static files

## Design

Extremely minimal: one narrow column of text, set in a single family, Geist Sans, with hierarchy made only by weight, size, color and tabular figures, black and white following the system light or dark mode. The project rows are blocks that turn light gray on hover, with a small arrow that moves. The content fades and rises in on load in 450 ms, which Tailwind's `motion-safe` turns off for people who prefer reduced motion.

## Performance

One HTML file of 4 KB with the compressed stylesheet inlined, one preloaded font of 29 KB and no JavaScript. A fallback face (`Geist Fallback`, Arial with Geist's metrics) keeps the swap from moving the text: the layout shift measured 0.0001.

There is no Work section for now: the projects link straight to their repositories.

## Content

Every fact on the site comes from a public source: the GitHub profile and its README, each repository's README and `package.json`, and what the live sites show.

## Deploy

The Vercel project root must be the repository root. Vercel detects Astro, runs `npm run build` and serves `dist/`.
