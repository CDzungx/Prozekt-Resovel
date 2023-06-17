import { defineConfig } from "astro/config";
import prefetch from "@astrojs/prefetch";
import tailwind from "@astrojs/tailwind";
import solidJs from "@astrojs/solid-js";
import image from "@astrojs/image";
import sitemap from "@astrojs/sitemap";
import alpinejs from "@astrojs/alpinejs";
import markdoc from "@astrojs/markdoc";
import vercel from "@astrojs/vercel/serverless";
import compress from "astro-compress";

// https://astro.build/config
export default defineConfig({
  build: {
    inlineStylesheets: "auto",
  },
  ssr: {
    noExternal: ["@motionone/solid", "@solid-primitives/props"],
  },
  integrations: [
    prefetch(),
    tailwind(),
    solidJs(),
    image({ cacheDir: "./.cache/image", serviceEntryPoint: "@astrojs/image/sharp" }),
    sitemap(),
    alpinejs(),
    markdoc(),
    compress(),
  ],
  output: "hybrid",
  adapter: vercel({
    analytics: true,
  }),
});
