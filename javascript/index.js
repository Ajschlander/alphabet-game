var alphabet = 'abcdefghijklmnopqrstuvwxyz'.split('');

function storeInput() {
  var input = document.getElementById('numberGuess').value;
  if (input.length > 1) {
    alert("please enter a single letter")
  }
  else {
    alert(input);
  }
}

function handleSubmit(str) {
  alert(str);
}
