function createElevator(name, floors, currentFlr, passengers) {
  var elevator = {
    building: name,
    floors: floors,
    currentFloor: currentFlr,
    passengers: passengers,
  };
  return elevator;
}

function changeFloors(elevator, floor) {
  var elevatorStatement = "";
  elevatorStatement = `Taking you to floor ${floor}!`;
  if (elevator.currentFloor === floor) {
    elevatorStatement = `You're already on floor ${floor}!`;
  } else if (elevator.floors < floor) {
    elevatorStatement = `Floor ${floor} does not exist!`;
  }
  return elevatorStatement;
}

function dropOffPassenger(elevator, passenger) {
  for (let i = 0; i < elevator.passengers.length; i++) {
    if (elevator.passengers[i] === passenger) {
      var passengerOff = i;
    }
  }
  elevator.passengers.splice(passengerOff, 1);
  return elevator.passengers;
}

module.exports = { createElevator, changeFloors, dropOffPassenger };
