// Initialize ALL global variables here
let maxAmount = 5;
let word;
let inputs;
let gameOver;
let tries = 0;

// allTheWords = []
const wordList = [
  "vis",
  "toeter",
  "developer",
  "telefoon",
  "moeder",
  "snoer",
  "geeuw",
];

// This code here selects a random word
const randomWordPicker = function (list) {
  let index = Math.floor(Math.random() * list.length);
  const x = list;
  console.log("wat ben ik?", x[index]);
  return x[index];
};

// Check if word and user input are equal
const checkIfWordIsInput = function (word, inputs) {
  let remaining = word.filter(function (letter) {
    return !inputs.includes(letter);
  });
  return remaining.length === 0;
};

// clean input user
const cleanInputValue = function () {
  document.querySelector("input").value = "";
};

// display the win game class
const winTheGame = function () {
  document.querySelector(".win").style.display = "block";
  gameOver = true;
};

// display the lose game class
const loseTheGame = function () {
  document.querySelector(".lose").style.display = "block";
  gameOver = true;
};

// increase tries + 1
const increaseTries = () => {
  return ++tries;
};

// update the tries in display
const updateTriesDisplay = function (tries) {
  increaseTries();
  document.querySelector(".lives span").innerHTML = maxAmount - tries;
};

// checkt wether user wins or loses
const checkWinOrLose = () => {
  if (checkIfWordIsInput(word, inputs)) {
    winTheGame();
  } else if (tries >= 5) {
    loseTheGame();
  }
};

// Check if letter is not in the word and display the wrong letter
const checkIfInputIncludesWrongLetter = function (word, inputs) {
  let wrongLetters = inputs.filter(function (letter) {
    return !word.includes(letter);
  });
  document.querySelector(".guessed_letters").innerHTML = wrongLetters.join(" ");
  // return wrongLetters;
};

// check if letter is in the word and display the correct letter
const checkIfInputIsCorrect = function (word, inputLetterWords) {
  let display = word.map(function (letter) {
    if (inputLetterWords.includes(letter)) {
      return letter;
    } else {
      return "_";
    }
  });
  document.querySelector(".the_word").innerHTML = display.join(" ");

  // return display;
};

// check if input user is correct or not and returns win or lose game
const guessIfLetterIsCorrect = function () {
  if (gameOver) {
    return;
  }
  const inputUser = document.querySelector("input").value;
  cleanInputValue();

  if (inputs.includes(inputUser) || inputUser === "") {
    return;
  }

  if (!word.includes(inputUser)) {
    updateTriesDisplay(tries);
  }

  inputs.push(inputUser);
  checkIfInputIsCorrect(word, inputs);
  checkIfInputIncludesWrongLetter(word, inputs);

  checkWinOrLose();
};

// Set everything to initial value
function SetToInitialValue() {
  gameOver = false;
  document.querySelector(".win").style.display = "none";
  document.querySelector(".lose").style.display = "none";
  cleanInputValue();

  word = randomWordPicker(wordList).split("");
  document.querySelector(".lose p span").innerHTML = `"${word.join("")}"`;
  word;

  tries = 0;
  updateTriesDisplay(tries);

  inputs = [];
  checkIfInputIsCorrect(word, inputs);
  checkIfInputIncludesWrongLetter(word, inputs);
}

document.addEventListener("DOMContentLoaded", function () {
  document
    .querySelector(".guess")
    .addEventListener("click", guessIfLetterIsCorrect);
  document
    .querySelector(".restart")
    .addEventListener("click", SetToInitialValue);
  SetToInitialValue();
});

module.exports = {
  randomWordPicker,
  checkIfInputIncludesWrongLetter,
  checkIfInputIsCorrect,
  checkIfWordIsInput,
  guessIfLetterIsCorrect,
  increaseTries,
  checkWinOrLose,
};
