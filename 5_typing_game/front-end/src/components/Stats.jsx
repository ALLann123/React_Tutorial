//Stats only DISPLAYS numbers it receives through props
//It has no state of its own, so it is very simple
function Stats({timeLeft, wpm, accuracy}){
    //When 5 seconds or fewer remain, we add an extra CSS class("warning")
    //so the timer turns red. Written in ternary
    //condition?valueIfTrue:valueIfFalse
    const timerClass=timeLeft<=5?"stat-value warning":"stat-value";

    return (
        <div className="stats">
            <div className="stat">
                <span className="stat-label">Time left</span>
                {/*timeLeft inserts the number and s is plain text after it */}
                <span className={timerClass}>{timeLeft}s</span>
            </div>

            <div className="stat">
                <span className="stat-label">Speed</span>
                <span className="stat-value">{wpm} wpm</span>
            </div>

            <div className="stat">
                <span className="stat-label">Accuracy</span>
                <span className="stat-value">{accuracy}%</span>
            </div>
        </div>
    );
}

export default Stats;