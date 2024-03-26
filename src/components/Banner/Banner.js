import styles from "./Banner.module.scss";

function Banner({ status, children, handleRestartGame }) {
  return (
    <div className={`${styles.banner} ${styles[status]}`}>
      {children}
      <button onClick={handleRestartGame}>Restart Game</button>
    </div>
  );
}

export default Banner;
