const body = document.querySelector ("body")
const btnStart = document.querySelector("[data-start]")
const btnStop = document.querySelector("[data-stop]")

const PROMPT_DELAY = 700;
let interval_ID = null;


btnStart.addEventListener("click", onBtnStartClick)
btnStop.addEventListener("click", onBtnStopClick)

function onBtnStartClick(e) {
   
    interval_ID = setInterval(colorSwitcher, PROMPT_DELAY)
    btnStart.disabled = "true"
}

function onBtnStopClick(e) {

    btnStart.removeAttribute("disabled")
    clearInterval(interval_ID);
    const bodyCurrentColor = body.getAttribute("style")
    const colorContent = document.createElement("p")
    colorContent.textContent = `You caught the color > ${bodyCurrentColor}`
    console.log(colorContent)
    btnStart.before(colorContent)

}

function colorSwitcher() { 

    body.style.background = getColor()
    
}
 
const getColor  = function getRandomHexColor() {
 return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

