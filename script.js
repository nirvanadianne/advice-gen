// 1 - select the dice button (let dice = ...)
let dice = document.querySelector("button");
let adviceID = document.querySelector("span")
let adviceText = document.querySelector("p")

// 2 - Create a function that generates and updates the DOM
// API endpoint: https://api.adviceslip.com/advice
const generateAdvice = async () => {
  // Use fetch to get the data
    let response = await fetch ('https://api.adviceslip.com/advice',{cache:"no-cache"});
    let data = await response.json()
    let slip = data.slip
    
    console.log(slip)

    adviceID.innerText = `Advice # ${slip.id}`
    adviceText.innerText = `${slip.advice}`

};

window.addEventListener("DOMContentLoaded", generateAdvice);

// 4 - Adding an event listener to the dice button to call the generateAdvice function when clicked
dice.addEventListener("click", generateAdvice);
