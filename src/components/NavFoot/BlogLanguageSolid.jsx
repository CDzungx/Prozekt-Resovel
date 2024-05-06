/** @jsxImportSource solid-js */

import { useStore } from "@nanostores/solid";
import { $blogIsEnglish } from "@store/DataStore";
import { onMount } from "solid-js";

const BlogLanguageSolid = () => {
	const blogIsEnglish = useStore($blogIsEnglish);
	onMount(() => {
		if (!window.location.href.includes("/vi") && blogIsEnglish() === false) {
			window.location.href = window.location.href.replace("/en", "/vi");
		}
		window.location.href.includes("/vi") ? $blogIsEnglish.set(false) : $blogIsEnglish.set(true);
		console.log(blogIsEnglish());
	});

	function redirect(language) {
		if (language === "en") {
			window.location.href = window.location.href.replace("/vi", "/en");
			$blogIsEnglish.set(true);
		} else {
			window.location.href = window.location.href.replace("/en", "/vi");
			$blogIsEnglish.set(false);
		}
	}

	return (
		<div class="mx-1 flex flex-row justify-around rounded-md bg-white p-1 px-2 font-monts dark:bg-zinc-700">
			<button
				onclick={() => redirect("en")}
				classList={{ "font-black": blogIsEnglish() }}
				class="px-2 py-1 text-base"
				type="button"
			>
				EN
			</button>
			<div class="divider divider-horizontal mx-0 my-2" />
			<button
				onclick={() => redirect("vi")}
				classList={{ "font-black": !blogIsEnglish() }}
				class="px-2 py-1 text-base"
				type="button"
			>
				VI
			</button>
		</div>
	);
};
export default BlogLanguageSolid;
