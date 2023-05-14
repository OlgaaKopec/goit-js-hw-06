const loginForm = document.querySelector('.login-form');

loginForm.addEventListener('submit', (event) => {
  event.preventDefault(); 

  const emailInput = loginForm.elements.email;
  const passwordInput = loginForm.elements.password;

  if (emailInput.value === '' || passwordInput.value === '') {
    alert('Not all fields filled!');
    return;
  }

  const formData = {
    email: emailInput.value,
    password: passwordInput.value,
  };

  event.currentTarget.reset()
})
