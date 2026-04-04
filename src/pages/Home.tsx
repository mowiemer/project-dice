
import logo from "../assets/logo.svg"
import { Link } from "react-router-dom"
import BackgroundMusic from "../components/BackgroundMusic";
// import song from "../music/song.mp3";

export default function Home() {
  return (
    <div className="page center">

      <img src={logo} alt="Alt text" width="200" height="200" className="center logo"></img>
      <BackgroundMusic />
      <h1>Project Dice</h1>

      <span><p>This page is still WIP. Please go to devlog to see the latest content.</p><p className="small">Also hello Bryanna</p></span>
      <span>
        <Link to="/devlog">
          <button className="homepageButton">View Devlog</button>
        </Link>
        <button className="homepageButton wip">WIP 1</button>

      </span>
      <br />
      <span>
        <button className="homepageButton wip">WIP 2</button>
        <button className="homepageButton wip">WIP 3</button>

      </span>



      {/* <div className="dropdown">
        <button>This is a test button dropdown</button>
        <div className="content">
          <a href="">Apple</a>
          <a href="">Orange</a>
          <a href="">Banana</a>
        </div>
      </div> */}

      {/* <footer>
        <hr />
        <a
          href="https://github.com/mowiemer/project-dice"
          target="_blank"
          rel="noreferrer"
        >
          View website source
        </a>
      </footer> */}
    </div>
  )
}