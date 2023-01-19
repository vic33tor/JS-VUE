import datos from './datos2.json' assert {type: 'json'};
const chinos = datos
.filter(x => x.pais == "China" && x.anio_coche ==  1993)
.map(x => parseFloat(x.precio_coche.substring(1)))
.reduce((previousValue, currentValue) => previousValue + currentValue,
0);
console.log(chinos);

const sudafrica = datos.filter(x => x.pais == "South Africa")
const sudafrica_anho = sudafrica.map(x=> x.anio_coche);
const resultado2 = sudafrica.filter(x => x.anio_coche == Math.max(...sudafrica_anho)).map(y => y.cuenta_bancaria);
console.log(resultado2);