const players = require('./players.json');
const batsmen = require('./batsmen.json');
const bowlers = require('./bowlers.json');
const allRounders = require('./allRounders.json');

function generatePlayer(count) {
  if (count > 15) {
    throw new Error('Only 15 players allowed to generate at one time');
  }

  function getRandomBatsman() {
    const randomIndex = Math.floor(Math.random() * batsmen.length);
    return batsmen[randomIndex];
  }

  function getRandomBowler() {
    const randomIndex = Math.floor(Math.random() * bowlers.length);
    return bowlers[randomIndex];
  }

  function getRandomAllRounder() {
    const randomIndex = Math.floor(Math.random() * allRounders.length);
    return allRounders[randomIndex];
  }

  const randomPlayers = [];

  for (let i = 0; i < count; i++) {
    const randomIndex = Math.floor(Math.random() * players.length);
    const player = players[randomIndex];
    const batsman = getRandomBatsman();
    const bowler = getRandomBowler();
    const allRounder = getRandomAllRounder();
    randomPlayers.push({ player });
  }

  if (count === undefined) {
    return randomPlayers[0];
  }

  return randomPlayers;
}

module.exports = generatePlayer;
