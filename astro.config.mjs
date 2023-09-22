import { defineConfig } from 'astro/config';
import react from '@astrojs/react';
import solidJs from '@astrojs/solid-js';
import prefetch from '@astrojs/prefetch';
import tailwind from '@astrojs/tailwind';
import icon from 'astro-icon';
import sitemap from '@astrojs/sitemap';
import vercel from '@astrojs/vercel/serverless';
import robotsTxt from 'astro-robots-txt';
import Compress from 'astro-compress';
import svelte from '@astrojs/svelte';
import mdx from '@astrojs/mdx';

// https://astro.build/config
export default defineConfig({
   site: 'https://cdzungx.id.vn/',

   vite: {
      ssr: {
         noExternal: ['three'],
      },
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
      react(),
      solidJs(),
      svelte(),
      mdx(),
      Compress(),
   ],

   output: 'hybrid',
   adapter: vercel({
      webAnalytics: {
         enabled: true,
      },
      functionPerRoute: false,
   }),
});
