const http = require('http')
const mongoose = require('mongoose');

const app = require('./src/app');
const config = require('./src/config');

mongoose.connect('mongodb://localhost/test', { useNewUrlParser: true });

const server = http.createServer(app);

server.on('error', (err) => {
  console.log(err);
});

server.listen(config.port, () => {
  console.log('Server started on port ' + config.port);
});
