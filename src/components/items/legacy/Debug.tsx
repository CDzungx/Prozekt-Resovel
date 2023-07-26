import { useEffect } from 'react';
import { useStore } from '@nanostores/react';
import { dataTheme, hasClickedStartButton } from '@store/DataStore';
import { locale } from '@store/i18n';
import { Client, HydrationProvider } from 'react-hydration-provider';

const Debug = () => {
   let hasClickedStartBtn = useStore(hasClickedStartButton);
   let dtTheme = useStore(dataTheme);
   let languageStore = useStore(locale);
   useEffect(() => {
      if (localStorage.getItem('hasClickedStartButton') === 'true') {
         hasClickedStartButton.set('true');
      }
   }, []);
   return (
      <>
         <HydrationProvider>
            <dialog id="debugModal" className="modal">
               <form method="dialog" className="modal-box">
                  <p className="self-center pb-5 text-4xl font-extrabold">Debug Info</p>
                  <div>
                     <Client>
                        <div className="prose">
                           <span className="text-lg font-bold">Data-Theme: </span> {dtTheme}
                        </div>
                        <div className="prose">
                           <span className="text-lg font-bold">Has Start Button Clicked: </span> {hasClickedStartBtn}
                        </div>
                        <div className="prose">
                           <span className="text-lg font-bold">Language: </span>
                           {languageStore === 'vi' ? <span>Tiếng Việt</span> : <span>English</span>}
                        </div>
                     </Client>
                  </div>
                  <div className="modal-action">
                     <button className="btn">Close</button>
                  </div>
               </form>
            </dialog>
         </HydrationProvider>
      </>
   );
};

export default Debug;
