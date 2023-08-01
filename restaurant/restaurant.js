function createMeal(item, specialRequests, table) {
  var ticket = {
    name: item,
    specialRequests: specialRequests,
    tableNumber: table,
    complete: false,
  };
  return ticket;
}

function getMade(ticket) {
  ticket.complete = true;
  return ticket;
}

function announceMeal(ticket) {
  // string interpolation
  // conditional if completed status
  // retun value of string int. literal
  if (ticket.complete === true) {
    return `Order up - ${ticket.name} for table ${ticket.tableNumber}!`;
  } else if (ticket.complete === false) {
    return `This ${ticket.name} is not completed yet`;
  }
}

function createOrder(tableTicket) {
  var order = {
    tableNumber: tableTicket.name,
    meals: tableTicket.meals,
    completedMeals: [],
  };
  return order;
}

function cookMeal(order, meal) {
  if (order.tableNumber === meal.tableNumber) {
    order.completedMeals.push(meal.name);
  }
  return order;
}

function listOrders(order) {
  var orderNames = [];
  for (let i = 0; i < order.meals.length; i++) {
    orderNames.push(order.meals[i].name);
  }
  return orderNames;
}

function listSpecialRequests(order) {
  var specialRequests = [];
  var notes;
  for (let i = 0; i < order.meals.length; i++) {
    for (let j = 0; j < order.meals[i].specialRequests.length; j++) {
      console.log(order.meals[i].specialRequests[j]);
      specialRequests.push(order.meals[i].specialRequests[j]);
    }
  }
  console.log(specialRequests);
  return specialRequests;

  // could use two for loops
  // push the special request arrays into a string
  // push the string into an array
}

module.exports = {
  createMeal,
  getMade,
  announceMeal,
  createOrder,
  cookMeal,
  listOrders,
  listSpecialRequests,
};
