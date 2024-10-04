document.getElementById('cadastroForm').addEventListener('submit', function(event) {
  event.preventDefault();

  const firstName = document.getElementById('first-name').value;
  const lastName = document.getElementById('last-name').value;
  const email = document.getElementById('email').value;
  const password = document.getElementById('password').value;
  const country = document.getElementById('country').value;
  const role = document.getElementById('role').value;
  const errorMessageElement = document.getElementById('error-message');

  if (!firstName || !lastName || !email || !password || country === "" || role === "") {
    errorMessageElement.textContent = 'Por favor, preencha todos os campos corretamente.';
    return;
}

  const user = {
      firstName,
      lastName,
      email,
      password,
      country,
      role
  };

  //console.log('Dados do usuário:', user);
  localStorage.setItem('user', JSON.stringify(user));
  alert('Cadastro realizado com sucesso!');
  errorMessageElement.textContent = '';
  this.reset();
});