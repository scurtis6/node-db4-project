const express = require('express');

const Ingredient = require('./ingredients-model');

const router = express.Router();

// GET /api/ingredients/:id/recipes: all recipes in the system that utilize a single ingredient
router.get('/:id/recipes', async (req, res) => {
    const { id } = req.params;

    try {
        const recipes = await Ingredient.getRecipesByIngredients(id)
        res.json(recipes)
    }
    catch (err) {
        console.log(err)
        res.status(500).json({ error: 'Failed to get recipe by ingredient' })
    }
})

module.exports = router;