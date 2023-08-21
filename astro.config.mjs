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
      viewTransitions: true,
   },
   vite: {
      ssr: {
         noExternal: ['three'],
      },
   },
   image: {
      service: sharpImageService(),
   },
   redirects: {
      '/github': 'https://github.com/CDzungx/Prozekt-Resovel',
      '/discord': 'https://discordapp.com/users/1088612635219599460',
   },
   integrations: [
      prefetch(),
      tailwind(),
      icon({
         include: {
            mdi: ['github', 'arrow-left-bold-outline', 'home-outline'],
            ic: ['outline-discord'],
            ph: ['code-fill'],
            emojione: ['flag-for-united-kingdom', 'flag-for-vietnam'],
            devicon: ['solidjs'],
            'vscode-icons': ['file-type-astro', 'file-type-svelte', 'file-type-reactjs', 'file-type-tailwind'],
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
      inlineStylesheets: 'always',
   },
   compressHTML: true,
   output: 'hybrid',
   adapter: vercel({
      analytics: true,
      split: true,
   }),
});
