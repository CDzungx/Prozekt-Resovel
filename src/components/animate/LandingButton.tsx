import { Component, createSignal } from "solid-js";
import { Motion } from "@motionone/solid";

const LandingButton: Component = () => {
  let isThemeChange = true;
  return (
    <div id="landingButton" class="invisible mt-6 flex items-center justify-center ">
      <Motion hover={{ scale: 1.1 }} press={{ scale: 0.8 }}>
        <a
          hx-post="/vietnam"
          hx-swap="outerHTML"
          class="hover rounded-box inline-flex items-center gap-2 border-2 border-[#171515] bg-base-200 fill-black px-5 py-3 text-gray-950 invert transition-colors hover:bg-transparent hover:fill-white hover:text-white focus:outline-none focus:ring active:opacity-75 dark:fill-white dark:text-gray-50 dark:hover:fill-black dark:hover:text-black">
          <span class="text-4xl font-bold lg:text-5xl">Get Started</span>
          <div class="box-border h-16 w-16 place-content-center p-2">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256">
              <path d="m224.49 136.49l-72 72a12 12 0 0 1-17-17L187 140H40a12 12 0 0 1 0-24h147l-51.49-51.52a12 12 0 0 1 17-17l72 72a12 12 0 0 1-.02 17.01Z" />
            </svg>
          </div>
        </a>
      </Motion>
    </div>
  );
};
export default LandingButton;
