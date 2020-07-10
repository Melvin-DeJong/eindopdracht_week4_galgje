const {
  randomWordPicker,
  checkIfInputIncludesWrongLetter,
  checkIfInputIsCorrect,
  checkIfWordIsInput,
  guessIfLetterIsCorrect,
} = require("./script");

// test 1 test of de game start dmv het kiezen van het woord
describe("Choose a word for starting the game", () => {
  test("Check if a word from the wordList returns true", () => {
    expect(randomWordPicker("vis")).toBe(true);
  });
  test("Check if a word not from the wordList will returns false", () => {
    expect(randomWordPicker("fiets")).toBe(false);
  });
});
// test 2 check of een letter voorkomt in het woord
describe("Check if letter exists in the word", () => {
  test("Check if letter do not exist in the word", () => {
    expect(checkIfInputIsCorrect("vis", "l")).toBe(false);
  });
  test("Check if letter do exist in the word", () => {
    expect(checkIfInputIsCorrect("vis", "v")).toBe(true);
  });
});
// test 3 update het aantal pogingen van user
describe("When player guesed a word update tries", () => {
  let tries = 3;
  expect(increaseTries()).toBe(4);
});

// test 4 updaten van de lijst met letters die al zijn geraden door de gebruiker
describe("Test if guessed letter is added to array", () => {
  test("guessed letter is added to array", () => {
    expect(checkIfInputIncludesWrongLetter("vis", "r")).toBe;
  });

  // test 5 verliezen van de game wanneer er geen pogingen meer over zijn
  describe("Test if game is over when there are no tries left", () => {
    test("game over when tries reaches 6", () => {
      let tries;
      let inputs = ["a", "b", "c", "f", "g"];
      let word = ["m", "o", "e", "d", "e", "r"];
      expect(guessIfLetterIsCorrect(word, inputs)).toBeFalsy();
      expect(tries).toEqual(6);
    });
  });

  // test 6winnen van de game
  describe("Test if word is guesses correctly", () => {
    test("game won, when word is correct", () => {
      const word = ["t", "e", "t", "s"];
      const inputs = ["t", "e", "t", "s"];
      expect(checkIfWordIsInput(word, inputs)).toEqual(true);
    });
    test("Check if win condition comes back as false when word is not completed", () => {
      const word = ["t", "e", "t", "s"];
      const inputs = ["t", "e", "t"];
      expect(checkIfWordIsInput(word, inputs)).toEqual(false);
    });
  });
});
