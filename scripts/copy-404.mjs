import { copyFileSync } from "fs";

copyFileSync("site/index.html", "site/404.html");
console.log("Copied site/index.html to site/404.html");