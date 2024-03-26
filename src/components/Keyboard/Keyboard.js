import styles from "./Keyboard.module.scss";
import KeyboardKey from "../KeyboardKey/KeyboardKey";

const keyboardLetters = [
  ["Q", "W", "E", "R", "T", "Y", "U", "I", "O", "P"],
  ["A", "S", "D", "F", "G", "H", "J", "K", "L"],
  ["Z", "X", "C", "V", "B", "N", "M"],
];

function getStatusByLetter(validatedGuesses) {
  const letters = validatedGuesses.flat();

  const statusObj = {};

  letters.forEach(({ letter, status }) => {
    const currStatus = statusObj[letter];

    if (currStatus === undefined) {
      statusObj[letter] = status;
      return;
    }

    const STATUS_RANKS = {
      correct: 3,
      missplaced: 2,
      incorrect: 1,
    };

    const currentStatusRank = STATUS_RANKS[currStatus];
    const newStatusRank = STATUS_RANKS[status];

    if (newStatusRank > currentStatusRank) statusObj[letter] = status;
  });

  return statusObj;
}

function Keyboard({ validatedGuesses }) {
  const statusByLetter = getStatusByLetter(validatedGuesses);
  console.log("statusByLetter: ", statusByLetter);

  return (
    <div className={styles.keyboardWrapper}>
      {keyboardLetters.map((letterRow, index) => (
        <KeyboardRow
          key={index}
          letterRow={letterRow}
          statusByLetter={statusByLetter}
        />
      ))}
    </div>
  );
}

function KeyboardRow({ letterRow, statusByLetter }) {
  return (
    <div className={styles.keyboardRow}>
      {letterRow.map((letter, index) => (
        <KeyboardKey
          key={index}
          letter={letter}
          status={statusByLetter[letter]}
        />
      ))}
    </div>
  );
}

export default Keyboard;
