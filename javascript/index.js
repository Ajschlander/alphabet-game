const alphabet = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];

let letter = '';
let input = '';

function randomLetter() {
  letter = alphabet[Math.floor(Math.random()*alphabet.length)];
  console.log(letter);
}

function storeInput() {
  input = document.getElementById('numberGuess').value;
  if (input.length > 1) {
    alert("Please enter a single letter.");
  }
  else if (input.length == 0) {
    alert("Please enter a single letter.");
  }
}

function checkAnswer() {
  if (letter == input) {
    document.getElementById('result').innerHTML = "Winner!";
  }
  else {
    document.getElementById('result').innerHTML = "You lost. Guess again";
  }
}
