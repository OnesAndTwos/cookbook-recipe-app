const renderChat = (message) => {
  return {
    "speech": message,
    "displayText": message,
    "source": "BBC Cookbook"
  };
};

module.exports = {
  renderChat: renderChat
};