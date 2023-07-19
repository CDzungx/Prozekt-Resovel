/** @jsxImportSource solid-js */
import { createSignal, onCleanup } from 'solid-js';
import { useStore } from '@nanostores/solid';
import { countdownContent } from '@store/translations/en';

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
            <div class="card shadow-2xl drop-shadow-2xl">
               <div class="card-body">
                  <div class="prose font-extrabold">
                     {countdownValue().countForDate === 30 ? tcd().thongnhat : tcd().quockhanh}
                  </div>
                  <div class="grid auto-cols-max grid-flow-col gap-5 text-center">
                     <div class="flex flex-col">
                        <span class="countdown font-mono text-5xl">
                           {countdownValue().days >= 100 ? (
                              countdownValue().days
                           ) : (
                              <span style={{ '--value': countdownValue().days }}></span>
                           )}
                        </span>
                        {tcd().day}
                     </div>
                     <div class="flex flex-col">
                        <span class="countdown font-mono text-5xl">
                           <span style={{ '--value': countdownValue().hours }}></span>
                        </span>
                        {tcd().hour}
                     </div>
                     <div class="flex flex-col">
                        <span class="countdown font-mono text-5xl">
                           <span style={{ '--value': countdownValue().minutes }}></span>
                        </span>
                        {tcd().min}
                     </div>
                     <div class="flex flex-col">
                        <span class="countdown font-mono text-5xl">
                           <span style={{ '--value': countdownValue().seconds }}></span>
                        </span>
                        {tcd().sec}
                     </div>
                  </div>
               </div>
            </div>
         </div>
      </>
   );
};

export default SolidCountdown;
