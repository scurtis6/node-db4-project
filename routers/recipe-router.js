const express = require('express');

const Recipe = require('./recipes-model');

const router = express.Router();

// GET /api/recipes/: all recipes (without details about ingredients or steps)
router.get('/', async (req, res) => {
    try {
        const recipes = await Recipe.getRecipes()
        res.json(recipes)
    } 
    catch (err) {
        res.status(500).json({ error: 'Failed to get recipes' })
    } 
});

// GET /api/recipes/:id/shoppingList: a list of ingredients and quantites for a single recipe
router.get('/:id/shoppinglist', async (req, res) => {
    const { id } = req.params;

    try {
      const shoppinglist = await Recipe.getShoppingList(id);
      res.json(shoppinglist);
    } 
    catch (err) {
        console.log(err)
      res.status(500).json({ error: 'Failed to get shoppinglist' });
    }
});

// GET /api/recipes/:id/instructions: a correctly ordered list of how to prepare a single recipe
router.get('/:id/instructions', async (req, res) => {
    const { id } = req.params;

    try {
        const instructions = await Recipe.getInstructions(id)
        res.json(instructions)
    }
    catch (err) {
        console.log(err)
        res.status(500).json({ error: 'Failed to get instructions' })
    }
})

// GET /api/ingredients/:id/recipes: all recipes in the system that utilize a single ingredient

module.exports = router;