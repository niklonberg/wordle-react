import Banner from "../Banner";

function WinBanner({ numOfGuesses, handleRestartGame }) {
  return (
    <Banner status="win" handleRestartGame={handleRestartGame}>
      <p>
        <strong>Congratulations!</strong> Got it in{" "}
        <strong>
          {numOfGuesses === 1 ? "1 guess" : `${numOfGuesses} guesses`}
        </strong>
        .
      </p>
    </Banner>
  );
}

export default WinBanner;
