import React from "react";
import styles from "./Game.module.scss";
import GuessResults from "../GuessResults/GuessResults";
import GuessInput from "../GuessInput/GuessInput";
import Keyboard from "../Keyboard/Keyboard";
import WinBanner from "../Banner/WinBanner/WinBanner";
import LossBanner from "../Banner/LossBanner/LossBanner";
import DifficultySlider from "../Slider/Slider";
import { randomSelector } from "../../utilities";
import { WORDS } from "../../guesswords";
import guessValidator from "../../guessValidator";

function Game() {
  const [wordLength, setWordLength] = React.useState(5);
  const [wordToGuess, setWordToGuess] = React.useState(() =>
    randomSelector(WORDS[wordLength - 4])
  );
  console.log({ wordToGuess });
  const [guesses, setGuesses] = React.useState([]);
  const [gameStatus, setGameStatus] = React.useState("running");
  const [numAllowedGuesses, setNumAllowedGuesses] = React.useState(6);

  const validatedGuesses = guesses.map((guess) =>
    guessValidator(guess, wordToGuess)
  );
  console.log("validatedGuesses: ", validatedGuesses);

  function checkGameEnd(nextGuesses) {
    nextGuesses.at(-1) === wordToGuess && setGameStatus("win");
    nextGuesses.length >= numAllowedGuesses && setGameStatus("loss");
  }

  function addGuess(currGuess) {
    // Because setter functions in react are async, we create new array
    // so the the length comparison in checkGameEnd is not off by 1
    const nextGuesses = [...guesses, currGuess];
    setGuesses(nextGuesses);
    checkGameEnd(nextGuesses);
  }

  function handleRestartGame() {
    const newWordToGuess = randomSelector(WORDS[wordLength - 4]);
    setWordToGuess(newWordToGuess);
    setGuesses([]);
    setGameStatus("running");
  }

  function setGuessCount(value) {
    setNumAllowedGuesses(value);
    handleRestartGame();
  }

  function setWordCount(value) {
    setWordLength(value);
    handleRestartGame();
  }

  return (
    <div className={styles.gameWrapper}>
      {wordToGuess}
      <DifficultySlider
        settings={{ min: 3, max: 9 }}
        value={numAllowedGuesses}
        action={setGuessCount}
        text={"Guesses allowed:"}
      />
      <DifficultySlider
        settings={{ min: 4, max: 8 }}
        value={wordLength}
        action={setWordCount}
        text={"Word length:"}
      />
      <GuessResults
        validatedGuesses={validatedGuesses}
        numAllowedGuesses={numAllowedGuesses}
        wordLength={wordLength}
      />
      <GuessInput
        addGuess={addGuess}
        gameStatus={gameStatus}
        wordLength={wordLength}
      />
      <Keyboard validatedGuesses={validatedGuesses} />
      {gameStatus === "win" && (
        <WinBanner
          numOfGuesses={guesses.length}
          handleRestartGame={handleRestartGame}
        />
      )}
      {gameStatus === "loss" && (
        <LossBanner
          wordToGuess={wordToGuess}
          handleRestartGame={handleRestartGame}
        />
      )}
    </div>
  );
}

export default Game;