const fontSizeChange = document.querySelector('#font-size-control')
const text = document.querySelector('#text')


fontSizeChange.addEventListener('input', () => {
    text.style.fontSize = fontSizeChange.value +'px';
  })
