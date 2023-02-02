import {
  dameDocs,
  ondameDocs,
  anadeMascota,
  deleteMascota,
  getMascota,
  editarMascota,
} from "./firebase.js";
const btnEnviar = document.getElementById("btnEnviar");
const list = document.getElementById("lista-mascotas");
const btnCancelar = document.getElementById("boton-cancelar");
let editando = false;
let id_global = "";

btnCancelar.addEventListener("click", () => {
  btnCancelar.style.visibility = "hidden";
  btnEnviar.innerHTML = "Enviar";
  editando = false;
  document.getElementById("nombre").value = "";
  document.getElementById("raza").value = "";
});
//getDocs
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
//onSnapShot
window.addEventListener("DOMContentLoaded", async () => {
  await ondameDocs("Mascotas", (docs) => {
    let html = "";
    docs.forEach((doc) => {
      const { Nombre, Raza } = doc.data();
      const id = doc.id;
      html += `
          <div>
              <p> Name ${Nombre} </p>
              <p> Race ${Raza}</p>
              <button class="btn-eliminar" data-id="${id}">Eliminar</button>
              <button class="btn-modificar" data-id="${id}">Modificar</button>
          </div>
      `;
    });
    list.innerHTML = html;
    const btnsEliminar = list.querySelectorAll(".btn-eliminar");

    btnsEliminar.forEach((btn) =>
      btn.addEventListener("click", async (e) => {
        console.log(e.target.dataset.id);
        await deleteMascota("Mascotas", e.target.dataset.id);
      })
    );

    const btnsModificar = list.querySelectorAll(".btn-modificar");

    btnsModificar.forEach((btn) =>
      btn.addEventListener("click", async (e) => {
        console.log("Modificando");
        const doc = await getMascota("Mascotas", e.target.dataset.id);
        const { Nombre, Raza } = doc.data();
        document.getElementById("nombre").value = Nombre;
        document.getElementById("raza").value = Raza;
        id_global = e.target.dataset.id;
        editando = true;
        btnCancelar.style.visibility = "visible";
        btnEnviar.innerHTML = "Actualizar";
      })
    );
  });
});

btnEnviar.addEventListener("click", () => {
  const Nombre = document.getElementById("nombre").value;
  const Raza = document.getElementById("raza").value;
  if (editando) {
    editarMascota("Mascotas", id_global, { Nombre, Raza });
    editando = false;
    btnCancelar.style.visibility = "hidden";
    btnEnviar.innerHTML = "Enviar";
  } else {
    anadeMascota("Mascotas", { Nombre, Raza });
  }
  document.getElementById("nombre").focus();
  document.getElementById("nombre").value = "";
  document.getElementById("raza").value = "";
});
