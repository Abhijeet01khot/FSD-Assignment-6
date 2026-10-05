import { useState } from "react";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  const increment = () => {
    setCount(count + 1);
  };

  const decrement = () => {
    setCount(count - 1);
  };

  const reset = () => {
    setCount(0);
  };

  return (
    <div className="game-screen">

      <h1>◆ SCORE MASTER ◆</h1>

      <div className="counter-card">

        <div className="card-header">
          PLAYER SCORE
        </div>

        <div className="counter-content">

          <div className="score-label">
            CURRENT SCORE
          </div>

          <div className="score-display">
            {count}
          </div>

          <div className="status">
            {count > 0
              ? "⭐ GREAT JOB!"
              : count < 0
              ? "⚠️ SCORE BELOW ZERO"
              : "🎮 READY TO PLAY"}
          </div>

          <div className="button-container">

            <button
              className="game-button decrease"
              onClick={decrement}
            >
              −
            </button>

            <button
              className="game-button reset"
              onClick={reset}
            >
              RESET
            </button>

            <button
              className="game-button increase"
              onClick={increment}
            >
              +
            </button>

          </div>

        </div>

        <div className="card-footer">
          USE THE BUTTONS TO CHANGE YOUR SCORE
        </div>

      </div>

      <p className="footer-text">
        POWERED BY REACT • useState
      </p>

    </div>
  );
}

export default App;