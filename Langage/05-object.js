// Déjà de nombreux objet pré-instanciés

// JavaScript
console.log('typeof Math', typeof Math); // object
console.log('typeof JSON', typeof JSON); // object

// Node
console.log('typeof process', typeof process); // object
console.log('typeof global', typeof global); // object
console.log('typeof exports', typeof exports); // object

// Browser
console.log('typeof window', typeof window); // object
console.log('typeof document', typeof document); // object
console.log('typeof navigator', typeof navigator); // object

// Browser + Node
console.log('typeof console', typeof console); // object

// Objet en JavaScript : dictionnaire
// -> PHP : tableau associatif
// -> Java : Map
// -> C++ : HashTable
// -> Python : dict

// Les objets sont extensibles
// -> mauvaise pratique d'étendre les objets standard
// avec clé non standard
console.log('typeof Math.sum', typeof Math.sum); // undefined

// ajout des clés/valeurs
Math.sum = (a, b) => a + b;
console.log('Math.sum(1, 2)', Math.sum(1, 2)); // 3

// modifier des clés/valeurs
Math.sum = (a, b) => Number(a) + Number(b);
console.log('Math.sum(1, 2)', Math.sum(1, 2)); // 3

// supprimer des clés/valeurs
delete Math.sum;
console.log('typeof Math.sum', typeof Math.sum); // undefined

// 2 opérateurs pour accéder au contenu
console.log(Math.PI);
console['log'](Math['PI']);

// Pour créer un objet
// -> mono-instancié (sans type, méthodes possible)
// -> si simple à créer qu'on peut éviter une fonction
//    sans type / sans méthodes
// => object literal

const myMaths = {
  sum: (a, b) => Number(a) + Number(b),
  substract: (a, b) => a - b,
};

const coords1 = {
  x: 10,
  y: 20,
};

const coords2 = {
  x: 20,
  y: 30,
};

// Boucler sur les clés
for (const key in coords1) {
  console.log('key', key);
  console.log('value', coords1[key]);
}

// ES9
for (const [key, value] of Object.entries(coords1)) {
  console.log('key', key);
  console.log('value', value);
}

// JSON : object <-> string
const json = JSON.stringify(coords1);
console.log('json', json); // {"x":10,"y":20}

// Pourquoi pas de type ?
console.log(coords1 instanceof String); // false
console.log(coords1 instanceof Object); // true

// Pourquoi pas de méthode si multi instances ?
const myMaths2 = {
  sum: (a, b) => Number(a) + Number(b),
  substract: (a, b) => a - b,
};

// est-ce qu'on a la même fonction en mémoire ?
console.log(myMaths.sum === myMaths2.sum); // false


// Pour créer un objet
// -> multi instancié avec une fonction
//    sans type / sans méthodes
// => factory function

const coordsFactory = function(x, y, z) {
  z = z || 0;

  return {
    x: x,
    y: y,
    z: z,
  };
};

const coordsFactoryES6 = (x, y, z = 0) => ({x, y, z});

const coords3d = coordsFactory(10, 20);
console.log('coords3d.z', coords3d.z); // 0

// Pour créer un objet
// -> multi instancié avec une fonction
//    avec type et/ou avec méthodes
// => constructor function


function Contact(prenom) {
  this._prenom = prenom;
}

Contact.prototype.hello = function() {
  return 'Bonjour je m\'appelle ' + this._prenom;
};

/*
class Contact {
  constructor(prenom) {
    this.prenom = prenom;
  }
  hello() {
    return 'Bonjour je m\'appelle ' + this.prenom;
  }
}
console.log(typeof Contact); // function
*/

const romain = new Contact('Romain');
console.log(romain._prenom);
console.log(romain.hello()); // Bonjour je m'appelle Romain
console.log(romain.hasOwnProperty('_prenom')); // true
console.log(romain.hasOwnProperty('hello')); // false

console.log(romain instanceof Contact); // true
console.log(romain instanceof Object); // true

const eric = new Contact('Eric');
console.log(romain.hello === eric.hello); // true
