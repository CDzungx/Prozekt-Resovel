/** @jsxImportSource solid-js */

import { browser, createI18n, formatter, localeFrom } from "@nanostores/i18n";
import { persistentAtom } from "@nanostores/persistent";

export const setting = persistentAtom("locale");
export const locale = localeFrom(
	setting, // User’s locale from localStorage
	browser({
		// or browser’s locale auto-detect
		available: ["en", "vi"],
		fallback: "en",
	}),
);

export const format = formatter(locale);

export const i18n = createI18n(locale, {
	baseLocale: "en",
	async get(code) {
		const response = await fetch(`/translations/${code}.json`);
		const jsonData = await response.json();
		return jsonData;
	},
});
