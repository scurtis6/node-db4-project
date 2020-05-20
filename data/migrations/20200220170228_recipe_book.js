
exports.up = function(knex) {
  return knex.schema.createTable('recipes', tbl => {
      tbl.increments()

      tbl.string('name', 255)
      .notNullable()
      .unique();
  })
  .createTable('ingredients', tbl => {
      tbl.increments()

      tbl.string('name', 255)
      .notNullable()

      tbl.float('quantity')
      .notNullable();
  })
  .createTable('recipe_ingredients', tbl => {
      tbl.primary(['recipe_id', 'ingredient_id'])

      tbl.integer('recipe_id')
      .unsigned()
      .notNullable()
      .references('id')
      .inTable('recipes')
      .onUpdate('CASCADE')
      .onDelete('CASCADE')

      tbl.integer('ingredient_id')
      .unsigned()
      .notNullable()
      .references('id')
      .inTable('ingredients')
      .onUpdate('CASCADE')
      .onDelete('CASCADE')
  })
  .createTable('steps', tbl => {
      tbl.increments()

      tbl.integer('stepNumber')

      tbl.string('instruction')
      .notNullable();
  })
  .createTable('recipe_steps', tbl => {
    tbl.primary(['recipe_id', 'step_id'])

    tbl.integer('recipe_id')
    .unsigned()
    .notNullable()
    .references('id')
    .inTable('recipes')
    .onUpdate('CASCADE')
    .onDelete('CASCADE')

    tbl.integer('step_id')
    .unsigned()
    .notNullable()
    .references('id')
    .inTable('steps')
    .onUpdate('CASCADE')
    .onDelete('CASCADE');
  })
};

exports.down = function(knex) {
  return knex.schema.dropTableIfExists('recipe_steps')
  .dropTableIfExists('steps')
  .dropTableIfExists('recipe_ingredients')
  .dropTableIfExists('ingredients')
  .dropTableIfExists('recipes')
};
