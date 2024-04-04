<script>
import { onMount } from "svelte";
import Typed from "typed.js";
onMount(() => {
	const startButton = document.querySelector("#gtBtn");
	const title = document.querySelector("#mainTitle");
	function Typing() {
		const typed = new Typed("#startTyped", {
			stringsElement: "#typed-strings",
			typeSpeed: 30,
			showCursor: false,
			onBegin: (self) => {
				title.classList.remove("invisible");
			},
			onComplete: (self) => {
				startButton.classList.remove("invisible");
				startButton.classList.add("animate__animated", "animate__backInLeft");
			},
		});
	}
	setTimeout(() => {
		Typing();
	}, 300);
});
</script>

<div
   id="mainTitle"
   class="invisible font-lobster text-6xl font-extrabold transition-all duration-200 md:text-7xl lg:text-8xl">
   <div id="typed-strings">
      <p class="font-lobster md:flex lg:flex">
         Projezk Vietnam
         <span class="hidden md:flex">&nbsp;</span>
         <span class="group m-auto">
            <span class="grid cursor-default group-hover:hidden">⭐</span>
            <span class="hidden cursor-default group-hover:grid">🌟</span>
         </span>
      </p>
   </div>
   <span id="startTyped" class="inline-flex md:flex lg:flex"></span>
</div>
