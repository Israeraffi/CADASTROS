const users = JSON.parse(localStorage.getItem("users")) || [];

const form = document.getElementById("formCad");

class User {
  id;
  name;
  email;
  idade;
  cargo;

  constructor(id, name, email, idade, cargo) {
    this.id = id;
    this.name = name;
    this.email = email;
    this.idade = idade;
    this.cargo = cargo;
  }
}

form.addEventListener("submit", function (event) {
  event.preventDefault();

  // O trim serve para tirar os espaços
  const name = document.getElementById("nome").value.trim();
  const email = document.getElementById("email").value.trim();
  const dataNascimento = document.getElementById("dataNascimento").value.trim();
  const cargo = document.getElementById("cargo").value.trim();
  const id = users.length + 1;

  if (!name || !email || !dataNascimento || !cargo) {
    alert("Preencha todos os campos!");
    return;
  }

  function calcularIdade(dataNascimento) {
    const hoje = new Date();

    const nascimento = new Date(dataNascimento);

    let idade = hoje.getFullYear() - nascimento.getFullYear();

    const mesAtual = hoje.getMonth();

    const mesNascimento = nascimento.getMonth();

    const diaAtual = hoje.getDate();

    const diaNascimento = nascimento.getDate();

    if (
      mesAtual < mesNascimento ||
      (mesAtual === mesNascimento && diaAtual < diaNascimento)
    ) {
      idade--;
    }

    return idade;
  }

  const emailValido = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  if (!emailValido.test(email)) {
    alert("Digite um email válido!");
    return;
  }

  const emailExiste = users.some(
    (user) => user.email.toLowerCase() === email.toLowerCase(),
  );

  if (emailExiste) {
    alert("Esse email já está cadastrado!");
    return;
  }

  const nomeExiste = users.some(
    (user) => user.name.toLowerCase() === name.toLowerCase(),
  );

  if (nomeExiste) {
    alert("Esse usuário já existe!");
    return;
  }
  const idade = calcularIdade(dataNascimento);
  const user = new User(id, name, email, idade, cargo);

  users.push(user);

  localStorage.setItem("users", JSON.stringify(users));

  console.log(users);

  alert("Usuário cadastrado!");

  form.reset();
});
