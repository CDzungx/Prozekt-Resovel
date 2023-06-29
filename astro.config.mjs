import { defineConfig } from "astro/config";
import prefetch from "@astrojs/prefetch";
import tailwind from "@astrojs/tailwind";
import react from "@astrojs/react";
import solidJs from "@astrojs/solid-js";
import alpinejs from "@astrojs/alpinejs";
import image from "@astrojs/image";
import sitemap from "@astrojs/sitemap";
import markdoc from "@astrojs/markdoc";
import vercel from "@astrojs/vercel/serverless";
import compress from "astro-compress";


// https://astro.build/config
export default defineConfig({
  site: "https://prozekt-asolind.vercel.app/",
  integrations: [
    react(),
    solidJs(),
    prefetch(),
    tailwind(),
    image({
      cacheDir: "./.cache/image",
      serviceEntryPoint: "@astrojs/image/sharp",
    }),
    sitemap(),
    alpinejs(),
    markdoc(),
    compress(),
    
  ],
  build: {
    inlineStylesheets: "auto",
  },
  ssr: {
    noExternal: ["animate.css"],
  },
  output: "hybrid",
  adapter: vercel({
    analytics: true,
  }),
});
