const db = require('../data/db-config')

module.exports = {
    getRecipesByIngredients
}
// all recipes in the system that utilize a single ingredient
function getRecipesByIngredients(id){
    /* select r.name
    from recipe_ingredients as ri
    join recipes as r on ri.ingredient_id, r.id
    where ri.ingredient_id = id */
    return db('recipe_ingredients as ri')
    .select('r.name as recipe_name', 'i.id as ingredient_id', 'i.name as ingredient_name')
    .innerJoin('ingredients as i', 'i.id', 'ri.ingredient_id')
    .innerJoin('recipes as r', 'ri.recipe_id', 'r.id')
    .where('i.id', id)
} 