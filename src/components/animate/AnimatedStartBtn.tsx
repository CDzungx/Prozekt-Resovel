import { motion } from "framer-motion"
import { $hasClickedStartButton } from "../NavFoot/DebugStore";

function redirect() {
    window.location.href = "#";
    localStorage.setItem("hasClickedStartButton", "true");
    $hasClickedStartButton.set("true");
  }

export default function AnimatedStartBtn(){
    return (
      <>
        <div id="landingButton" className="invisible mt-6 flex items-center justify-center">
          <motion.div whileHover={{ scale: 1.2 }} whileTap={{ scale: 0.9 }} onTap={redirect} transition={{ type: "spring", stiffness: 400, damping: 17 }}>
            <a
              rel="prefetch"
              hx-post="/vietnam"
              hx-swap="outerHTML"
              className="hover rounded-box inline-flex cursor-pointer items-center gap-2 border-2 border-[#171515] bg-base-200 fill-black px-5 py-3 text-gray-950 invert transition-colors hover:bg-transparent hover:fill-white hover:text-white focus:outline-none focus:ring active:opacity-75 dark:fill-white dark:text-gray-50 dark:hover:fill-black dark:hover:text-black">
              <span className="select-none text-4xl font-bold lg:text-5xl">Get Started</span>
              <div className="box-border h-16 w-16 place-content-center p-2">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256">
                  <path d="m224.49 136.49l-72 72a12 12 0 0 1-17-17L187 140H40a12 12 0 0 1 0-24h147l-51.49-51.52a12 12 0 0 1 17-17l72 72a12 12 0 0 1-.02 17.01Z" />
                </svg>
              </div>
            </a>
          </motion.div>
        </div>
      </>
    );
  };