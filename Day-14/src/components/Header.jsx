import React, {useEffect,useRef, useState} from 'react'

const Header = () => {
    const [timerDays, setTimerDays] = useState('00')
    const [timerHours, setTimerHours] = useState('00')
    const [timerMinutes, setTimerMinutes] = useState('00')
    const [timerSeconds, setTimerSeconds] = useState('00')
    
    let interval = useRef();

    const startTimer = () =>{
        const contdownDate = new Date ('January 10, 2025 00:00:00').getTime();

        interval = setInterval (() => {
            const now = new Date().getTime();
            const distance = contdownDate - now;

            const days = Math.floor (distance / (1000 *60*60*24));
            const hours = Math.floor ((distance % (1000 *60*60*24)/ (1000*60*60)));
            const minutes = Math.floor ((distance % (1000*60*60) / (1000*60)));
            const seconds = Math.floor ((distance % (1000 *60)) /1000);

            if (distance < 0){
                clearInterval(interval.current)
            } else {
                setTimerDays(days);
                setTimerHours(hours);
                setTimerMinutes(minutes)
                setTimerSeconds(seconds)
            }
        }, 1000)
    }

    useEffect (() => {
        startTimer();
        return () =>{
            clearInterval(interval.current)
        }
    })
  return (
<div>
  
  <section
    className="relative bg-[url(https://wallpapercave.com/wp/wp5207803.jpg)] bg-cover bg-center bg-no-repeat h-full"
  >
    <div
      className="absolute inset-0 bg-white/15 sm:bg-transparent sm:from-white/85 sm:to-white/95 ltr:sm:bg-gradient-to-r rtl:sm:bg-gradient-to-l"
    ></div>
  
    <div
      className="relative mx-auto max-w-screen-xl px-4 py-32 sm:px-6 lg:flex lg:h-screen lg:items-center lg:px-8"
    >
      <div className="max-w-xl text-center ltr:sm:text-left rtl:sm:text-right flex flex-col items-center justify-center lg:justify-start">
        <h1 className="text-3xl font-extrabold sm:text-5xl text-white">
          The Empire Will
  
          <strong className="block font-extrabold text-rose-700"> STRIKE BACK. </strong>
        </h1>
  
        <p className="mt-4 max-w-lg sm:text-xl/relaxed text-white">
        “THIS WILL BE A DAY LONG REMEMBERED. IT HAS SEEN THE END OF KENOBI. IT WILL SOON SEE THE END OF THE REBELLION.”
        </p>

        <div class="mt-12 flex flex-col items-center ml-2">
                        <p class="text-gray-300 uppercase text-sm">Time left until Star base completion</p>
                        <div class="flex items-center justify-center space-x-4 mt-4" >
                            <div class="flex flex-col items-center px-4">
                                <span class="text-4xl lg:text-5xl text-gray-200">{timerDays}</span>
                                <span class="text-gray-400 mt-2">Days</span>
                            </div>
                            <span class="w-[1px] h-24 bg-gray-400"></span>
                            <div class="flex flex-col items-center px-4">
                                <span class="text-4xl lg:text-5xl text-gray-200">{timerHours}</span>
                                <span class="text-gray-400 mt-2">Hours</span>
                            </div>
                            <span class="w-[1px] h-24 bg-gray-400"></span>
                            <div class="flex flex-col items-center px-4">
                                <span class="text-4xl lg:text-5xl text-gray-200">{timerMinutes}</span>
                                <span class="text-gray-400 mt-2">Minutes</span>
                            </div>
                            <span class="w-[1px] h-24 bg-gray-400"></span>
                            <div class="flex flex-col items-center px-4">
                                <span class="text-4xl lg:text-5xl text-gray-200">{timerSeconds}</span>
                                <span class="text-gray-400 mt-2">Seconds</span>
                            </div>
                        </div>                      
            </div>
  
        <div className="mt-8 flex flex-wrap gap-4 text-center">
          <a
            href="#"
            className="block w-full rounded bg-rose-600 px-12 py-3 text-sm font-medium text-white shadow hover:bg-rose-700 focus:outline-none focus:ring active:bg-rose-500 sm:w-auto"
          >
            View Kenobi's Grave
          </a>
  
          <a
            href="#"
            className="block w-full rounded bg-white px-12 py-3 text-sm font-medium text-rose-600 shadow hover:text-rose-700 focus:outline-none focus:ring active:text-rose-500 sm:w-auto"
          >
            Join the Empire
          </a>
        </div>
      </div>
    </div>
  </section>
 </div>
  
  )
}

export default Header