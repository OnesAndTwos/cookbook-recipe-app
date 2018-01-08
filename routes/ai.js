const express = require('express');
const router = express.Router();

const chatBuilder = require('./ai/chatBuilder');

const actions = {
  "search-recipe": require("./ai/search"),
  "open-recipe": require("./ai/open")
};

router.post('/', (req, res) => {
  const result = req.body.result;
  const action = result.action;
  const parameters = result.parameters;

  var resolvedAction = actions[action];

  if(resolvedAction) {
    res.json(resolvedAction(parameters));
  } else {
    console.error(`There was no resolved action for ${action}`)
    res.json(chatBuilder.renderChat("I've hit a snag. Sorry about this. You can try again"));
  }

});

module.exports = router;