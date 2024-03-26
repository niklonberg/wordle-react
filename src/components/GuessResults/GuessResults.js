import Guess from "../Guess/Guess";
import styles from "./GuessResults.module.scss";
import { createRange } from "../../utilities";

function GuessResults({ validatedGuesses, numAllowedGuesses, wordLength }) {
  const rowAmount = createRange(numAllowedGuesses);
  return (
    <div className={styles.guessResults}>
      {rowAmount.map((num) => (
        <Guess
          key={num}
          validatedGuess={validatedGuesses[num]}
          wordLength={wordLength}
        />
      ))}
    </div>
  );
}

export default GuessResults;
