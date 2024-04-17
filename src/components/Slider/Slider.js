import styles from "./Slider.module.scss";
import React from "react";

function Slider({ settings, value, action, text, gameStatus }) {
  const id = React.useId();

  return (
    <div className={styles.sliderWrapper}>
      <label htmlFor={id}>{text}</label>
      <input
        id={id}
        type="range"
        min={settings.min}
        max={settings.max}
        disabled={gameStatus !== "running"}
        value={value}
        onChange={(event) => action(event.target.value)}
      />
      <span>{value}</span>
    </div>
  );
}

export default Slider;
