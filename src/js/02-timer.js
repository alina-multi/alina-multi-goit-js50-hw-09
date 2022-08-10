import flatpickr from "flatpickr";
import "flatpickr/dist/flatpickr.min.css";
import { Notify } from 'notiflix/build/notiflix-notify-aio';;

const datetimePicker = document.querySelector("input#datetime-picker");
const btnStart = document.querySelector("button[data-start]");
const days = document.querySelector(".value[data-days]");
const hours = document.querySelector(".value[data-hours]");
const minutes = document.querySelector(".value[data-minutes]");
const seconds = document.querySelector(".value[data-seconds]");

let timerID = null
btnStart.disabled = true;

const options = {
  enableTime: true,
  time_24hr: true,
  defaultDate: new Date(),
  minuteIncrement: 1,
    onClose(selectedDates) {
   
        if (selectedDates[0].getTime() < Date.now()) {
           
            Notify.failure('Please choose a date in the future');
            btnStart.disabled = true;
        }
        else { 
            btnStart.disabled = false;
        }
        
        btnStart.addEventListener("click", () => {
            if (timerID) { 
                clearInterval(timerID);
               }

           timerID =  setInterval(() => {
                let delta = selectedDates[0].getTime() - Date.now();
                const convert = convertMs(delta);

                 if (delta < 0) { 
                     return;
                 }
                
               days.textContent = convert.days < 10 ? `0${convert.days}` : convert.days
               hours.textContent = convert.hours < 10 ? `0${convert.hours}` : convert.hours
               minutes.textContent = convert.minutes < 10 ? `0${convert.minutes}` : convert.minutes
               seconds.textContent = convert.seconds < 10 ?`0${convert.seconds }` : convert.seconds

                
    }, 1000);
        })   
  
             
    },
    
};


flatpickr(datetimePicker, options); 

function convertMs(ms) {
  // Number of milliseconds per unit of time
  const second = 1000;
  const minute = second * 60;
  const hour = minute * 60;
  const day = hour * 24;

  // Remaining days
  const days = Math.floor(ms / day);
  // Remaining hours
  const hours = Math.floor((ms % day) / hour);
  // Remaining minutes
  const minutes = Math.floor(((ms % day) % hour) / minute);
  // Remaining seconds
  const seconds = Math.floor((((ms % day) % hour) % minute) / second);

  return { days, hours, minutes, seconds };
}

// console.log(convertMs(2000)); // {days: 0, hours: 0, minutes: 0, seconds: 2}
// console.log(convertMs(140000)); // {days: 0, hours: 0, minutes: 2, seconds: 20}
// console.log(convertMs(24140000)); 
