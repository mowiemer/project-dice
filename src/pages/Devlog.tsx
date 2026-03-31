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
        <div className="page">

            <span><Link to="/">
                <button>Return to Home</button>
            </Link></span>

            <h1>DevLog</h1>
            <p>See the updates to the website below.</p>
            {Object.entries(devlogs).reverse().map(([path, content]) => {
                const filename = path.split("/").pop()!;
                const name = filename.replace(".md", "").replaceAll("-", ".");
                return (
                    <div className="wrapper">
                        <Collapsible label={name}>
                            <MarkdownPage content={content as string} />
                        </Collapsible>
                    </div>
                );
            })}

        </div>
    );
}
