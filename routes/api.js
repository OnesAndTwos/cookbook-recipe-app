var express = require('express');
var router = express.Router();

const recipeRepository = require('../repositories/recipeRepository');

router.get('/search', (req, res) => {
  res.json(recipeRepository.search(req.query.q));
});

router.get('/recipe/:id', (req, res) => {
  var recipe = recipeRepository.get(req.params.id);

  if(recipe) {
    res.json(recipe);
  } else {
    res.status(404).json({ status: 404, message: "Not found" })
  }

});

module.exports = router;
