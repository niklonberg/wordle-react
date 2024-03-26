import styles from "./Guess.module.scss";
// import { WORD_LENGTH } from "../../constants";
import { createRange } from "../../utilities";

function Cell({ letter, status }) {
  return <span className={`${styles.cell} ${styles[status]}`}>{letter}</span>;
}

function Guess({ validatedGuess, wordLength }) {
  return (
    <div className={styles.guessRow}>
      {createRange(wordLength).map((num) => (
        <Cell
          key={num}
          letter={validatedGuess ? validatedGuess[num].letter : undefined}
          status={validatedGuess ? validatedGuess[num].status : undefined}
        />
      ))}
    </div>
  );
}

export default Guess;
