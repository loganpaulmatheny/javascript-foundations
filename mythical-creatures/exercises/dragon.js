function createDragon(dragName, riderName, charTrait) {
  var dragon = {
    name: dragName,
    rider: riderName,
    temperment: charTrait,
    timesEaten: 0,
    hungry: true,
  };
  return dragon;
}

function greetRider(dragon) {
  return `Hi, ${dragon.rider}!`;
}

function eat(dragon) {
  // goal - the dragon should eat 3 times before they're no longer hungry
  // check to see if timesEaten = 3
  // if not add 1 to timesEaten
  // if 3 change hungry = false
  dragon.timesEaten += 1;
  if (dragon.timesEaten === 3) {
    dragon.hungry = false;
    // console.log(dragon.hungry);
  }
  return dragon;
}

function findFireBreathers(dragonArray) {
  // look in array
  // if dragon.temperment === aggressive -> push to firebreathers array
  var fireBreathers = [];
  for (let i = 0; i < dragonArray.length; i++) {
    if (dragonArray[i].temperment === "aggressive") {
      fireBreathers.push(dragonArray[i]);
    }
  }
  return fireBreathers;
}

module.exports = {
  createDragon,
  greetRider,
  eat,
  findFireBreathers,
};
