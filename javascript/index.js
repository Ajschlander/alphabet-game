const alphabet = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
const lettersGuessed = [];

let letter = '';
let input = '';
let tries = 10;

function randomLetter() {
  letter = alphabet[Math.floor(Math.random()*alphabet.length)];
  console.log(letter);
}

document.addEventListener("DOMContentLoaded", function(){
  randomLetter();
});

function storeInput() {
  input = document.getElementById('numberGuess').value;
  if (input.length > 1) {
    alert("Please enter a single letter.");
  }
  else if (input.length == 0) {
    alert("Please enter a single letter.");
  }
  else{
    lettersGuessed.push(input);
    var lettersGuessedAsString = lettersGuessed.join(', ');
    document.getElementById('guesses').innerHTML = "Letters you have guessed: " + lettersGuessedAsString;
  }
}

function checkAnswer() {
  if (letter == input) {
    document.getElementById('result').innerHTML = "Winner!";
    location.reload(true);
  }
  else {
    document.getElementById('result').innerHTML = "You guessed wrong! Guess again.";
    if (tries > 0) {
      tries -= 1;
      document.getElementById('attempts').innerHTML = "You have " + tries + " tries left.";
    }
    else if (tries === 0) {
      document.getElementById('attempts').innerHTML = "YOU HAVE LOST";
      document.getElementById('inputGroup-sizing-lg').innerHTML = "Click here to try again";
      location.reload(true);
    }
  }
}
