// 'use strict';

global.firstName = 'Globule';

const contact = {
  firstName: 'Romain'
};

function hello(p1, p2) {
  return `Bonjour ${p1}, ${p2} je m'appelle ${this.firstName}`;
}

console.log(hello('Jean', 'Eric')); // erreur en mode strict, globule en sloppy
console.log(hello.call(contact, 'Jean', 'Eric')); // Romain
console.log(hello.apply(contact, ['Jean', 'Eric'])); // Romain
console.log(hello.call(contact, ...['Jean', 'Eric'])); // Romain

/*
Function.prototype.bind = function(applyThis) {
  return function(...args) {
    this.call(applyThis, ...args);
  };
};
*/

const helloContact = hello.bind(contact);
console.log(helloContact('Jean', 'Eric'));

// Bidouille de JS pour appeler reduce sur arguments
function sum() {
  return Array.prototype.reduce.call(arguments, (a, b) => a + b);
}

console.log(sum(1, 2, 3)); // 6
