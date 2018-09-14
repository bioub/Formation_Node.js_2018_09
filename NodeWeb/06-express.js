const express = require('express');

const app = express();

/**
 * @param {import('express').Request} req
 * @param {import('express').Response} res
 * @param {Function} next
 */
function authenticate(req, res, next) {
  if (req.headers.authorization !== '123') {
    res.statusCode = 401;
    return res.json({
      error: 'Unauthorized',
    });
  }
  next();
}

// Middleware de log
app.use((req, res, next) => {
  console.log(`${req.method} ${req.url}`);
  next();
});

app.get('/', (req, res, next) => {
  res.setHeader('Content-type', 'text/plain');
  res.send('Home !');
});

app.get('/hello/:name', (req, res, next) => {
  res.send(`Hello ${req.params.name}`);
});

app.get('/api/contacts', (req, res, next) => {
  res.json([{firstName: 'A'}]);
});

// app.get('/serve/package.json', authenticate);
app.get('/serve/package.json', authenticate, (req, res, next) => {
  res.sendFile(__dirname + '/package.json');
});

// Middleware d'erreur 404 de l'API
app.use('/api', (req, res, next) => {
  res.statusCode = 404;
  res.json({
    error: 'Not Found',
  });
});

// Middleware d'erreur 404 général
app.use((req, res, next) => {
  res.statusCode = 404;
  res.send('<h2>Not Found</h2>');
});

app.listen(8080, () => {
  console.log('Server started');
});
