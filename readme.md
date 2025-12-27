# [Project Dice](https://mark-wiemer.github.io/project-dice/)

A top secret project!

## Vision

### How lucky was that?

What are the odds you get a certain roll of the dice? Can you guess the odds in advance?

## Developer notes

General notes:

- Pages are tracked directly in the `site` folder

Hosting tools:

- GitHub Pages

Developer tools:

- fnm to manage versions of Node
  1. `winget install Schniz.fnm --source winget`
  2. (restart shell)
  3. `fnm use 24`
  4. `npm i`
  5. `npm run dev`
- Node.js to run QoL scripts
- @types/node to silence false positive errors on references to Node globals
- Git LFS to better track changes to images
- GitHub Actions to automatically deploy the site
- http-server for testing the site
- Prettier to format the repo
