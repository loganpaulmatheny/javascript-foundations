function createAirport(airportName, airlineNames, numGates) {
  var airport = {
    name: airportName,
    airlines: airlineNames,
    availableGates: numGates,
  };
  return airport;
}

function welcomeGuests(airport) {
  return `Welcome to ${airport.name}!`;
}

function landPlanes(airport, planesLanded) {
  // check to see if there are enough gates
  if (airport.availableGates - planesLanded >= 0) {
    var updatedAvailableGates = airport.availableGates - planesLanded;
    // console.log(updatedAvailableGates);
    airport.availableGates = updatedAvailableGates;
    // console.log(airport);
    airport.message = `Success! Current availability is ${updatedAvailableGates}.`;
    return airport;
  } else {
    var overflow = (airport.availableGates - planesLanded) * -1;
    airport.availableGates = 0;
    airport.message = `Oh no! Not enough gates available. Current overflow is ${overflow}.`;
    return airport;
  }
}

function checkAirlineLocations(airportsArr, airline) {
  // goal - check the array to see where airlines fly into
  // return - return array of strings airport names
  // iterate through objects
  // iterate to see if one airport.airlines = airline
  // if yes push to an array of airport.name
  // *** you don't need to iterate using j for the names (that value is not an array, its just a value) you're only iterating through the array value to check if there's a match
  // return airport array
  var foundAirports = [];
  for (let i = 0; i < airportsArr.length; i++) {
    for (let j = 0; j < airportsArr[i].airlines.length; j++) {
      // console.log(airportsArr[i]);
      if (airportsArr[i].airlines[j] === airline) {
        // console.log(airportsArr[i].airlines[j]);
        var foundAirport = airportsArr[i].name;
        // console.log("getting here");
        foundAirports.push(foundAirport);
      }
    }
  }
  return foundAirports;
}

// // ===== ROUND 2 =====
// function createAirport(name, airlines, gates) {
//   var airport = {
//     name: name,
//     airlines: airlines,
//     availableGates: gates,
//   };
//   return airport;
// }

// function welcomeGuests(airport) {
//   return `Welcome to ${airport.name}!`;
// }

// function landPlanes(airport, planesLanded) {
//   if (airport.availableGates - planesLanded >= 0) {
//     var openGates = airport.availableGates - planesLanded;
//     airport.availableGates = openGates;
//     airport.message = `Success! Current availability is ${airport.availableGates}.`;
//     return airport;
//   } else {
//     var overflow = airport.availableGates - planesLanded;
//     airport.availableGates = 0;
//     airport.message = `Oh no! Not enough gates available. Current overflow is ${
//       overflow * -1
//     }.`;
//     return airport;
//   }
// }

// function checkAirlineLocations(airports, airline) {
//   // return array of airport names that carrier flies to
//   // compare the airlines (array) within aiport within airport array
//   // loop through aiports array
//   // look at airport array
//   // is the airline within the array? - if yes push it to airport carries
//   var carriers = [];
//   for (let i = 0; i < airports.length; i++) {
//     for (let j = 0; j < airports[i].airlines.length; j++) {
//       if (airports[i].airlines[j] === airline) {
//         // console.log(`found airline at ${airports[i].name}`);
//         carriers.push(airports[i].name);
//       }
//     }
//   }
//   return carriers;
// }

// module.exports = {
//   createAirport,
//   welcomeGuests,
//   landPlanes,
//   checkAirlineLocations,
// };
