import mdx from "@astrojs/mdx";
import react from "@astrojs/react";
import sitemap from "@astrojs/sitemap";
import solidJs from "@astrojs/solid-js";
import svelte from "@astrojs/svelte";
import tailwind from "@astrojs/tailwind";
import vercel from "@astrojs/vercel/serverless";
import Compress from "astro-compress";
import icon from "astro-icon";
import robotsTxt from "astro-robots-txt";
import { defineConfig } from "astro/config";
import db from "@astrojs/db";

// https://astro.build/config
export default defineConfig({
	site: "https://cdzungx.id.vn/",
	vite: {
		ssr: {
			noExternal: ["three"],
		},
	},
	redirects: {
		"/github": "https://github.com/CDzungx/",
		"/discord": "https://discordapp.com/users/1088612635219599460",
	},
	integrations: [
		tailwind(),
		icon({
			include: {
				mdi: [
					"github",
					"arrow-left-bold-outline",
					"home-outline",
					"like-outline",
					"share-outline",
				],
				ic: ["outline-discord", "baseline-privacy-tip"],
				ph: ["code-fill", "eye-bold"],
				emojione: ["flag-for-united-kingdom", "flag-for-vietnam"],
				devicon: ["solidjs", "astro"],
				"vscode-icons": [
					"file-type-astro",
					"file-type-svelte",
					"file-type-reactjs",
					"file-type-tailwind",
				],
			},
		}),
		sitemap(),
		robotsTxt(),
		react(),
		solidJs(),
		svelte(),
		mdx(),
		Compress(),
		db(),
	],
	output: "hybrid",
	adapter: vercel({
		webAnalytics: {
			enabled: true,
		},
		functionPerRoute: false,
	}),
	experimental: {
		directRenderScript: true,
	},
});
