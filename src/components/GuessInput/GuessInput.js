import React from "react";
import styles from "./GuessInput.module.scss";

function GuessInput({ addGuess, gameStatus, wordLength }) {
  const [currGuess, setCurrGuess] = React.useState("");

  function handleSubmitGuess(event) {
    event.preventDefault();
    addGuess(currGuess);
    setCurrGuess("");
  }

  return (
    <form className={styles.guessInputWrapper} onSubmit={handleSubmitGuess}>
      <label htmlFor="guess-input">Enter guess:</label>
      <input
        required
        id="guess-input"
        type="text"
        minLength={wordLength}
        maxLength={wordLength}
        pattern={`[a-zA-Z]{${wordLength}}`}
        title={`Please enter exactly ${wordLength} letters.`}
        disabled={gameStatus !== "running"}
        value={currGuess}
        onChange={(event) => setCurrGuess(event.target.value.toUpperCase())}
      ></input>
      <button
        className={`${gameStatus !== "running" && "hidden"} ${
          styles.submitGuessBtn
        }`}
      >
        Guess
      </button>
    </form>
  );
}

export default GuessInput;
