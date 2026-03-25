
import logo from "../assets/logo.svg"
import { Link } from "react-router-dom"

export default function Home() {
  return (
    <div className="article">

      <img src={logo} alt="Alt text" width="200" height="200" className="center logo"></img>
      <h1>Project Dice</h1>

      <p>This page is still WIP. Please go to devlog to see the latest content</p>

      <span><Link to="/devlog">
        <button>View Devlog</button>
      </Link></span>

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
  )
}