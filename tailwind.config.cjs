/* eslint-disable no-dupe-keys */
/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ["./src/**/*.{astro,html,js,jsx,md,mdx,mdoc,svelte,ts,tsx,vue}"],
	theme: {
		extend: {
			fontFamily: {
				lobster: ["Lobster", "sans-serif"],
				carter: ["Carter One", "sans-serif"],
				georgia: ["Georgia", "serif"],
				trebuchet: ["Trebuchet MS", "sans-serif"],
				ibmplex: ["IBM Plex Mono", "monospace"],
				slabone: ["Alfa Slab One", "sans-serif"],
				paytone: ["Paytone One", "sans-serif"],
				jbmono: ["JetBrains Mono Variable", "sans-serif"],
				bungee: ["Bungee Shade", "sans-serif"],
				lato: ["Lato", "sans-serif"],
				helvetica: ["Helvetica", "sans-serif"],
				verdana: ["Verdana", "sans-serif"],
				times: ["Times New Roman", "serif"],
				monts: ["Montserrat Variable", "sans-serif"],
				rowdies: ["Rowdies", "system-ui"],
				kanit: ["Kanit", "sans-serif"],
			},

			typography: {
				DEFAULT: {
					css: {
						a: {
							"font-weight": "500",
						},
						p: {
							"font-family": ["Montserrat Variable", "sans-serif"],
							"font-weight": "500",
						},
						/**
                  h1: {
                     background: '#780000',
                     background: 'linear-gradient(to top right, #780000 0%, #C94F1A 100%)',
                     '-webkit-background-clip': 'text',
                     '-webkit-text-fill-color': 'transparent',
                  },
                  h2: {
                     background: '#910000',
                     background: 'linear-gradient(to left, #910000 0%, #5E250C 100%)',
                     '-webkit-background-clip': 'text',
                     '-webkit-text-fill-color': 'transparent',
                     width: 'fit-content',
                     'margin-bottom': '1.25rem !important',
                  },
                  h3: {
                     background: '#610000',
                     background: 'linear-gradient(to right, #610000 0%, #8A3612 100%)',
                     '-webkit-background-clip': 'text',
                     '-webkit-text-fill-color': 'transparent',
                     width: 'fit-content',
                     'margin-bottom': '0.5rem !important',
                  },
                  */
					},
				},
				dark: {
					css: {
						p: {
							color: "white",
						},
					},
				},
			},
		},
	},
	darkMode: ["class", "[data-theme=dark]"],
	plugins: [require("@tailwindcss/typography"), require("daisyui")],
	daisyui: {
		base: true, // applies background color and foreground color for root element by default
		styled: true, // include daisyUI colors and design decisions for all components
		utils: true, // adds responsive and modifier utility classes
		logs: false,
		themes: [
			{
				light: {
					...require("daisyui/src/theming/themes").cupcake,
					"base-100": "#faf7f5",
					"--rounded-btn": "0.6rem",
					"--rounded-lg": "1rem",
				},
			},
			{
				dark: {
					...require("daisyui/src/theming/themes").business,
					neutral: "#242e32",
					"base-100": "#272824",
					"--rounded-box": "1rem",
					"--rounded-btn": "0.6rem",
				},
			},
		],
	},
};
