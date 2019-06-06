exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex("ingredients")
    .truncate()
    .then(function() {
      // Inserts seed entries
      return knex("ingredients").insert([
        { name: "tomato" },
        { name: "onion" },
        { name: "cheese" },
        { name: "garlic" },
        { name: "salt" }
      ]);
    });
};
