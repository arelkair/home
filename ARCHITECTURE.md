# Personal Site

The portfolio of Arel Kair (arelkair.dev), built with Astro as a fully static site. The browser receives HTML, one stylesheet, fonts and images, and no JavaScript.

## Structure

- `src/pages/[...lang]/index.astro` - Home: opening statement with a screenshot collage, work gallery, about, tools as footnotes, social links and other repositories
- `src/pages/[...lang]/work/[slug].astro` - One case study template for every project
- `src/pages/404.astro` - Not found page
- `src/layouts/Base.astro` - Document head, the side rail (contents, project list, languages) and the colophon
- `src/data/projects.ts` - Every project: status, stack, links, facts, progress and the blocks of its case study. The tools list is derived from the project stacks
- `src/i18n/*.json` - All text in English, Spanish, Korean and Chinese; `src/i18n/index.ts` holds the translator and URL helpers
- `src/styles/global.css` - Single stylesheet: tokens, layout, components, motion
- `src/assets/work/` - Screenshots, optimized to WebP at build time by `astro:assets`
- `public/` - Favicon, Apple touch icon, social image and robots.txt
- `vercel.json` - Deploy configuration: Astro framework, clean URLs, security headers and a one-year cache on `/_astro/*`

## Languages

English lives at the root (`/`, `/work/pool`). Spanish, Korean and Chinese are prefixed (`/es`, `/ko/work/pool`). Every page links its translations with `hreflang`, and the language links in the rail keep you on the same page.

## Design

- Palette: black and white only, following the system light or dark mode. No accent color.
- Type: Cormorant Garamond italic for display text, Lora for reading text, Geist for small labels.
- Layout: a fixed side rail on desktop that becomes a top bar on mobile; an asymmetric 7/5 then 5/7 work gallery; case studies with a sticky left column (title, facts, links) and the story on the right.
- Images are shown in grayscale and turn to color on hover.
- Motion: CSS only. A load sequence, scroll reveals with scroll-driven animations, cross-document view transitions that carry the project name between pages, and hover feedback only on devices that can hover. Everything respects `prefers-reduced-motion`.

## Content

Every fact on the site comes from a public source: the GitHub profile and its README, each repository's README and `package.json`, and what the live sites show. Nivra's repository is private, so it links only to the live app. Wii Party Recomp uses its own icon and progress estimates instead of game screenshots, which would be Nintendo's content.

## Deploy

The Vercel project root must be the repository root (it used to be `src/`). Vercel detects Astro, runs `npm run build` and serves `dist/`.
