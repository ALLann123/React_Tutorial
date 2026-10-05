// Results appears after a round ends
// the final numbers come in as props. The button calls onRestart
// a function that lives the parent(TypingGame), which resets the game
function Results({wpm, accuracy, onRestart}){
    return (
        <div className="results">
            <h2>Round Complete</h2>
            <p>
                You typed <strong>{wpm} words per minute</strong>with {" "}
                <strong>{accuracy}% accuracy</strong>
            </p>

            <button type="button" className="play-button" onClick={onRestart}>
                Play again
            </button>
        </div>
    );
}

export default Results;