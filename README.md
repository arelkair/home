# Home
The portfolio of Arel Kair: [arelkair.dev](https://arelkair.dev).
## Features
- Home page listing Wii Party Recomp, Nivra, Pool and Poisoned Candy with links to their repositories
- A blog at arelkair.dev/blog, written in Markdown
- A single column of text in black and white, set in Lora
- Built with Astro, with no JavaScript sent to the browser
## Development
```
npm install
npm run dev      http://localhost:4321
npm run build    type check and build into dist/
```
## Writing a blog post
Copy `src/content/blog/_template.md`, rename the copy (its name becomes the address: `my-post.md` is `/blog/my-post`), write the post and set `draft: false`.
