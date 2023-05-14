const validTextLenght = document.querySelector('#validation-input');
const invalidTextLenght = validTextLenght.dataset.length;
validTextLenght.addEventListener('blur', () => {
  if (validTextLenght.value.length === Number.parseInt(invalidTextLenght, 10)) {
    validTextLenght.classList.add('valid');
    validTextLenght.classList.remove('invalid');
  } else {
    validTextLenght.classList.add('invalid');
    validTextLenght.classList.remove('valid');
  }
})