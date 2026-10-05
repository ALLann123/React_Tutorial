import TypingGame from "./components/TypingGame";

// App is the root component. It only sets up the page layout
// and places the game inside it.
function App() {
  return (
    <main className="page">
      <TypingGame />
    </main>
  );
}

export default App;