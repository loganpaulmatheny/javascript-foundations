function createIngredient(ingredient = "unknown", price = 0.0) {
  var ingredient = {
    name: ingredient,
    price: price,
  };
  return ingredient;
}

function createTaco(name = "custom", ingredients = []) {
  var taco = {
    name: name,
    ingredients: ingredients,
  };

  return taco;
}

function addIngredientToTaco(taco, ingredient) {
  taco.ingredients.push(ingredient);
  return taco;
}

function calculatePrice(taco) {
  var priceOfIngredients = 0;
  for (let i = 0; i < taco.ingredients.length; i++) {
    priceOfIngredients += taco.ingredients[i].price;
  }
  return priceOfIngredients;
}
module.exports = {
  createIngredient,
  createTaco,
  addIngredientToTaco,
  calculatePrice,
};
