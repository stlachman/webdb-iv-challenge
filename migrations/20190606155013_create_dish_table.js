exports.up = function(knex, Promise) {
  return knex.schema.createTable("dish", function(tbl) {
    tbl.increments();
    tbl.string("name").notNullabe();
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists("cohorts");
};
