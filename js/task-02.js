const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

const listEl = document.querySelector('#ingredients');

const elemements = ingredients.map(ingridient => {
  const itemEl = document.createElement('li');
  itemEl.innerHTML = ingridient;
  itemEl.classList.add('item');

  return itemEl;
})
listEl.append(...elemements)
console.log(elemements);






// let ulList = document.getElementById("ingredients");
// const foodIngredients = ingredients.forEach(ingredient => {
//   let items = document.createElement("li");
//   items.innerHTML = ingredient;
//   ulList.append(items);
//   parent.append(...items)
// });

// console.log(foodIngredients);