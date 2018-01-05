const socket = require('../socket/server');

module.exports = (parameters) => {




  socket.emit('recipe-event', { action: "OPEN_RECIPE", name: parameters.name });

  return {
    "speech": "Opening that for you now",
    "displayText": "Opening that for you now",
    "source": "cookbook"
  }
};