function createFavoriteFood(dishObj) {
  var dish = {
    name: dishObj.dish,
    ingredients: dishObj.ingredients,
    isSpicy: dishObj.isSpicy,
    timesOrdered: 0,
  };
  return dish;
}

function commentOnSpiciness(dish) {
  var comment = "";
  if (dish.isSpicy === true) {
    comment = `Wow, this ${dish.name} is so spicy!`;
  } else {
    comment = `Phew, this ${dish.name} is not very spicy.`;
  }
  return comment;
}

function orderFood(dish) {
  var orderCount = dish.timesOrdered;
  dish.timesOrdered = orderCount + 1;
  return dish;
}

function createShoppingList(dishArr) {
  // iterate through array of objects
  // look at iterate through ingredients array -> push to list
  // OR
  // concat the array with list
  var list = [];
  for (let i = 0; i < dishArr.length; i++) {
    //need to set list equal to the concat because concat creates a shallow copy (accesssor) not a mutator
    list = list.concat(dishArr[i].ingredients);
  }
  //   console.log(list);
  return list;
}

module.exports = {
  createFavoriteFood,
  commentOnSpiciness,
  orderFood,
  createShoppingList,
};
