/** @type {import('tailwindcss').Config} */
module.exports = {
   content: ['./src/**/*.{astro,html,js,jsx,md,mdx,mdoc,svelte,ts,tsx,vue}'],
   theme: {
      extend: {
         fontFamily: {
            lobster: ['Lobster', 'sans-serif'],
            carter: ['Carter One', 'sans-serif'],
            georgia: ['Georgia', 'serif'],
            trebuchet: ['Trebuchet MS', 'sans-serif'],
            ibmplex: ['IBM Plex Mono', 'monospace'],
            slabone: ['Alfa Slab One', 'sans-serif'],
            paytone: ['Paytone One', 'sans-serif'],
            jbmono: ['JetBrains Mono Variable', 'sans-serif'],
         },
      },
   },
   darkMode: ['class', '[data-theme=dark]'],
   plugins: [require('@tailwindcss/typography'), require('daisyui')],
   daisyui: {
      base: true, // applies background color and foreground color for root element by default
      styled: true, // include daisyUI colors and design decisions for all components
      utils: true, // adds responsive and modifier utility classes
      logs: false,
      themes: [
         {
            light: {
               ...require('daisyui/src/theming/themes')['[data-theme=cupcake]'],
               '--rounded-btn': '0.6rem',
               '--rounded-lg': '1rem',
            },
         },
         {
            dark: {
               ...require('daisyui/src/theming/themes')['[data-theme=business]'],
               neutral: '#242e32',
               'base-100': '#383429',
               '--rounded-box': '1rem',
               '--rounded-btn': '0.6rem',
            },
         },
         {
            red: {
               ...require('daisyui/src/theming/themes')['[data-theme=cupcake]'],
               '--rounded-btn': '0.6rem',
               '--rounded-lg': '1rem',
            },
         },
         {
            darkred: {
               ...require('daisyui/src/theming/themes')['[data-theme=cupcake]'],
               '--rounded-btn': '0.6rem',
               '--rounded-lg': '1rem',
            },
         },
      ],
   },
};
