var guessButton = document.querySelector('.guessButton');
var userInput = document.querySelector('.userInput');
var response = document.querySelector('.response');
var clearButton = document.querySelector('.clearButton');
debugger;
var lastGuess = document.querySelector('#lastGuess');
var resetButton = document.querySelector('.resetButton');
var gameDie;

function die(num) {                 // Create a random number generator.
  randNum = Math.random();          // Get random 16 digit decimal number.
  dieRange = (randNum * num) + 1;   // Get die range with long fraction.
  roll = Math.floor(dieRange);      // Shave off long fraction.
  return roll;
}

  function feedBack(userInput) {
      gameDie= die(100);
      guessButton.addEventListener('click', function () {
      // if (userInput.value === 0){clearButton.disabled = true;}
      lastGuess.innerText = "Your last guess was " + userInput.value;
      if (userInput.value > gameDie && userInput.value <= 100) { response.innerText = "Sorry, that guess is too high. Try a lower number."; }
      else if (userInput.value < gameDie && userInput.value > 0) { response.innerText = "Sorry, that guess is too low. Try a higher number."; }
      else if (userInput.value <= 0) {response.innerText = "Invalid Number";}
      else if (userInput.value > 100) {response.innerText = "Number is outside the range of possible answers";}
      else response.innerText = "Correct"; });
    }

feedBack(userInput);

  function setMin(setMinButton){

  }

  function clear(clearButton){
    clearButton.addEventListener('click', function () {
      userInput.value = '';
    });
  }
  clear(clearButton);


resetButton.addEventListener('click', function(){ // Need to reset the random number
  userInput.value = '';
  response.innerText ='';
  lastGuess.innerText='';
  console.log(gameDie);
  gameDie = die(100);
  return gameDie;
});




console.log(gameDie);
