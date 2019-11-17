exports.up = function(knex) {
  return knex.schema
    .createTable("users", table => {
      table.increments("user_id");

      table
        .text("name")
        .notNullable()
        .unique();

      table.text("phone");
    })

    .createTable("issues", table => {
      table.increments("issue_id");

      table.text("description");
      table.number("longitude");
      table.number("latitude");

      table
        .integer("user_id")
        .references("user_id")
        .inTable("schemes")
        .onUpdate("CASCADE")
        .onDelete("CASCADE");
    });
};

exports.down = function(knex) {
  return knex.schema
  .dropTableIfExists("issues")
  .dropTableIfExists("issues");
};
