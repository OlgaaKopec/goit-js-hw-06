const counterValue = document.getElementById('value')
let counter = 0

const incrementBtn = document.querySelector('[data-action="increment"]')
const decrementBtn = document.querySelector('[data-action="decrement"]')
    decrementBtn.addEventListener('click', () => {
        counter--;
        counterValue.textContent = counter
    })

    incrementBtn.addEventListener('click', () => {
    counter++;
    counterValue.textContent = counter
})