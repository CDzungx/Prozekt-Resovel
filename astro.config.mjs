import { defineConfig } from "astro/config";
import tailwind from "@astrojs/tailwind";
import solidJs from "@astrojs/solid-js";
import sitemap from "@astrojs/sitemap";
import image from "@astrojs/image";
import compress from "astro-compress";

// https://astro.build/config
export default defineConfig({
  integrations: [
    tailwind(),
    solidJs(),
    sitemap(),
    image({
      cacheDir: "./.cache/image",
    }),
    compress()
  ],
});
