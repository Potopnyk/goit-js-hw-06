const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

const list = document.querySelector('#ingredients');

const arrayLi = [];

ingredients.forEach(el => {
  const liEl = document.createElement('li');
  console.log(liEl);
  liEl.classList.add('item');
  liEl.textContent = el;
  arrayLi.push(liEl)
  
});
list.append(...arrayLi);