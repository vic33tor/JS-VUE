const select = document.getElementById("lista");
const h2 = document.getElementById("h2");
window.addEventListener("DOMContentLoaded", async () => {
  const response = await axios.get(`http://localhost:3000/Centros`);
  response.data.map((el) => {
    let option = document.createElement("option");
    option.text = el.nombre;
    select.add(option);
  });
  h2.innerHTML = select.options[select.selectedIndex].innerText;
});
select.addEventListener("change", () => {
  h2.innerHTML = select.options[select.selectedIndex].innerText;
});
function getInput() {
  return document.getElementById("inpt").value;
}
document.getElementById("pform").addEventListener("keypress", async (e) => {
  if (e === "enter") {
    const response = await axios.post(`http://localhost:3000/Centros`, {
      nombre: getInput(),
    });
    let option = document.createElement("option");
    option.text = getInput();
    select.add(option);
  }
});
