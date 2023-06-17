import { defineConfig } from "astro/config";
import prefetch from "@astrojs/prefetch";
import tailwind from "@astrojs/tailwind";
import solidJs from "@astrojs/solid-js";
import sitemap from "@astrojs/sitemap";
import image from "@astrojs/image";
import alpinejs from "@astrojs/alpinejs";
import markdoc from "@astrojs/markdoc";
import vercel from "@astrojs/vercel/serverless";
import compress from "astro-compress";
import purgecss from "astro-purgecss";

// https://astro.build/config
export default defineConfig({

  build: {
    inlineStylesheets: "auto",
  },
  ssr: {
    noExternal: ['@motionone/solid', '@solid-primitives/props'],
  },
  integrations: [
    prefetch(),
    tailwind(),
    solidJs(),
    sitemap(),
    image({
      cacheDir: "./.cache/image",
    }),
    alpinejs(),
    markdoc(),
    compress(),
    purgecss({
      fontFace: true,
      keyframes: true,
      rejected: true,
    }),
  ],
  output: "hybrid",
  adapter: vercel({
    analytics: true,
  }),
});
