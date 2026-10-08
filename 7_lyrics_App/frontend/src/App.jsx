import LyricsApp from "./components/LyricsApp";

// App is the root component. It only sets up the page layout
// and places the lyrics app inside it.
function App() {
  return (
    <main className="page">
      <LyricsApp />
    </main>
  );
}

export default App;