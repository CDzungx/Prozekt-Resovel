/** @jsxImportSource react */

import { motion } from 'framer-motion';
import { hasClickedStartButton } from '@store/DataStore';
import { Client, HydrationProvider } from 'react-hydration-provider';
import { NavFootContent } from '@store/translations/en';
import { useStore } from '@nanostores/react';

function redirect() {
   fetch('/vietnam').then(() => {
      setTimeout(function () {
         window.location.href = '/vietnam';
      });
   });
   localStorage?.setItem('hasClickedStartButton', 'true');
   hasClickedStartButton.set('true');
}

const AnimatedStartBtn = () => {
   const tasb = useStore(NavFootContent);
   return (
      <>
         <HydrationProvider>
            <Client>
               <div
                  id="landingButton"
                  className="mt-6 flex h-[70px] items-center justify-center font-paytone transition-all duration-500 ">
                  <motion.div
                     whileHover={{ scale: 1.3 }}
                     whileTap={{ scale: 0.9 }}
                     onTap={redirect}
                     transition={{ type: 'spring', stiffness: 400, damping: 17 }}
                     className="group inline-flex cursor-pointer items-center rounded-3xl border-2 border-[#000000] bg-base-200 fill-black px-7 py-5 text-gray-950 opacity-90 invert transition-colors hover:gap-3 hover:border-[#ffffff] hover:bg-transparent hover:fill-white hover:px-6 hover:py-4 hover:text-white focus:outline-none focus:ring dark:fill-white dark:text-gray-50 dark:opacity-90 dark:hover:fill-black dark:hover:text-black">
                     <span className="select-none text-4xl font-thin lg:text-5xl">{tasb.start}</span>
                     <div className="hidden flex-auto scale-0 opacity-0 transition-transform duration-[400ms] ease-in-out group-hover:h-14 group-hover:w-14 group-hover:scale-100 group-hover:opacity-100 md:flex">
                        <svg
                           xmlns="http://www.w3.org/2000/svg"
                           className="h-0 w-0 group-hover:ml-2 group-hover:h-full group-hover:w-full"
                           viewBox="0 0 256 256">
                           <path d="m224.49 136.49l-72 72a12 12 0 0 1-17-17L187 140H40a12 12 0 0 1 0-24h147l-51.49-51.52a12 12 0 0 1 17-17l72 72a12 12 0 0 1-.02 17.01Z" />
                        </svg>
                     </div>
                  </motion.div>
               </div>
            </Client>
         </HydrationProvider>
      </>
   );
};
export default AnimatedStartBtn;
