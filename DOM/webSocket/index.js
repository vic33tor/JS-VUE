let miWebSocket;

const miNuevoMensaje = document.getElementById("nuevo-mensaje");
const misRespuestas = document.getElementById("respuestas");
const botonCierre = document.getElementById("cierraConexion");
const botonConecta = document.getElementById("abreConexion");
const conexiones = document.getElementById("conexiones");
const botonNuevos = document.getElementById("mostrarMsg");
const miMsg = document.getElementById("nuevos");
let lista = [];

window.addEventListener("DOMContentLoaded", async () => {
  const response = await axios.get(`http://localhost:3000/servidores`);
  response.data.map((el) => {
    let option = document.createElement("option");
    option.text = el.url;
    conexiones.add(option);
  });
});

//Controlamos la conexión a nuestro servidor WebSocket

botonCierre.addEventListener("click", () => miWebSocket.close());
botonConecta.addEventListener("click", () => {
  //Volvemos a crear el objeto y volvemos a asignar los eventos al websocket
  miWebSocket = new WebSocket(conexiones.value);
  miWebSocket.addEventListener("open", open);
  miWebSocket.addEventListener("message", message);
  miWebSocket.addEventListener("error", error);
  miWebSocket.addEventListener("close", close);
});

// Funciones
const open = () => {
  // Abre conexión
  console.log("WebSocket abierto.");
};

const message = (evento) => {
  // Se recibe un mensaje
  console.log("WebSocket ha recibido un mensaje");
  miMsg.innerHTML = "Tienes mensajes nuevos";
  lista.push(evento.data);
};
botonNuevos.addEventListener("click", () => {
  miMsg.innerHTML = "";
  lista.map((x) => {
    misRespuestas.innerHTML += x.concat("<br/>");
  });
  lista = [];
});

const error = (evento) => {
  // Ha ocurrido un error
  console.error("WebSocket ha observado un error: ", evento);
};

const close = () => {
  // Cierra la conexión
  console.log("WebSocket cerrado.");
};

const enviarNuevoMensaje = (evento) => {
  // Evento tecla Enter
  if (evento.code === "Enter") {
    // Envia mensaje por WebSockets
    miWebSocket.send(miNuevoMensaje.value);
    // Borra texto en el input
    miNuevoMensaje.value = "";
  }
};

// Evento para envia nuevo mensaje
miNuevoMensaje.addEventListener("keypress", enviarNuevoMensaje);
