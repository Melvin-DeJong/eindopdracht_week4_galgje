const {
  randomWordPicker,
  checkIfInputIncludesWrongLetter,
  checkIfInputIsCorrect,
  checkIfWordIsInput,
  increaseTries,
  checkWinOrLose,
} = require("./script");

// // test 1 test of de game start dmv het kiezen van het woord
describe("Choose a word for starting the game", () => {
  test("Check if a word from the wordList returns not to be falsy", () => {
    let input = ["vis", "boot", "water"];
    expect(randomWordPicker(input)).not.toBeFalsy();
  });
});

// // test 2 check of een letter voorkomt in het woord
describe("Check if letter exists in the word", () => {
  test("Check if letter do exist in the word", () => {
    let word = ["v", "i", "s"];
    let letter = ["i"];
    let expected = ["i"];
    expect(checkIfInputIsCorrect(word, letter)).toEqual(
      expect.arrayContaining(expected)
    );
  });
});

// // test 3 update het aantal pogingen van user
describe("When player guesed a word update tries", () => {
  let tries = 0;
  test("check is tries is + 1", () => {
    expect(increaseTries()).toBe(1);
  });
});

// // test 4 updaten van de lijst met letters die al zijn geraden door de gebruiker
describe("Test if guessed letter is added to array", () => {
  test("guessed letter is added to array", () => {
    let word = ["v", "i", "s"];
    let letter = ["r"];
    let expected = ["r"];
    expect(checkIfInputIncludesWrongLetter(word, letter)).toEqual(
      expect.arrayContaining(expected)
    );
  });

  // test 5 verliezen van de game wanneer er geen pogingen meer over zijn
  describe("Test if game is over when there are no tries left", () => {
    test("game over when tries reaches 6", () => {
      let tries = 6;
      expect(checkWinOrLose()).toBe(false);
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
