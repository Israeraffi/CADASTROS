const users = JSON.parse(localStorage.getItem("users")
  ) || [];
const pesquisar = document.getElementById("pesquisar");
const fund_tela = document.getElementById("fundo-tela");
const pesquisar_pes = document.getElementById("name");
const pes_name = document.getElementById("pes_name");
const bloco = document.getElementById("p_users")

if (users.length === 0){
  bloco.style.display = "none";
  
} 

function renderUsers(lista) {
  document.getElementById("p_users").textContent = JSON.stringify(
    lista,
    null,
    2,
  );
}

renderUsers(users);

pesquisar_pes.addEventListener("input", (e) => {
  const value = pesquisar_pes.value.toLowerCase();

  const filteredUsers = users.filter((user) =>
    user.name.toLowerCase().includes(value),
  );

  renderUsers(filteredUsers);
});

