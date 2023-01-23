const btn = document.getElementById("btnEnviar");
btn.addEventListener("click", () => {
  const lista = document.getElementById("lista");
  const nombre = document.getElementById("nombre").value;
  const raza = document.getElementById("raza").value;
  document.getElementById("nombre").focus();
  document.getElementById("nombre").value = "";
  document.getElementById("raza").value = "";
  const li1 = document.createElement("li");
  const li2 = document.createElement("li");
  li1.textContent = "1-" + nombre;
  li2.textContent = "2-" + raza;
  lista.appendChild(li1);
  lista.appendChild(li2);
});
