const db = require('../data/db-config')

module.exports = {
    getRecipes,
    getShoppingList,
    getInstructions,
}

// getRecipes(): should return a list of all recipes in the database.
function getRecipes() {
    return db('recipes')
}

// getShoppingList(recipe_id): should return a list of all ingredients and quantities for a given recipe
function getShoppingList(id) {
    /* select r.name, i.name, ri.quantity,
    from recipe_ingredients as ri
    join recipes as r on ri.recipe_id = r.id
    join ingredients as i on ri.ingredient_id = i.id
    where r.id = id */

    return db('recipe_ingredients as ri')
    .select('r.name as recipe_name', 'i.name as ingredient', 'i.quantity')
    .innerJoin('recipes as r', 'ri.recipe_id','r.id')
    .innerJoin('ingredients as i', 'ri.ingredient_id', 'i.id')
    .where('r.id', id)
}

// getInstructions(recipe_id): should return a list of step by step instructions for preparing a recipe
function getInstructions(id) {
    /* select r.name s.stepNumber, s.instruction
    from recipe_steps as rs
    join recipes as r on rs.recipe_id = r.id
    join steps as s on rs.step_id = s.id 
    where r.id = id */
    return db('recipe_steps as rs')
    .select('r.name as recipe_name', 's.stepNumber', 's.instruction')
    .innerJoin('recipes as r', 'rs.recipe_id', 'r.id')
    .innerJoin('steps as s', 's.id', 'rs.step_id')
    .where('r.id', id)
    .orderBy('s.stepNumber')
}