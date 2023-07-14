function createPlayer(name, age, moves) {
  var player = {
    name: name,
    age: age,
    moveset: moves,
  };
  console.log(player.moveSet);
  return player;
}

function createLevel(name, player) {
  var level = {
    name: name,
    players: player,
    coins: 0,
    lives: 3,
  };
  return level;
}

function findCoins(level, coins) {
  level.coins = coins;
  if (level.coins >= 100) {
    level.lives += 1;
  }
  return level;
}
function defeatPlayer(level) {
  level.lives -= 1;
  if (level.lives === 0) {
    return "GAME OVER";
  }
  return level;
}
module.exports = {
  createPlayer,
  createLevel,
  findCoins,
  defeatPlayer,
};
