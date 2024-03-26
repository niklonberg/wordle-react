import React from "react";
import styles from "./Header.module.scss";

function Header() {
  return (
    <header className={styles.header}>
      <h1>My Wordle Game</h1>
    </header>
  );
}

export default Header;
