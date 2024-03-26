import Banner from "../Banner";

function LossBanner({ wordToGuess, handleRestartGame }) {
  return (
    <Banner status="loss" handleRestartGame={handleRestartGame}>
      <p>
        Sorry, the correct answer is <strong>{wordToGuess}</strong>.
      </p>
    </Banner>
  );
}

export default LossBanner;
