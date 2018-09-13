function timeout(delay) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve();
    }, delay);
  });
}

function fakeRequest(req) {
  const delay = Math.floor(Math.random() * 1001);
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve({req, delay});
    }, delay);
  });
}

timeout(1000)
  .then(() => timeout(1000))
  .then(() => console.log('2s'));

(async () => {
  await timeout(1000);
  await timeout(1000);
  console.log('2s');
})();

/* Avant les promesses pour garantir l'ordre :
let contacts, societes, cpt = 0;

fakeRequest('/api/contacts')
  .then(({req, delay}) => {
    contacts = req;
    if (++cpt >= 2) {
      console.log(contacts);
      console.log(societes);
    }
  });

fakeRequest('/api/societes')
  .then(({req, delay}) => {
    societes = req;
    if (++cpt >= 2) {
      console.log(contacts);
      console.log(societes);
    }
  });
  */

Promise.all([
  fakeRequest('/api/contacts'),
  fakeRequest('/api/societes'),
]).then(([{req: contacts}, {req: societes}]) => {
  console.log(contacts);
  console.log(societes);
})
.catch((err) => {

})


console.log('Fin');
