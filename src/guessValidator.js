function guessValidator(guess, wordToGuess) {
  // This constant is a placeholder that indicates we've successfully
  // dealt with this character (it's correct, or misplaced).
  const letterExistsChar = "✓";

  if (!guess) {
    return null;
  }

  const guessChars = guess.toUpperCase().split("");
  const wordToGuessChars = wordToGuess.split("");

  const result = [];

  // Step 1: Look for correct letters.
  for (let i = 0; i < guessChars.length; i++) {
    if (guessChars[i] === wordToGuessChars[i]) {
      result[i] = {
        letter: guessChars[i],
        status: "correct",
      };
      wordToGuessChars[i] = letterExistsChar;
      guessChars[i] = letterExistsChar;
    }
  }

  // Step 2: look for misplaced letters. If it's not misplaced,
  // it must be incorrect.
  for (let i = 0; i < guessChars.length; i++) {
    if (guessChars[i] === letterExistsChar) {
      continue;
    }

    let status = "incorrect";
    const misplacedIndex = wordToGuessChars.findIndex(
      (char) => char === guessChars[i]
    );
    if (misplacedIndex >= 0) {
      status = "misplaced";
      wordToGuessChars[misplacedIndex] = letterExistsChar;
    }

    result[i] = {
      letter: guessChars[i],
      status,
    };
  }

  return result;
}

export default guessValidator;
