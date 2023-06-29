/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,mdoc,svelte,ts,tsx,vue}"],
  theme: {
    extend: {},
  },
  darkMode: ["class", "[data-theme=dark]"],
  plugins: [require("@tailwindcss/typography"), require("daisyui")],
  daisyui: {
    base: true, // applies background color and foreground color for root element by default
    styled: true, // include daisyUI colors and design decisions for all components
    utils: true, // adds responsive and modifier utility classes
    logs: true, // Shows info about daisyUI version and used config in the console when building your CSS
    themes: [
      {
        light: {
          ...require("daisyui/src/theming/themes")["[data-theme=cupcake]"],
          "--rounded-btn": "0.6rem",
          "--rounded-lg": "1rem",
        },
      },
      {
        dark: {
          ...require("daisyui/src/theming/themes")["[data-theme=business]"],
          "base-100": "#2C2626",
          "--rounded-box": "1rem",
          "--rounded-btn": "0.6rem",
        },
      },
    ],
  },
};
