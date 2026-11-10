import { defineConfig } from "astro/config";
import sitemap from "@astrojs/sitemap";

export default defineConfig({
  site: "https://arelkair.dev",
  trailingSlash: "never",
  build: { format: "file", inlineStylesheets: "always" },
  server: { port: 4321 },
  integrations: [sitemap()],
});
