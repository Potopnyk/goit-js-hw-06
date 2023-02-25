const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

ingredients.forEach(el => {
  const liEl = document.createElement('li');
  console.log(liEl);
  liEl.classList.add('item');
  liEl.textContent = el;
  const list = document.querySelector('#ingredients');
list.appendChild(liEl);
});

// const list = document.querySelector('.ingredients');
// list.appendChild(liEl);
// const potatoesEl = document.createElement('li');
// potatoesEl.classList.add('item');
// potatoesEl.textContent = 'Potatoes';


// const mushroomsEl = document.createElement('li');
// mushroomsEl.classList.add('item');
// mushroomsEl.textContent = 'Mushrooms';


// const garlicEl = document.createElement('li');
// garlicEl.classList.add('item');
// garlicEl.textContent = 'Garlic';


// const tomatosEl = document.createElement('li');
// tomatosEl.classList.add('item');
// tomatosEl.textContent = 'Tomatos';


// const herbsEl = document.createElement('li');
// herbsEl.classList.add('item');
// herbsEl.textContent = 'Herbs';


// const condimentsEl = document.createElement('li');
// condimentsEl.classList.add('item');
// condimentsEl.textContent = 'Condiments';


// const ingredientsEl = document.querySelector('#ingredients');

// ingredientsEl.append(potatoesEl,
//   mushroomsEl, garlicEl,
//   tomatosEl, herbsEl, condimentsEl)


// console.log(potatoesEl)
// console.log(mushroomsEl)
// console.log(garlicEl)
// console.log(tomatosEl)
// console.log(herbsEl)
// console.log(condimentsEl)