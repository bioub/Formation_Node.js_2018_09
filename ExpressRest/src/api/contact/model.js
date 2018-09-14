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
