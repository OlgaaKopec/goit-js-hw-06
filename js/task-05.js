const userName = document.querySelector('#name-input')
const userNoName = document.querySelector('#name-output')

userName.addEventListener('input', () => {
    if (userName.value) {
      userNoName.textContent = userName.value;
    } else {
      userNoName.textContent = 'Anonymous';
    }
  })