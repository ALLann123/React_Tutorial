// TextDisplay shows the passage and colors each character depending on
// what the player has typed so far.
// Props:
//   passage - the full text the player must type
//   typed   - what the player has typed so far
function TextDisplay({ passage, typed }) {
  return (
    <p className="passage">
      {/* split("") turns the string into an array of single characters.
          map() then turns each character into a <span> element. */}
      {passage.split("").map((char, index) => {
        // Every character starts as "pending" (not reached yet).
        let className = "pending";

        if (index < typed.length) {
          // The player already typed this position, so compare their character
          // with the expected one.
          className = typed[index] === char ? "correct" : "wrong";
        } else if (index === typed.length) {
          // This is the very next character the player must type.
          className = "current";
        }

        // React needs a unique "key" for each item in a list so it can track them.
        // Using the index is fine here because this list never gets reordered.
        return (
          <span key={index} className={className}>
            {char}
          </span>
        );
      })}
    </p>
  );
}

export default TextDisplay;