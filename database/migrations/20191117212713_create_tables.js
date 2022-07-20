exports.up = function(knex) {
  return knex.schema
    .createTable("users", table => {
      table.increments("user_id");

      table.text("name").notNullable();

      table
        .text("username")
        .notNullable()
        .unique();

      table.text("password").notNullable();

      table.text("phone");
    })

    .createTable("issues", table => {
      table.increments("issue_id");

      table.text("description");
      table.integer("longitude");
      table.integer("latitude");

      table
        .integer("user_id")
        .references("user_id")
        .inTable("schemes")
        .onUpdate("CASCADE")
        .onDelete("CASCADE");
    });
};

exports.down = function(knex) {
  return knex.schema.dropTableIfExists("issues").dropTableIfExists("users");
};
