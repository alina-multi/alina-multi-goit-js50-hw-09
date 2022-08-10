import { Notify } from 'notiflix/build/notiflix-notify-aio';


const form = document.querySelector(".form")
const inputFirstDelay = document.querySelector("input[name=delay]")
const inputStep = document.querySelector("input[name=step]")
const inputAmount = document.querySelector("input[name=amount]")
const btn = document.querySelector("button")
let position = 0;

btn.addEventListener("click", onSubmit)

function onSubmit(e) { 
  e.preventDefault();
  const firstDelay = inputFirstDelay.value
  const delay = inputStep.value
  const amount = inputAmount.value
 
  const timeoutID = setTimeout(() => {

    position += 1;
    
     createPromise(position, delay)
  .then(({ position, delay }) => {
    Notify.success(`✅ Fulfilled promise ${position} in ${delay}ms`)})
       .catch(({ position, delay }) => {
    Notify.failure(`❌ Rejected promise ${position} in ${delay}ms`)
   
  });

    const indervalID = setInterval(() => {
     
      position += 1;
     
      createPromise(position, delay)
  .then(({ position, delay }) => {
    Notify.success(`✅ Fulfilled promise ${position} in ${delay}ms`);
  })
  .catch(({ position, delay }) => {
    Notify.failure(`❌ Rejected promise ${position} in ${delay}ms`)
  });
      
       if (position === Number(amount)) {
         clearInterval(indervalID);
         clearTimeout(timeoutID);
         position = 0;
 }

    }, delay)
   
  }, firstDelay)

}

function createPromise(position, delay) {
  
  const shouldResolve = Math.random() > 0.3;

  return new Promise((resolve, reject) => {

    if (shouldResolve) {
      resolve({ position, delay })
    } else {
      reject({ position, delay })
    }
    
  });
    
};
  

