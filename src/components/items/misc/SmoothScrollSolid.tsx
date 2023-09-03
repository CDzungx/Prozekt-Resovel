/** @jsxImportSource solid-js */

import Lenis from '@studio-freight/lenis';
import { onMount } from 'solid-js';

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

      document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
         anchor.addEventListener('click', function (this: HTMLAnchorElement, e) {
            e.preventDefault();
            lenis.scrollTo(this.getAttribute('href'), { offset: -100 });
         });
      });
   });
};
export default SmoothScrollSolid;
