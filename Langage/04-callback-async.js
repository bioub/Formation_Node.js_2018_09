setTimeout(() => console.log('A'), 500);
setTimeout(() => console.log('B'), 300);
setTimeout(() => console.log('C'), 300);
setTimeout(() => console.log('D'), 0);
// setTimeout(() => console.log('E'), Math.random() * 1000);
// setTimeout(() => console.log('F'), Math.random() * 1000);

console.log('Fin');


// call stack
// ^
// |
// |
// |                                    lg      lg   lg     lg
// |st - st - st - st - log('Fin') .... => .... => - => ... =>
// +------------------------------------3ms-----300ms-------500ms---> temps
//                      Fin             D       B    C      A

// Event Loop : 4 passage
// File d'attente (0ms) : => D
// File d'attente (3ms) :
// File d'attente (300ms) : => B - => C
// File d'attente (301ms) : => C
// File d'attente (303ms) :
// File d'attente (500ms) : => A
// File d'attente (501ms) :
