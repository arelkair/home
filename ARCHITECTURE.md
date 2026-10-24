# Personal Site

The portfolio of Arel Kair (arelkair.dev), built with Astro as a fully static site. The browser receives HTML, one stylesheet, fonts and images, and no JavaScript.

## Structure

- `src/pages/[...lang]/index.astro` - Home: name, one line, the project list, about and social links
- `src/pages/[...lang]/work/[slug].astro` - One case study template for every project
- `src/pages/404.astro` - Not found page
- `src/layouts/Base.astro` - Document head and the footer with the language links
- `src/data/projects.ts` - Every project: status, stack, links, facts, progress and the blocks of its case study. 
- `src/i18n/*.json` - All text in English, Spanish, Korean and Chinese; `src/i18n/index.ts` holds the translator and URL helpers
- `src/styles/global.css` - Single short stylesheet
- `src/assets/work/` - Screenshots used on the case studies, optimized to WebP at build time by `astro:assets`
- `public/` - Favicon, Apple touch icon, social image and robots.txt
- `vercel.json` - Deploy configuration: Astro framework, clean URLs, security headers and a one-year cache on `/_astro/*`

## Languages

English lives at the root (`/`, `/work/pool`). Spanish, Korean and Chinese are prefixed (`/es`, `/ko/work/pool`). Every page links its translations with `hreflang`, and the language links in the footer keep you on the same page.

## Design

Extremely minimal: one narrow column of text, set only in Lora, black and white following the system light or dark mode. Project and section names are in italic. There are no images on the home page; case studies show their screenshots in grayscale. The only motion is a short fade when a page loads, skipped when the system asks for reduced motion.

## Content

Every fact on the site comes from a public source: the GitHub profile and its README, each repository's README and `package.json`, and what the live sites show. Nivra's repository is private, so it links only to the live app. Wii Party Recomp uses its own icon and progress estimates instead of game screenshots, which would be Nintendo's content.

## Deploy

The Vercel project root must be the repository root (it used to be `src/`). Vercel detects Astro, runs `npm run build` and serves `dist/`.
