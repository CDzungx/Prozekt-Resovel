import { defineConfig } from "astro/config";
import tailwind from "@astrojs/tailwind";
import solidJs from "@astrojs/solid-js";
import sitemap from "@astrojs/sitemap";
import image from "@astrojs/image";
import alpinejs from "@astrojs/alpinejs";
import markdoc from "@astrojs/markdoc";
import vercel from "@astrojs/vercel/serverless";
import compress from "astro-compress";


// https://astro.build/config
export default defineConfig({
  build: {
    inlineStylesheets: "auto",
  },
  integrations: [
    tailwind(),
    solidJs(),
    sitemap(),
    image({
      cacheDir: "./.cache/image",
    }),
    alpinejs(),
    markdoc(),
    compress(),
  ],
  output: "hybrid",
  adapter: vercel({ analytics: true }),
});
