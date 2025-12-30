import MarkdownPage from "./components/MarkdownPage";
import devlog from "./content/devlog.md?raw";

function App() {
  return (
    <div className="article">
      <h1>Project Dice</h1>

      <MarkdownPage content={devlog} />

      <footer>
        <hr />
        <a
          href="https://github.com/mowiemer/project-dice"
          target="_blank"
          rel="noreferrer"
        >
          View website source
        </a>
      </footer>
    </div>
  );
}

export default App;