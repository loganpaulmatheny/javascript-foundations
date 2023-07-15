function createItemStock(name = "unknown", qty = 0, price = 1.0) {
  var itemStock = {
    name: name,
    quantity: qty,
    price: price,
  };
  return itemStock;
}

function makePurchase(selectedItem, money) {
  if (selectedItem.price > money) {
    var purchaseStatus = `Sorry, you need at least $${selectedItem.price} to make that purchase`;
    return purchaseStatus;
  }
  if (selectedItem.quantity === 0) {
    var stockingStatus = `Sorry, there are none left`;
    return stockingStatus;
  }
  var successfulTransaction = `Here are your ${selectedItem.name}`;
  return successfulTransaction;
}
function collectChange(looseChange) {
  var change = 0;
  for (let i = 0; i < looseChange.length; i++) {
    change = change + looseChange[i];
  }
  return change;
}

module.exports = { createItemStock, makePurchase, collectChange };
