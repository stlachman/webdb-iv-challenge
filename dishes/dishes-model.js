const knex = require("knex");

const knexConfig = require("../knexfile.js");

const db = knex(knexConfig.development);

module.exports = {
  getDishes,
  addDish
};

function getDishes() {
  return db("dishes");
}

function addDish(dish) {
  return db("dishes").insert(dish, "id");
}

// function getDishes(id) {
//   return db("dishes")
//     .where({ id })
//     .first();
// }

function getRecipes() {
  return db("recipes");
}

function addRecipe(recipe) {
  return db("recipe").insert(recipe, id);
}

async function execute() {
  const dishes = await getDishes();
  console.log(dishes);
}

execute();
