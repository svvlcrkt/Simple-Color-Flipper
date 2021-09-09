const colors=["green","red","rgba(153,122,200)","#f15025"];

const btn = document.getElementById('btn');
const color = document.getElementById('color');


btn.addEventListener('click',function(){
   // get random number between 0-3
   const randomNumber = getRandomNumber();
   console.log(randomNumber);
   document.body.style.backgroundColor = colors[randomNumber];
   color.textContent = colors[randomNumber];    
})
// Math.random function return values between 0 and 1. 
// If we multiply by colors.length, then this function return values between 0 and 4.
// And Math.floor function returns the largest integer less than or equal to a given number.
// This situation means that, our function returns an integer between 0 and 4.
function getRandomNumber(){
    return Math.floor(Math.random()*colors.length);
}