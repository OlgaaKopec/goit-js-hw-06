
const categories = document.querySelectorAll('ul#categories li.item');
console.log(`Number of categories: ${categories.length}`);

categories.forEach(item => {
    const category = item.querySelector('h2').textContent;
    const elementsOfCategory = item.querySelectorAll('li').length;
console.log(`Category: ${category}`)
console.log(`Elements: ${elementsOfCategory}`)
})
