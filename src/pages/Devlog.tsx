import MarkdownPage from "../components/MarkdownPage";
import devlog from "../content/devlog.md?raw";
import { Link } from "react-router-dom"

export default function DevLog() {
    return (
        <>
          <span><Link to="/">
                <button>Return to Home</button>
              </Link></span> 
            <MarkdownPage content={devlog} />
        </>
    )
}