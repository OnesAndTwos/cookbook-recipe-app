const SocketIO = require('socket.io');

class Server {

  init(server) {
    this.io = new SocketIO(server);
  }

  emit(event, data) {
    this.io.emit(event, data);
  }

  on(event, action) {
    this.io.on(event, action);
  }

}

module.exports = new Server();