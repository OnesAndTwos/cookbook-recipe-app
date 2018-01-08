const chatBuilder = require('./chatBuilder');
const socket = require('../../socket');

module.exports = (parameters) => {

  socket.emit('OPEN_RECIPE_FROM_SEARCH', {
    ordinal: parameters.ordinal
  });

  return chatBuilder.renderChat(
    `Opening recipe at position ${parameters.ordinal}. Hope you like it`
  );

};