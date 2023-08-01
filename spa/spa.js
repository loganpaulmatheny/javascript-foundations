function createCustomer(name, amount, appointmentType = []) {
  var customer = {
    name: name,
    bill: amount,
    bookings: appointmentType,
  };
  return customer;
}

function greeting(customer) {
  if (customer.bill === 0) {
    return `${customer.name}! Welcome to Happy Spa`;
  } else {
    return `${customer.name}! Welcome back to Happy Spa`;
  }
}

function createService(serviceName, price) {
  if (!serviceName || !price) {
    return `Please provide service name and cost.`;
  } else {
    var service = {
      name: serviceName,
      cost: price,
    };
    return service;
  }
}

function bookServices(customer, service) {
  customer.bookings.push(service.name);
  customer.bill += service.cost;
  return customer;
}

function applyGiftCard(servicesList, price) {
  // returns an array of strings for services within price
  var affordableServices = [];
  for (let i = 0; i < servicesList.length; i++) {
    if (servicesList[i].price <= price) {
      affordableServices.push(servicesList[i].name);
    }
  }
  return affordableServices;
}

module.exports = {
  createCustomer,
  greeting,
  createService,
  bookServices,
  applyGiftCard,
};
