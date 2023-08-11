/** @jsxImportSource solid-js */
import { createSignal, onCleanup } from 'solid-js';
import { useStore } from '@nanostores/solid';
import { countdownContent } from '@store/translations/en';
import vnflag from '@assets/img/Co-Vietnam.webp';

var now = new Date();
const ngayQuocKhanh = new Date(now.getFullYear(), 9 - 1, 2); // September 2nd (Ngay Quoc Khanh)
const ngayThongNhat = new Date(now.getFullYear(), 4 - 1, 30); // April 30th (Ngay Thong Nhat)

function getCountdownValue() {
   const currentDate = Date.now();

   let targetDate = ngayThongNhat;
   if (currentDate >= targetDate) {
      targetDate = ngayQuocKhanh;
   }
   if (currentDate >= targetDate) {
      targetDate = ngayThongNhat;
      targetDate = new Date(targetDate.getFullYear() + 1, 4 - 1, 30);
   }

   const distance = targetDate - currentDate;
   const days = Math.floor(distance / (1000 * 60 * 60 * 24));
   const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
   const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
   const seconds = Math.floor((distance % (1000 * 60)) / 1000);
   const countForDate = targetDate.getDate();
   return {
      seconds,
      minutes,
      hours,
      days,
      countForDate,
   };
}

const SolidCountdown = () => {
   const [countdownValue, setCountdownValue] = createSignal(getCountdownValue());
   const tcd = useStore(countdownContent);
   onCleanup(() => {
      clearInterval(interval);
   });

   const interval = setInterval(() => {
      setCountdownValue(getCountdownValue());
   }, 1000);

   return (
      <>
         <div class="flex h-screen items-center justify-center">
            <div class="card mx-10 shadow-2xl drop-shadow-2xl lg:mx-0">
               <div class="grid grid-flow-row lg:grid-flow-col-dense">
                  <figure class="max-w-xs auto-cols-min md:mx-0">
                     <img
                        class="rounded-t-2xl object-cover lg:aspect-square lg:rounded-l-2xl lg:rounded-tr-none"
                        src={vnflag.src}
                        alt="Viet Nam"
                     />
                  </figure>

                  <div class="m-3 items-center self-center text-center lg:mx-10">
                     <div class="prose mb-2 font-extrabold sm:prose-lg md:prose-2xl">
                        {countdownValue().countForDate === 30 ? tcd().thongnhat : tcd().quockhanh}
                     </div>
                     <div class="grid auto-cols-min grid-flow-col justify-center gap-5 self-center text-center duration-0">
                        <div class="flex flex-col">
                           <span class="countdown justify-center font-mono text-4xl md:text-5xl">
                              {countdownValue().days >= 100 ? (
                                 countdownValue().days
                              ) : (
                                 <span style={{ '--value': countdownValue().days }}></span>
                              )}
                           </span>
                           {tcd().day}
                        </div>
                        <div class="flex flex-col">
                           <span class="countdown justify-center font-mono text-4xl md:text-5xl">
                              <span style={{ '--value': countdownValue().hours }}></span>
                           </span>
                           {tcd().hour}
                        </div>
                        <div class="flex flex-col">
                           <span class="countdown justify-center font-mono text-4xl md:text-5xl">
                              <span style={{ '--value': countdownValue().minutes }}></span>
                           </span>
                           {tcd().min}
                        </div>
                        <div class="flex flex-col">
                           <span class="countdown justify-center font-mono text-4xl md:text-5xl">
                              <span style={{ '--value': countdownValue().seconds }}></span>
                           </span>
                           {tcd().sec}
                        </div>
                     </div>
                  </div>
               </div>
            </div>
         </div>
      </>
   );
};

export default SolidCountdown;
