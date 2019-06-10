exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex("recipe_ingredients")
    .truncate()
    .then(function() {
      // Inserts seed entries
      return knex("recipe_ingredients").insert([
        {
          recipe_id: 1,
          ingredient_id: 1,
          quantity: 2,
          instructions: "Add two tomatoes"
        },
        {
          recipe_id: 2,
          ingredient_id: 2,
          quantity: 1,
          instructions: "Add something"
        },
        {
          recipe_id: 2,
          ingredient_id: 2,
          quantity: 2,
          instructions: "More instructions"
        }
      ]);
    });
};
