
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('recipes').truncate()
    .then(function () {
      // Inserts seed entries
      return knex('recipes').insert([
        {id: 1, name: 'Steak Stir Fry'},
        {id: 2, name: 'Pizza Quinoa Casserole'},
        {id: 3, name: 'Shrimp Pasta Alfredo'}
      ]);
    });
};
