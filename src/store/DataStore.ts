import { atom } from "nanostores";

const dataTheme = atom("light" || "dark");
const dataThemeVN = atom("light" || "dark");
const hasClickedStartButton = atom("false" || "true");
const showLoader = atom("true" || "false");
const $blogIsEnglish = atom(true || false);

export {
	dataTheme,
	hasClickedStartButton,
	showLoader,
	dataThemeVN,
	$blogIsEnglish,
};
