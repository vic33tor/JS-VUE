const lista = document.querySelectorAll(".ivan");
lista.forEach((e) => console.log(e.textContent));
const modifica = document.getElementById("modifica");
//modifica.innerHTML = "<b>hola</b>";
//modifica.outerHTML = "<b>hola</b>";
modifica.innerText = "<b>hola</b>";

//Buscar dispatch event
