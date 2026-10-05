import { useState, useEffect } from "react";
import Stats from "./Stats";
import TextDisplay from "./TextDisplay";
import TypingInput from "./TypingInput";
import Results from "./Results";
import { pickPassage } from "../passages";

// A constant: how long one round lasts, in seconds.
// Written in capitals by convention, and defined once so we can change it in one place.
const GAME_SECONDS = 30;

// TypingGame is the "brain" of the app. It owns all the state.
function TypingGame() {
  // ---------- STATE ----------
  // useState(() => pickPassage()) uses a function so the random pick happens only once,
  // on the first render, and not on every render.
  const [passage, setPassage] = useState(() => pickPassage());

  // Everything the player has typed so far.
  const [typed, setTyped] = useState("");

  // Seconds remaining.
  const [timeLeft, setTimeLeft] = useState(GAME_SECONDS);

  // Has the player pressed their first key yet? (true or false)
  const [started, setStarted] = useState(false);

  // ---------- DERIVED VALUES ----------
  // These are calculated from state on every render. We do NOT store them
  // in state, because they can always be worked out from the state above.
  // Fewer pieces of state means fewer chances for them to disagree with each other.

  // The round is finished when time runs out OR the whole passage has been typed.
  const isFinished = timeLeft <= 0 || typed.length === passage.length;

  // The clock is running once the player has started, until the round is finished.
  const isRunning = started && !isFinished;

  // Count how many typed characters match the passage at the same position.
  let correctChars = 0;
  for (let i = 0; i < typed.length; i++) {
    if (typed[i] === passage[i]) {
      correctChars++;
    }
  }

  // Seconds used so far. Math.max(..., 1) avoids dividing by zero at the start.
  const elapsedSeconds = Math.max(GAME_SECONDS - timeLeft, 1);

  // Standard typing formula: 1 "word" = 5 characters.
  // wpm = (correct characters / 5) / minutes
  const wpm = Math.round(correctChars / 5 / (elapsedSeconds / 60));

  // Accuracy = correct characters out of all characters typed, as a percentage.
  // With nothing typed yet, we show 100 instead of dividing by zero.
  const accuracy =
    typed.length === 0 ? 100 : Math.round((correctChars / typed.length) * 100);

  // ---------- EFFECT ----------
  // The clock. useEffect runs code after the screen is drawn, and is the right
  // place for things outside React, like timers.
  // The list at the end ([isRunning]) means "run again whenever isRunning changes".
  useEffect(() => {
    if (!isRunning) {
      return; // not running, so no timer is needed
    }

    // setInterval calls a function again and again, every 1000 milliseconds.
    // We write (t) => t - 1 (a "functional update") so we always subtract
    // from the newest value of timeLeft.
    const timerId = setInterval(() => {
      setTimeLeft((t) => t - 1);
    }, 1000);

    // The function we return is a "cleanup". React runs it when isRunning changes
    // or the component disappears, so old timers never keep running.
    return () => clearInterval(timerId);
  }, [isRunning]);

  // ---------- EVENT HANDLERS ----------
  // Runs every time the player types or deletes a character.
  function handleChange(event) {
    // Extra safety: ignore typing when the round is over.
    if (isFinished) {
      return;
    }

    // Take what is in the box, but never more characters than the passage has.
    const newText = event.target.value.slice(0, passage.length);

    // The first key press starts the clock.
    if (!started && newText.length > 0) {
      setStarted(true);
    }

    setTyped(newText);
  }

  // Resets everything for a new round with a different passage.
  function handleRestart() {
    setPassage(pickPassage(passage));
    setTyped("");
    setTimeLeft(GAME_SECONDS);
    setStarted(false);
  }

  // ---------- WHAT TO DRAW ----------
  return (
    <section className="game">
      <h1>Typing speed test</h1>
      <p className="intro">
        Type the text below. The clock starts when you press your first key.
      </p>

      {/* Stats only shows numbers, so we pass them down as props */}
      <Stats timeLeft={timeLeft} wpm={wpm} accuracy={accuracy} />

      {/* TextDisplay needs both the target text and what has been typed */}
      <TextDisplay passage={passage} typed={typed} />

      {/* The input is locked once the round is finished */}
      <TypingInput
        value={typed}
        onChange={handleChange}
        disabled={isFinished}
      />

      {/* Conditional rendering: `condition && <Something />` draws Something
          only when the condition is true. Results appears only after a round ends. */}
      {isFinished && (
        <Results wpm={wpm} accuracy={accuracy} onRestart={handleRestart} />
      )}
    </section>
  );
}

export default TypingGame;