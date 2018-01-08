const favicon = require('serve-favicon');
const logger = require('morgan');
const cookieParser = require('cookie-parser');
const bodyParser = require('body-parser');
const express = require('express');
const socket = require('./socket');
const path = require('path');
const http = require('http');

const app = express();

app
  .use(favicon(path.join(__dirname, 'public', 'favicon.ico')))
  .use(logger('dev'))
  .use(bodyParser.json())
  .use(bodyParser.urlencoded({ extended: false }))
  .use(cookieParser())

  .use('/public', express.static('public'))
  .use('/dist', express.static('dist'))

  .use('/ai', require('./routes/ai'))
  .use('/api', require('./routes/api'))
  .use('*', (req, res) => res.sendFile('index.html', { "root": __dirname }))

  .use(require('./errors/not-found'))
  .use(require('./errors/error'));

var server = http.createServer(app);

server.listen(process.env.PORT || '3000');
socket.init(server);


