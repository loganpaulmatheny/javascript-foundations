function createBarber(name, earnings = 0, haircuts = []) {
  var barber = {
    name: name,
    earnings: earnings,
    haircuts: haircuts,
  };
  return barber;
}

function giveCompliment(haircut) {
  return `This ${haircut.style} looks great!`;
}

function cutHair(barber, haircut) {
  barber.haircuts.push(haircut);
  barber.earnings += haircut.price;
  return barber;
}

function listStyles(barber, hairLength) {
  // return array of styles matching
  // match styles and put them i an array
  var styleMatch = [];
  for (let i = 0; i < barber.haircuts.length; i++) {
    if (barber.haircuts[i].hairLength === hairLength) {
      styleMatch.push(barber.haircuts[i].style);
    }
  }
  return styleMatch;
}

module.exports = { createBarber, giveCompliment, cutHair, listStyles };
