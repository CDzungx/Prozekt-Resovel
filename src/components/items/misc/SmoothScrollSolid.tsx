/** @jsxImportSource solid-js */

import Lenis from "@studio-freight/lenis";
import { onMount } from "solid-js";

const SmoothScrollSolid = () => {
	onMount(() => {
		const lenis = new Lenis({
			wheelMultiplier: 1.5,
		});

		function raf(this: Window, time: number) {
			lenis.raf(time);
			requestAnimationFrame(raf.bind(this));
		}
		requestAnimationFrame(raf.bind(window));

		const anchors =
			document.querySelectorAll<HTMLAnchorElement>('a[href^="#"]');
		for (const anchor of anchors) {
			anchor.addEventListener(
				"click",
				function (this: HTMLAnchorElement, e: Event) {
					e.preventDefault();
					lenis.scrollTo(this.getAttribute("href"), { offset: -100 });
				},
			);
		}
	});
};
export default SmoothScrollSolid;
