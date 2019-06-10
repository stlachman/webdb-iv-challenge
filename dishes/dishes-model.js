const knex = require("knex");

const knexConfig = require("../knexfile.js");

const db = knex(knexConfig.development);

module.exports = {
  getDishes,
  addDish,
  getDish,
  getRecipes,
  addRecipe
};

function getDishes() {
  return db("dishes");
}

function addDish(dish) {
  return db("dishes").insert(dish, "id");
}

async function getDish(id) {
  const dish = await getDishes()
    .where({ id })
    .first();
  const recipes = await getRecipes().where({ dish_id: id });
  return {
    ...dish,
    recipes
  };
}

function getRecipes() {
  return db("dishes as d")
    .join("recipes as r", "d.id", "r.dish_id")
    .select("r.id", "r.name as recipe", "d.name as dish");
}

function addRecipe(recipe) {
  return db("recipes").insert(recipe, "id");
}
