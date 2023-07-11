import { useEffect, useState } from 'react';
import { useStore } from '@nanostores/react';
import { $dataTheme, $hasClickedStartButton } from '@components/DebugStore';

const Debug = () => {
   const [hydrated, setHydrated] = useState(false);

   const hasClickedStartButton = useStore($hasClickedStartButton);
   const dataTheme = useStore($dataTheme);
   useEffect(() => {
      if (localStorage.getItem('hasClickedStartButton') === 'true') {
         $hasClickedStartButton.set('true');
      }
      setHydrated(true);
   }, []);
   if (!hydrated) {
      return null;
   }
   return (
      <>
         <dialog id="debugModal" className="modal">
            <form method="dialog" className="modal-box">
               <p className="self-center pb-5 text-4xl font-extrabold">Debug Info</p>
               <div>
                  <div className="prose">
                     <span className="text-lg font-bold">Data-Theme:</span> {dataTheme}
                  </div>
                  <div className="prose">
                     <span className="text-lg font-bold">Has Start Button Clicked:</span> {hasClickedStartButton}
                  </div>
               </div>
               <div className="modal-action">
                  <button className="btn">Close</button>
               </div>
            </form>
         </dialog>
      </>
   );
};

export default Debug;
