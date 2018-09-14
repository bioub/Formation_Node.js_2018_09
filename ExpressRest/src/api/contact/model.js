const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const contactSchema = new Schema({
  firstName: {
    type: String,
    required: true,
  },
  lastName: {
    type: String,
    required: true,
  },
});

module.exports = mongoose.model('Contact', contactSchema);
/*
const contacts = [{
  firstName: 'Jean',
  lastName: 'Dupont',
  id: '123',
}, {
  firstName: 'Eric',
  lastName: 'Martin',
  id: '456',
}];

exports.find = () => Promise.resolve(contacts);
exports.findById = (id) => Promise.resolve(contacts.find((c) => c.id === id));
*/
