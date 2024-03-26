function guessValidator(guess, wordToGuess) {
  if (!guess) return null;

  let comparison = [];

  // check for correct letter and position
  for (let i = 0; i < wordToGuess.length; i++) {
    const status = wordToGuess[i] === guess[i] ? "correct" : "incorrect";
    comparison = [
      ...comparison,
      {
        letter: guess[i],
        status: status,
      },
    ];
  }

  // check for missplaced letter
  for (let i = 0; i < wordToGuess.length; i++) {
    if (comparison[i].status === "incorrect") {
      const letterToCheck = comparison[i].letter;
      if (wordToGuess.indexOf(letterToCheck) !== -1)
        comparison[i].status = "misplaced";
    }
  }

  return comparison;
}

export default guessValidator;
