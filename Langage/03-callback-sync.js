const nbs = [2, 3, 4];

// ES5 : programmation fonctionnelle sur les tableaux
nbs
  .filter((nb) => nb % 2 === 0)
  .map((nb) => nb ** 2)
  .forEach((nb) => console.log(nb));

const result = nbs.reduce((acc, nb) => acc + nb, 0);
// acc: 0, nb: 2 => 0 + 2
// acc: 2, nb: 3 => 2 + 3
// acc: 5, nb: 4 => 5 + 4
console.log(result); // 9

console.log('Fin');

// call stack
// ^
// |
// |lg   lg   lg
// |=> - => - =>
// |forEach      - log('Fin')
// +---------------------------> temps
//  2    3    4    Fin
