
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('steps').truncate()
    .then(function () {
      // Inserts seed entries
      return knex('steps').insert([
        {id: 1, stepNumber: 1, instruction: 'Dissolve bouillon in water'},
        {id: 2, stepNumber: 2, instruction: 'Combine the cornstarch and soy sauce until smooth; add to bouillon'},
        {id: 3, stepNumber: 3, instruction: 'Set aside'},
        {id: 4, stepNumber: 4, instruction: 'Toss beef with garlic, ginger and pepper'},
        {id: 5, stepNumber: 5, instruction: 'In a large skillet or wok over medium-high heat, stir-fry beef in 1 tablespoon oil until meat is no longer pink; remove and keep warm'},
        {id: 6, stepNumber: 6, instruction: 'Heat remaining 1 tablespoon oil; stir-fry vegetables until crisp-tender'},
        {id: 7, stepNumber: 7, instruction: 'Stir soy sauce mixture and add to the skillet; bring to a boil'},
        {id: 8, stepNumber: 8, instruction: 'Cook and stir for 2 minutes'},
        {id: 9, stepNumber: 9, instruction: 'Return meat to pan and heat through'},
        {id: 10, stepNumber: 10, instruction: 'Serve with rice'}
      ]);
    });
};
