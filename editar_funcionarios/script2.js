const users = JSON.parse(localStorage.getItem("users")) || [];
const pesquisar = document.getElementById("pesquisar");
const fund_tela = document.getElementById("fundo-tela");
const pesquisar_pes = document.getElementById("name");
const pes_name = document.getElementById("pes_name");
const bloco = document.getElementById("p_users");

if (users.length === 0) {
  bloco.style.display = "none";
}

function renderUsers(lista) {
  bloco.innerHTML = "";

  lista.forEach((user, index) => {
    bloco.innerHTML += `
      <p class="table">
        Id: ${user.id},
        Funcionário: ${user.name},
        E-mail: ${user.email},
        Idade: ${user.idade},
        Cargo: ${user.cargo}

        
          <button class="editar"
            data-index="${index}">
            Editar
          </button> <button class="excluir"
            data-index="${index}">
            Excluir
          </button>

          
        
      </p>
    `;
  });
}
// Pesquisa quando algo é inserido no input
pesquisar_pes.addEventListener("input", (e) => {
  const value = pesquisar_pes.value.toLowerCase();

  const filteredUsers = users.filter((user) =>
    user.name.toLowerCase().includes(value),
  );

  renderUsers(filteredUsers);
});

renderUsers(users);

// Excluir o usuario
document.querySelectorAll(".excluir").forEach((button) => {
  button.addEventListener("click", function () {
    const index = this.dataset.index;

    users.splice(index, 1);

    localStorage.setItem("users", JSON.stringify(users));

    renderUsers(users);
  });
});

function editarUser(index) {
  const user = users[index];

  const newName = prompt("Novo Nome:", user.name);

  const newEmail = prompt("Novo Email:", user.email);

  const newIdade = prompt("Nova Idade:", user.idade);

  const newCargo = prompt("Novo Cargo:", user.cargo);

  // Substituindo os dados
  users[index] = {
    ...user,
    name: newName,
    email: newEmail,
    idade: newIdade,
    cargo: newCargo,
  };

  localStorage.setItem("users", JSON.stringify(users));

  renderUsers(users);
}

document.querySelectorAll(".editar").forEach((button) => {
  button.addEventListener("click", function () {
    const index = this.dataset.index;

    editarUser(index);
  });
});
