const { wordGuessed } = require(".js/script.js");

// updaten van de lijst met letters die al zijn geraden door de gebruiker
describe("Test if guessed letter is added to array", () => {
  test("guessed letter is added to array", () => {
    expect(letter("vis", "r")).toBe;
});

// verliezen van de game wanneer er geen pogingen meer over zijn
describe("Test if game is over when there are no tries left", () => {
  test("game over when tries reaches 6", () => {
    let tries;
    let inputs = ["a", "b", "c", "f", "g"];
    let word = ["m", "o", "e", "d", "e", "r"];
    expect(wordGuessed(word, inputs)).toBeFalsy();
    expect(tries).toEqual(6);
  });
});

// winnen van de game
describe("Test if word is guesses correctly", () => {
  test("game won, when word is correct", () => {
    const word = ["t", "e", "t", "s"];
    const letterArray = ["t", "e", "t", "s"];
    expect(checkWinCondition(word, letterArray)).toEqual(true);
  });
  test("Check if win condition comes back as false when word is not completed", () => {
    const word = ["t", "e", "t", "s"];
    const letterArray = ["t", "e", "t"];
    expect(functions.checkWinCondition(word, letterArray)).toEqual(false);
  });
});