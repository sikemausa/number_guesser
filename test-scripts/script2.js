var guessButton = document.querySelector('.guessButton');
var userInput = document.querySelector('.userInput');
var response = document.querySelector('.response');
var clearButton = document.querySelector('.clearButton');
var lastGuess = document.querySelector('#lastGuess');
var resetButton = document.querySelector('.resetButton');
var gameDie;
// var setMaxNum = document.querySelector('.setMaxNum');
// var setMinNum = document.querySelector('.setMinNum');
// var min = userInput.min; //
// var max = userInput.max; //
// var randNum = dieMinMax(min, max); //
//
// userInput.addEventListener('click', function() {
// });
//
// setup event handler for updating
// grab the value for min from input
// grab the value for max from input
// update the min var with the input val
// update the max var with the input val
// generate new random number
// userInput.min = min;

function die(num) {                 // Create a random number generator.
  randNum = Math.random();          // Get random 16 digit decimal number.
  dieRange = (randNum * num) + 1;   // Get die range with long fraction.
  roll = Math.floor(dieRange);      // Shave off long fraction.
  return roll;
}

// function dieMinMax(setMinNum, setMaxNum) {
//   randRangeNum = Math.floor(Math.random() * (setMaxNum - setMinNum)) + setMinNum;
//   return randRangeNum;
// }

  function feedBack(userInput) {
      gameDie= die(100);
      guessButton.addEventListener('click', function () {
      lastGuess.innerText = "Your last guess was  " + userInput.value;
      if (userInput.value > gameDie && userInput.value <= 100) { response.innerText = "Sorry, that guess is too high. Try a lower number."; }
      else if (userInput.value < gameDie && userInput.value > 0) { response.innerText = "Sorry, that guess is too low. Try a higher number."; }
      else if (userInput.value <= 0) {response.innerText = "An invalid Number";}
      else if (userInput.value > 100) {response.innerText = "Number is outside the range of possible answers";}
      else if (isNaN(userInput.value)) { response.innerText = "Entry must be a number"; }
      else response.innerText = "Correct"; });
    }
feedBack(userInput);

  function setMin(setMinButton){

  }

  function clear(clearButton){
    clearButton.addEventListener('click', function () {
      userInput.value = '';
      clearButton.disabled = true;
      if (userInput.value === '' && response.innerText === ''){resetButton.disabled = true;}
    });
  }
  clear(clearButton);


resetButton.addEventListener('click', function(){
  location.reload();
});

userInput.addEventListener('keyup', function() {
  if (userInput.value === '') { clearButton.disabled = true; return; }
  clearButton.disabled = false;
});

userInput.addEventListener('keyup', function() {
  if (userInput.value === '') { resetButton.disabled = true; return; }
  resetButton.disabled = false;
});
