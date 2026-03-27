import MarkdownPage from "../components/MarkdownPage";
import Collapsible from "../components/Collapsible";
import { Link } from "react-router-dom"


const devlogs = import.meta.glob("../content/devlogs/*.md", {
    query: "?raw",
    import: "default",
    eager: true,
});


export default function Devlog() {
    return (
        <div className = "page"> 

            <span><Link to="/">
                <button>Return to Home</button>
            </Link></span>

            <h1>DevLog</h1>

            {Object.entries(devlogs).map(([path, content]) => {
                const filename = path.split("/").pop()!;
                const name = filename.replace(".md", "").replaceAll("-", ".");
                return (
                    <div className="wrapper">
                        <Collapsible key={path} label={name}>
                            <MarkdownPage content={content as string} />
                        </Collapsible>
                    </div>
                );
            })}

        </div>
    );
}
