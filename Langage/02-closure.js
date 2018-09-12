function externe(msg) {
  // msg = null; pour libérer la mémoire (si msg est volumineux)
  function interne() {
    console.log(msg);
  }
  return interne;
}

const helloFct = externe('Hello');
helloFct();
// call stack
// ^
// |
// |
// |
// |externe - interne
// +---------------------------> temps

// Sans closure
// Dans 1s : 3 3 3
for (var i = 0; i < 3; i++) {
  setTimeout(function() {
    console.log(i);
  }, 1000);
}

// Avec closure
// Dans 1s : 0 1 2
for (var i = 0; i < 3; i++) {
  setTimeout(externe(i), 1000);
}

// Avec closure
// Dans 1s : 0 1 2
for (let i = 0; i < 3; i++) {
  setTimeout(function() {
    console.log(i);
  }, 1000);
}
