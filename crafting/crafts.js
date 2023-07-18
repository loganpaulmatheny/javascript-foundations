function createMaterial(name, unit, price) {
  var yarn = {
    name: name,
    unit: unit,
    costPerUnit: price,
  };
  return yarn;
}

function calculateMaterialCost(craftMaterial, amount) {
  var cost = craftMaterial.costPerUnit * amount;
  var amountStatement = `${amount} ${craftMaterial.unit}s of ${craftMaterial.name} costs $${cost}.`;
  return amountStatement;
}

function createSupplyCloset(craftSupplies = []) {
  var materialNames = [];
  if (craftSupplies.length > 0) {
    for (let i = 0; i < craftSupplies.length; i++) {
      materialNames.push(craftSupplies[i].name);
    }
  }
  var closet = {
    supplies: materialNames,
  };
  return closet;
}

function addSupply(closet, craftMaterial) {
  if (closet.supplies.includes(craftMaterial.name) === false) {
    closet.supplies.push(craftMaterial.name);
    return closet.supplies;
  }
  return `You already have ${craftMaterial.name} in your closet!`;
}
module.exports = {
  createMaterial,
  calculateMaterialCost,
  createSupplyCloset,
  addSupply,
  // createNewProject,
  // compareMaterials
};
