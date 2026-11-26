# Personal Site

The portfolio of Arel Kair (arelkair.dev), built with Astro and Tailwind CSS v4 as a fully static site. The browser receives HTML with the stylesheet inlined, the font and images, and no JavaScript.

## Structure

- `src/pages/index.astro` - Home: a short intro and the three projects as rows, each linking to its GitHub repository in a new tab
- `src/pages/404.astro` - Not found page
- `src/layouts/Base.astro` - Document head, the header (name and tagline), the footer with links elsewhere, and the body classes that set the column
- `src/data/projects.ts` - Every project: name, repository, summary, status and start date
- `src/styles/global.css` - Tailwind import, the theme (Allo, the paper, ink and muted colors, the rise animation), the light and dark variables and the `link` utility
- `public/` - Favicon, social image, robots.txt and Allo's license
- `vercel.json` - Deploy configuration: Astro framework, clean URLs, security headers (the CSP allows no scripts except the inline speculation rules that prefetch links on hover) and a one-year cache on `/_astro/*`

## Design

Extremely minimal: one narrow column of text, set only in Allo, black and white following the system light or dark mode. The project rows are blocks that turn light gray on hover, with a small arrow that moves. The tagline and the content fade and rise in on load, which Tailwind's `motion-safe` turns off for people who prefer reduced motion.

There is no Work section for now: the projects link straight to their repositories.

## Content

Every fact on the site comes from a public source: the GitHub profile and its README, each repository's README and `package.json`, and what the live sites show.

## Deploy

The Vercel project root must be the repository root. Vercel detects Astro, runs `npm run build` and serves `dist/`.
