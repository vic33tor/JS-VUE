import { PATHS } from "./routes.js";

//Leemos todos los botones

const actualizoContent = (url) => {
  //Si no encontramos la url devolvemos nuestra url de error
  const { template, path } = PATHS[url] || PATHS["ERROR"];
  CONTENIDO.innerHTML = template;
  window.history.pushState({}, "", path);
};

const btnsURL = document.querySelectorAll(".boton-url");

let CONTENIDO = document.getElementById("content");

window.addEventListener("DOMContentLoaded", () => actualizoContent("home"));

btnsURL.forEach((btn) =>
  btn.addEventListener(
    "click",
    ({
      target: {
        dataset: { url },
      },
    }) => actualizoContent(url)
  )
);
