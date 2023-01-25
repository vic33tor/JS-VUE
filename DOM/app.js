import { dameDocs, ondameDocs } from "./firebase.js";
const btn = document.getElementById("btnEnviar");
const list = document.getElementById("lista-mascotas");
/*window.addEventListener("DOMContentLoaded", async () => {
  let html = "";
  const docs = await dameDocs("Mascotas");
  docs.forEach((doc) => {
    const { Nombre, Raza } = doc.data();
    const id = doc.id;
    html += `
          <div>
              <p> Name ${Nombre} </p>
              <p> Race ${Raza}</p>
          </div>
      `;
  });
  list.innerHTML = html;
});*/
window.addEventListener("DOMContentLoaded", async () => {
  let html = "";
  await ondameDocs("Mascotas", (docs) => {
    docs.forEach((doc) => {
      const { Nombre, Raza } = doc.data();
      const id = doc.id;
      html += `
          <div>
              <p> Name ${Nombre} </p>
              <p> Race ${Raza}</p>
          </div>
      `;
    });
    list.innerHTML = html;
  });
});

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
