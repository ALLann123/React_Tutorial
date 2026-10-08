// MatchList lets the user choose between several matching versions of a song.
// Props:
//   matches       - the array of tracks
//   selectedIndex - the position of the track currently shown
//   onSelect      - function to call with the position of the clicked track
function MatchList({ matches, selectedIndex, onSelect }) {
  // With only one match there is nothing to choose, so we draw nothing.
  if (matches.length < 2) {
    return null;
  }

  return (
    <div className="match-list">
      <p className="section-label">{matches.length} matches found. Choose one:</p>
      <ul>
        {/* map() turns each track into a list item.
            The key must be unique and stable. Here we use the track's own id from the API,
            which is better than the index because the id belongs to the track itself. */}
        {matches.map((track, index) => (
          <li key={track.id}>
            {/* onClick={() => onSelect(index)} wraps the call in a new function.
                Writing onClick={onSelect(index)} would run it immediately while drawing. */}
            <button
              type="button"
              className={index === selectedIndex ? "match active" : "match"}
              aria-pressed={index === selectedIndex}
              onClick={() => onSelect(index)}
            >
              <span className="match-title">{track.title}</span>
              <span className="match-meta">
                {track.artist}
                {track.album ? ` · ${track.album}` : ""}
              </span>
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default MatchList;