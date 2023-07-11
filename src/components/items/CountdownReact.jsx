import { useState, useEffect } from 'react';
const Countdown = () => {
   // Disable error logging due to second deviation

   const now = new Date();
   const ngayQuocKhanh = new Date(now.getFullYear(), 9 - 1, 2); // September 2nd (Ngay Quoc Khanh)
   const ngayThongNhat = new Date(now.getFullYear(), 4 - 1, 30); // April 30th (Ngay Thong Nhat)

   const [countdownValue, setCountdownValue] = useState(getCountdownValue());

   useEffect(() => {
      const interval = setInterval(() => {
         setCountdownValue(getCountdownValue());
      }, 1000);
      return () => clearInterval(interval);
   }, []);

   function getCountdownValue() {
      const currentDate = new Date();

      let targetDate = currentDate >= ngayQuocKhanh && currentDate < ngayThongNhat ? ngayQuocKhanh : ngayThongNhat;

      if (currentDate > targetDate) {
         targetDate = new Date(targetDate.getFullYear() + 1, targetDate.getMonth(), targetDate.getDate());
      }

      const distance = targetDate - currentDate;

      const days = Math.floor(distance / (1000 * 60 * 60 * 24));
      const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((distance % (1000 * 60)) / 1000);

      return {
         seconds,
         minutes,
         hours,
         days,
      };
   }

   return (
      <>
         <div className="flex h-screen items-center justify-center">
            <div className="grid auto-cols-max grid-flow-col gap-5 text-center">
               <div className="flex flex-col">
                  <span className="countdown font-mono text-5xl">
                     {countdownValue.days >= 100 ? (
                        countdownValue.days
                     ) : (
                        <span style={{ '--value': countdownValue.days }}></span>
                     )}
                  </span>
                  days
               </div>
               <div className="flex flex-col">
                  <span className="countdown font-mono text-5xl">
                     <span style={{ '--value': countdownValue.hours }}></span>
                  </span>
                  hours
               </div>
               <div className="flex flex-col">
                  <span className="countdown font-mono text-5xl">
                     <span style={{ '--value': countdownValue.minutes }}></span>
                  </span>
                  min
               </div>
               <div className="flex flex-col">
                  <span className="countdown font-mono text-5xl">
                     <span style={{ '--value': countdownValue.seconds }}></span>
                  </span>
                  sec
               </div>
            </div>
         </div>
      </>
   );
};

export default Countdown;
