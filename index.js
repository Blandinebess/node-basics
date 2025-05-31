console.log("Welcome to Node.js!");
console.log("The current date and time is:", new Date());
// index.js - A basic Node.js script

console.log("Welcome to Node.js!");
console.log("The current date and time is:", new Date());

// Additional functionality: Demonstrating basic calculations
console.log("2 + 2 =", 2 + 2);
console.log("Random number between 1 and 10:", Math.floor(Math.random() * 10) + 1);
function countdown(seconds) {
    let counter = seconds;
    const interval = setInterval(() => {
      console.log(counter);
      counter--;
      if (counter < 0) {
        clearInterval(interval);
        console.log("Time's up!");
      }
    }, 1000);
  }
  
  countdown(5); // Start a 5-second countdown