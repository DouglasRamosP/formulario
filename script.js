const form = document.querySelector("#form");
const userNameInput = document.querySelector("#username");
const emailInput = document.querySelector("#email");
const passwordInput = document.querySelector("#password");
const passwordConfirmationInput = document.querySelector(
  "#password-confirmation"
);

form.addEventListener("submit", (e) => {
  e.preventDefault();
  checkInputs();
});

function checkInputs() {
  const usernameValue = userNameInput.value.trim();
  const emailValue = emailInput.value.trim();
  const passwordValue = passwordInput.value.trim();
  const passwordConfirmValue = passwordConfirmationInput.value.trim();

  if (usernameValue === "") {
    setErrorFor(userNameInput, "O nome de usuário é obrigatório.");
  } else {
    setSuccessFor(userNameInput);
  }

  if (emailValue === "") {
    setErrorFor(emailInput, "O email é obrigatório.");
  } else if (!isValidEmail(emailValue)) {
    setErrorFor(emailInput, "Por favor, insira um email válido.");
  } else {
    setSuccessFor(emailInput);
  }

  if (passwordValue === "") {
    setErrorFor(passwordInput, "O senha é obrigatório.");
  } else if (passwordValue.lenght < 8) {
    setErrorFor(passwordInput, "A senha precisa ter no mínimo 8 caracteres.");
  } else {
    setSuccessFor(passwordInput);
  }

  if (passwordConfirmValue === "") {
    setErrorFor(
      passwordConfirmationInput,
      "A confirmção de senha é obrigatória."
    );
  } else if (passwordConfirmValue != passwordValue) {
    setErrorFor(passwordInput, "");
    setErrorFor(passwordConfirmationInput, "As senhas não coincidem.");
  } else {
    setSuccessFor(passwordConfirmationInput);
  }
}

function setErrorFor(input, message) {
  const formControl = input.parentElement;
  const small = formControl.querySelector("small");

  //  Adiciona a mensagem de Erro
  small.innerText = message;

  // Adiciona a classe de sucesso
  formControl.className = "form-control error";
}

function setSuccessFor(input) {
  const formControl = input.parentElement;

  // Adiciona a classe de sucesso
  formControl.className = "form-control success";
}

function isValidEmail(email) {
  // Regex simples que cobre 90% dos casos de email válidos
  const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return re.test(email);
}
