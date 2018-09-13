const net = require('net');

const server = net.createServer();

server.once('listening', () => {
  console.log('Server started !');
});

server.on('connection', (socket) => {
  socket.pipe(process.stdout);

  socket.write('HTTP/1.1 200 OK\r\n');
  socket.write('Content-type: text/plain\r\n');
  socket.write('\r\n');
  socket.write('Hello Node.js\r\n');
  socket.end(); // OBLIGATOIRE
});

server.on('error', (err) => {
  console.log(err);
});

server.listen(8080);
