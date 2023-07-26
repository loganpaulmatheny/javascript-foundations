function createMeal(mealName, calories, dishes = []) {
  var meal = {
    type: mealName,
    calorieGoal: calories,
    dishes: dishes,
  };
  return meal;
}

function addDish(meal, dish) {
  if (dish.calories < meal.calorieGoal) {
    meal.dishes.push(dish);
    meal.calorieGoal = meal.calorieGoal - dish.calories;
  }
  return meal;
}

function calculateCalories(meal) {
  // return string template literal
  // add the total calories for the meal
  var totalCalories = 0;
  for (let i = 0; i < meal.dishes.length; i++) {
    totalCalories += meal.dishes[i].calories;
  }
  return `${meal.type} has a total of ${totalCalories} calories.`;
}
module.exports = { createMeal, addDish, calculateCalories };
