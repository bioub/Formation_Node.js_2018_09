const net = require('net');

const socket = net.connect(80, 'www.google.fr')

socket.on('connect', () => {
  console.log('Connected to google');
  socket.write('GET / HTTP/1.1\r\n');
  socket.write('Host: www.google.fr\r\n');
  socket.write('User-Agent: Bot Node.js\r\n');
  socket.write('\r\n');
});

socket.pipe(process.stdout);

