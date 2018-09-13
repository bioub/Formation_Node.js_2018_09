const express = require('express');

const app = express();

const contacts = [{
  firstName: 'Jean',
  lastName: 'Dupont',
  id: '123',
}, {
  firstName: 'Eric',
  lastName: 'Martin',
  id: '456',
}];


app.listen(8080, () => {
  console.log('Server started');
});
