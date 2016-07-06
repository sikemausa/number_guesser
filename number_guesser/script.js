var guessButton = document.querySelector('.guessButton');

var userGuess = document.querySelector('.userInput');
var response = document.querySelector('.response');

var gameDie = die(100);

function die(num) {                 // Create a random number generator.
  randNum = Math.random();          // Get random 16 digit decimal number.
  dieRange = (randNum * num) + 1;   // Get die range with long fraction.
  roll = Math.floor(dieRange);      // Shave off long fraction.
  return roll;
}

function feedBack(userInput) {
  if (userInput.value > gameDie) { return "Too High!"; }
  if (userInput.value < gameDie) { return "Too Low!"; }
  return "Correct!";
  }


guessButton.addEventListener('click', function () {
  response.innerText = "Too High"; });

feedBack(userGuess);

console.log(gameDie);
