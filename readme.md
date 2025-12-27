# [Project Dice](https://mark-wiemer.github.io/project-dice/)

A top secret project!

## Vision

Probability Intuition Trainer

One stop shop for dice game enthusiasts

Visualizer of different probabilities

Package to do this? d3? animation?

- bootstrap curve with value on x axis and density on y. overlay distribution of different probabilities

Aesthetic/UI

- Deep purple, neon orange and green and blue

Primary Background- Midnight Violet
Primary Text- Lavendar
Primary Accent- Digital Blue
Other accents- pink/gold/green

Modern retro theme

https://coolors.co/26052e-ebebff-ed21b0-226ffe-ffb732-6eee4e

<palette>
  <color name="Midnight Violet" hex="26052e" r="38" g="5" b="46" />
  <color name="Lavender" hex="ebebff" r="235" g="235" b="255" />
  <color name="Shocking Pink" hex="ed21b0" r="237" g="33" b="176" />
  <color name="Digital Blue" hex="226ffe" r="34" g="111" b="254" />
  <color name="Sunflower Gold" hex="ffb732" r="255" g="183" b="50" />
  <color name="Radioactive Grass" hex="6eee4e" r="110" g="238" b="78" />
</palette>

How to monetize

- Primary: eventually partner wih games and link to their website
- Supplemental js tools for popular games? modern helper tools that would work on an app?
  -- connect different games together, one app for all the supplemental tools
  -- would have history, reviews, guides, etc, links to others
  --
  Partner with games and such for money stuff

### Different Pages

#### Chance of win?

I need to roll [more than] a [17] on [3d6]. Chances of winning?
AND
I need to roll an odd

OR
I need to roll 4 black dice

**Opposing Rolls**?

my opponent is rolling 3d6. I am rolling 2d8. who has higher chance

#### How /luckyunlucky was I

User enters their experience (start with dice, expand to cards) and then website tells you how likely it was
Then it should give a reference of something just as likely.

Can you guess in advance?

_For reference, that's like [insert proven math fact here]_

#### Test your Intuition

Example: what are chances of pulling 3 blue dice without pulling 1 red dice?

Make it a whole game, level up, compare stats, etc. Break down the probability at the end.

- number of dice
- color of dice
- number on dice
- with/without replacement

- what is more likely- pulling a [insert] or a [insert]
- mix and match different variables. save states and the unique properties

#### Graphs / Reference

Has simple reference guides for common probabilities and ways to remember them

- e.g. 2d grid with sums
- intuitive visualizations

Cool visualization of probability graph of hitting different numbers with different dice?

#### Roll a Dice

Super elegant seamless modern dice roller. good snappy ui. not 3d plugin and simulation right? too bulky. find a way to simulate jostling though.

Options for number of dice

Options for pick a card

#### About

Go into what this site is and history

### Potential Titles

- Dice Decisions
- Dicestats
- ProbJob
- ChanceStats

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
    5. `npm start`
- Node.js to run QoL scripts
- @types/node to silence false positive errors on references to Node globals
- Git LFS to better track changes to images
- GitHub Actions to automatically deploy the site
- http-server for testing the site
- Prettier to format the repo
