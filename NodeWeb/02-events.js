const { EventEmitter } = require('events');

const events = new EventEmitter();

function createUser(user) {
  // TODO validate
  // TODO write to mongodb

  // pour rendre l'event async
  process.nextTick(() => {
    events.emit('user.created', user);
  });
}

events.once('user.created', (user) => {
  console.log('Once User created ', user);
});

events.on('user.created', (user) => {
  console.log('On User created ', user);
});

createUser('Romain');
createUser('Romain');

console.log('Fin');
