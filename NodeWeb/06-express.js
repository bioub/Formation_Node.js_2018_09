const express = require('express');

const app = express();

app.get('/', (req, res, next) => {
  res.setHeader('Content-type', 'text/plain');
  res.send('Home');
});

app.get('/hello/:name', (req, res, next) => {
  res.send(`Hello ${req.params.name}`);
});

app.get('/api/contacts', (req, res, next) => {
  res.json([{firstName: 'A'}]);
});

app.get('/serve/package.json', (req, res, next) => {
  res.sendFile(__dirname + '/package.json');
});

app.listen(8080, () => {
  console.log('Server started');
});
