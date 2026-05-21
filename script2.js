const users = JSON.parse(localStorage.getItem("users")) || [];

document.getElementById("p_users").textContent = JSON.stringify(users, null, 2);
