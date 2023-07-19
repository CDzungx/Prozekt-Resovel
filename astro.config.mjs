import { defineConfig, sharpImageService } from 'astro/config';
import react from '@astrojs/react';
import solidJs from '@astrojs/solid-js';
import prefetch from '@astrojs/prefetch';
import tailwind from '@astrojs/tailwind';
import icon from 'astro-icon';
import sitemap from '@astrojs/sitemap';
import vercel from '@astrojs/vercel/serverless';
import robotsTxt from 'astro-robots-txt';
import compress from 'astro-compress';
import svelte from '@astrojs/svelte';

// https://astro.build/config
export default defineConfig({
   site: 'https://prozekt-resovel.vercel.app/',
   experimental: {
      assets: true,
      redirects: true,
   },
   image: {
      service: sharpImageService(),
   },

   integrations: [
      prefetch(),
      tailwind(),
      icon({
         include: {
            mdi: ['github', 'arrow-left-thick'],
            ic: ['outline-discord'],
            ph: ['code-fill'],
            emojione: ['flag-for-united-kingdom', 'flag-for-vietnam'],
         },
      }),
      sitemap(),
      robotsTxt(),
      compress(),
      react(),
      solidJs(),
      svelte(),
   ],
   build: {
      inlineStylesheets: 'auto',
   },
   compressHTML: true,
   output: 'hybrid',
   adapter: vercel({
      analytics: true,
      split: true,
   }),
});
