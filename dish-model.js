const knex = require("knex");

const knexConfig = require("./knexfile.js");

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

function getDish(id) {
  return db("dishes")
    .where({ id })
    .first();
}

function getRecipes() {
  return db("recipes");
}

function addRecipe(recipe) {
  return db("recipe").insert(recipe, id);
}

async function execute() {
  const dish = await getDish(2);
  console.log(dish);
}

execute();
