import Horloge from './horloge';

const divElt = document.querySelector('.horloge');
const clock = new Horloge(divElt);
clock.start();

/*
document.addEventListener('click', async () => {
  const module = await import('./horloge');
  const Horloge = module.default;
  const divElt = document.querySelector('.horloge');
  const clock = new Horloge(divElt);
  clock.start();
});
*/
