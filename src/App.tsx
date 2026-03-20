import MarkdownPage from "./components/MarkdownPage";
import devlog from "./content/devlog.md?raw";
import logo from "./assets/logo.svg";
function App() {
  return (
    <div className="article">
      
      <img src= {logo} alt="Alt text" width="200" height="200" className="center logo"></img>
      <h1>Project Dice</h1>
      <MarkdownPage content={devlog} />

      {/* test dropdown */}
      <div className="dropdown">
        <button>This is a test button dropdown</button>
        <div className="content">
          <a href="">Apple</a>
          <a href="">Orange</a>
          <a href="">Banana</a>
        </div>
      </div>

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