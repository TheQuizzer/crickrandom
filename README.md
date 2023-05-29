# crickrandom

[![npm version](https://badge.fury.io/js/crickrandom.svg)](https://badge.fury.io/js/crickrandom)

crickrandom is an npm package that generates random cricket players with their associated attributes such as batsmen, bowlers, and all-rounders.

## Installation

To install crickrandom, use npm:

```bash
npm install crickrandom
```

## Usage
```js
const generatePlayer = require('crickrandom');

// Generate a single random player
const singleRandomPlayer = generatePlayer();
console.log(singleRandomPlayer);

// Generate multiple random players
const multipleRandomPlayers = generatePlayer(3);
console.log(multipleRandomPlayers);

// Generate random batsmen
const randomBatsmen = generatePlayer.batsmen(2);
console.log(randomBatsmen);

// Generate random bowlers
const randomBowlers = generatePlayer.bowlers(2);
console.log(randomBowlers);

// Generate random all-rounders
const randomAllRounders = generatePlayer.allRounders(2);
console.log(randomAllRounders);
```

## Contact Me

If you have any questions, feedback, or suggestions, feel free to reach out to me:

- **Name:** The Quizzer
- **Email:** thequizzer8@gmail.com
- **Discord:** TheQuizzer#8474

You can also create an issue on the [GitHub repository](https://github.com/TheQuizzer/crickrandom) for any bug reports or feature requests.
