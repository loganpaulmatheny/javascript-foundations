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

function createNewProject(materials, status = "not started") {
  var project = {
    materialsNeeded: materials,
    status: status,
  };
  return project;
}

function compareMaterials(project, closet) {
  for (let i = 0; i < project.materialsNeeded.length; i++) {
    if (closet.supplies.includes(project.materialsNeeded[i].name) === true) {
      console.log(`found ${project.materialsNeeded[i].name}`);
    } else {
      return `Oh no! You need to go shopping before you can start this project!`;
    }
  }
  return `Yay! You can start this project!`;
}

module.exports = {
  createMaterial,
  calculateMaterialCost,
  createSupplyCloset,
  addSupply,
  createNewProject,
  compareMaterials,
};
