//Vamos a trabajar con estas funciones para leer y escribir en el localStorage
export const leeLocalStorage = (clave) => localStorage.getItem(clave);
export const escribeLocalStorage = (clave, valor) =>
  localStorage.setItem(clave, valor);
export const borraLocalStorage = (clave) => localStorage.removeItem(clave);

//Esta va a ser nuestra función de guarda para permitirnos el acceso o no a todas las rutas
export const estaPermitido = () => leeLocalStorage("permitido") === "Sí";
//Esta función va a ser nuestra función de guarda para no permitir el acceso a algunas rutas
export const estaPermitidoAalgunos = (to, from, next) =>
  estaPermitido() ? next() : next({ name: "SubMenu 2" });
