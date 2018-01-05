const chatBuilder = require('./chatBuilder');

const socket = require('../socket');
const repository = require('../../repositories/recipeRepository');

module.exports = (parameters) => {

  var searchResults = repository.search(parameters.searchTerm);

  socket.emit('SEARCH_RESULTS', {
    searchTerm: parameters.searchTerm,
    searchResults: searchResults
  });

  return chatBuilder.renderChat(
    `We found ${searchResults.length} recipes for that search. Showing them to you now`
  );

};