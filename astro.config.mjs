// @ts-check
// @ts-ignore
import { defineConfig } from "astro/config";
// @ts-ignore
import mdx from "@astrojs/mdx";
// @ts-ignore
import sitemap from "@astrojs/sitemap";
// @ts-ignore
import tailwind from "@astrojs/tailwind";

export default defineConfig({
  site: "https://ml5191.github.io",
  base: "astro-maplibre-template",
  integrations: [mdx(), sitemap(), tailwind()],
});
