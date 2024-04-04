<script>
import "@fontsource-variable/montserrat";
import { onMount } from "svelte";

let isEnglish = true;

onMount(() => {
	isEnglish = !window.location.href.includes("/vi");
});

function changeLanguage(lang) {
	isEnglish = lang === "en";
	if (isEnglish) {
		window.location.href = window.location.href.replace("/vi", "/en");
	} else {
		window.location.href = window.location.href.replace("/en", "/vi");
	}
}
</script>

<div class="mx-1 flex flex-row justify-around rounded-md bg-white p-1 px-2 font-monts dark:bg-zinc-700">
   <button on:click={() => changeLanguage('en')} class="px-2 py-1 text-base {isEnglish && 'font-black'} ">EN</button>
   <div class="divider divider-horizontal mx-0 my-2"></div>
   <button on:click={() => changeLanguage('vi')} class="px-2 py-1 text-base {!isEnglish && 'font-black'}">VI</button>
</div>
