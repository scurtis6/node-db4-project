
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('recipe_steps').truncate()
    .then(function () {
      // Inserts seed entries
      return knex('recipe_steps').insert([
        {recipe_id: 1, step_id: 1},
        {recipe_id: 1, step_id: 2},
        {recipe_id: 1, step_id: 3},
        {recipe_id: 2, step_id: 4},
        {recipe_id: 2, step_id: 5},
        {recipe_id: 2, step_id: 6},
        {recipe_id: 3, step_id: 7},
        {recipe_id: 3, step_id: 8},
        {recipe_id: 3, step_id: 9},
        {recipe_id: 3, step_id: 10}
      ]);
    });
};
