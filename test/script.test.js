const functions = require(".js/script.js");

// test 1 test of de game start dmv het kiezen van het woord
describe("Choose a word for starting the game", () => {
  test("Check if a word from the wordList returns true", () => {
    expect(wordpicker("vis")).toBe(true);
  });
  test("Check if a word not from the wordList will returns false", () => {
    expect(wordpicker("fiets")).toBe(false);
  });
});

// test 2 check of een letter voorkomt in het woord
describe("Check if letter exists in the word", () => {
  test("Check if letter do not exist in the word", () => {
    expect(theWord("vis", "l")).toBe(false);
  });
  test("Check if letter do exist in the word", () => {
    expect(theWord("vis", "v")).toBe(true);
  });
});

// test 3 update het aantal pogingen van user
describe("When player guesed a word update tries", () => {
  let tries = 3;
  expect(increaseTries()).toBe(4);
});
