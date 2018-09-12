function getRandom() {
  return Math.random();
}

function getRandomArbitrary(min, max) {
  return Math.random() * (max - min) + min;
}

function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min)) + min; //The maximum is exclusive and the minimum is inclusive
}

function getRandomIntInclusive(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min; //The maximum is inclusive and the minimum is inclusive
}

const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

function jouer() {
  if (essais.length) {
    console.log('Vous avez déjà joué : ' + essais.join(' - '));
  }

  rl.question('Quel est le nombre ? ', (answer) => {

    const entierSaisi = parseInt(answer);

    if (isNaN(entierAlea)) {
      console.log('Erreur: il faut saisir un nombre');
      return jouer();
    }

    essais.push(entierSaisi);

    if (entierSaisi > entierAlea) {
      console.log('Trop grand');
      return jouer();
    }

    if (entierSaisi < entierAlea) {
      console.log('Trop petit');
      return jouer();
    }

    console.log('Gagné');
    rl.close();
  });


}

const entierAlea = getRandomIntInclusive(0, 100);
const essais = [];
jouer();

// call stack
// ^
// |
// |                           question
// |           question        jouer           rl.close
// |req - ci - jouer     ..... =>        ....  =>
// +---------------------------ENTREE----------ENTREE---------> temps
//

