exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex("recipes")
    .truncate()
    .then(function() {
      // Inserts seed entries
      return knex("recipes").insert([
        { name: "homemade", dish_id: 1 },
        { name: "tex-mex", dish_id: 2 },
        { name: "surpise", dish_id: 3 }
      ]);
    });
};
