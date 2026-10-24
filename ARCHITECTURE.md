# Personal Site

The portfolio of Arel Kair (arelkair.dev), built with Astro as a fully static site. The browser receives HTML, one stylesheet, fonts and images, and no JavaScript.

## Structure

- `src/pages/index.astro` - Home: the four main projects, each a block that links to its repository, with a Snorlax plush below as decoration
- `src/pages/blog/index.astro` - Blog list at `/blog`, newest first, with an empty state
- `src/pages/blog/[slug].astro` - One page per post
- `src/content/blog/*.md` - Posts in Markdown (title, description, date, draft); files starting with `_` are never published
- `src/content.config.ts` - Blog collection schema
- `src/data/blog.ts` - Published posts sorted by date, and date formatting
- `src/pages/work/[slug].astro` - One case study template for every project (not linked from the home page for now)
- `src/pages/404.astro` - Not found page
- `src/layouts/Base.astro` - Document head and the header (name, tagline and Blog link)
- `src/data/projects.ts` - Every project: status, stack, links, facts, progress and the blocks of its case study. 
- `src/i18n/en.json` - Case study text; `src/i18n/index.ts` looks strings up by key
- `src/styles/global.css` - Single short stylesheet
- `src/assets/work/` - Screenshots used on the case studies, optimized to WebP at build time by `astro:assets`
- `public/` - Favicon (the four-petal emblem, SVG only), social image and robots.txt
- `vercel.json` - Deploy configuration: Astro framework, clean URLs, security headers and a one-year cache on `/_astro/*`

## Design

Extremely minimal: one narrow column of text, set only in Lora, black and white following the system light or dark mode. Project and section names are in italic. There are no images on the home page; case studies show their screenshots in grayscale. Project and post rows are blocks that turn light gray on hover. On every page load the name stays still while the tagline, the Blog link and the content fade and rise in; with reduced motion this becomes a plain fade.

## Content

Every fact on the site comes from a public source: the GitHub profile and its README, each repository's README and `package.json`, and what the live sites show. Nivra's repository is private, so it links only to the live app. Wii Party Recomp uses its own icon and progress estimates instead of game screenshots, which would be Nintendo's content.

## Deploy

The Vercel project root must be the repository root (it used to be `src/`). Vercel detects Astro, runs `npm run build` and serves `dist/`.
