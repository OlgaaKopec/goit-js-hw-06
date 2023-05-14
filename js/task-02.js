const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];
const list = document.querySelector('#ingredients')

ingredients.forEach((element) => {
const li = document.createElement("li")
li.textContent = element

list.classList.add('element')

list.appendChild(li)
})