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

  lista.forEach((user) => {
    bloco.innerHTML += `
      <p class="table">
        [
          {
            Id: ${user.id}, 
            Funcionário: ${user.name},
            E-mail: ${user.email}, 
            Idade: ${user.idade},
            Cargo: ${user.cargo}
          }
        ]

        <button class="editar_user">
          Editar
        </button>   <button class="excluir_user">
          Excluir
        </button> 

        
      </p>
    `;
  });
}

renderUsers(users);

pesquisar_pes.addEventListener("input", (e) => {
  const value = pesquisar_pes.value.toLowerCase();

  const filteredUsers = users.filter((user) =>
    user.name.toLowerCase().includes(value),
  );

  renderUsers(filteredUsers);
});
