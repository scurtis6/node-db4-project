
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('ingredients').del()
    .then(function () {
      // Inserts seed entries
      return knex('ingredients').insert([
        {id: 1, name: 'teaspoon beef bouillon granules', quantity: 1},
        {id: 2, name: 'cup boiling water', quantity: 1},
        {id: 3, name: 'tablespoon cornstarch', quantity: 2},
        {id: 4, name: 'garlic clove', quantity: 1},
        {id: 5, name: 'teaspoon ground ginger', quantity: 1},
        {id: 6, name: 'tablespoon canola oil', quantity: 2},
        {id: 7, name: 'green pepper', quantity: 1},
        {id: 8, name: 'cup julienned carrots', quantity:1},
        {id: 9, name: 'green onions', quantity:5},
        {id: 10, name: 'bag of rice', quantity:1}
        // {id: , name: '', quantity:}
      ]);
    });
};
