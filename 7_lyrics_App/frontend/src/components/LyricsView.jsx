// LyricsView displays the lyrics of ONE track.
// Props:
//   track - an object with title, artist, album, instrumental and lyrics
function LyricsView({ track }) {
  return (
    <article className="lyrics-view">
      <h2>{track.title}</h2>
      <p className="lyrics-meta">
        {track.artist}
        {track.album ? ` · ${track.album}` : ""}
      </p>

      {/* A ternary: condition ? showThis : showThat */}
      {track.instrumental ? (
        <p className="instrumental">This track is instrumental. It has no lyrics.</p>
      ) : (
        // The lyrics text contains line breaks. The CSS rule "white-space: pre-wrap"
        // on .lyrics-text makes the browser keep them.
        <div className="lyrics-text">{track.lyrics}</div>
      )}
    </article>
  );
}

export default LyricsView;