const http = require('http');

const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-type', 'text/plain');
  switch (req.url) {
    case '/':
      res.write('Home');
      break;
    case '/api/contacts':
      res.setHeader('Content-type', 'application/json');
      res.write(JSON.stringify([{firstName: 'A'}]));
      break;
    default:
      res.statusCode = 404;
      res.setHeader('Content-type', 'text/html');
      res.write('<h2>Not Found</h2>');
  }

  res.end(); // OBLIGATOIRE
});

server.once('listening', () => {
  console.log('Server started !');
});

server.on('error', (err) => {
  console.log(err);
});

server.listen(8080);
