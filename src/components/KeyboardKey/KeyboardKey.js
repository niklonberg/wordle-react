import styles from "./KeyboardKey.module.scss";

function KeyboardKey({ letter, status }) {
  return (
    <span className={`${styles.keyboardKey} ${status ? styles[status] : ""}`}>
      {letter}
    </span>
  );
}

export default KeyboardKey;
