const producto = {
    tipo:"electrodomestico",
    precio:38,
    caracteristicas:{
        potencia:25,
        consumo:32
    }
}

console.log(producto)
const producto2 = {...producto};
producto2.caracteristicas = {...producto.caracteristicas}
producto.tipo = "bombilla"
producto.caracteristicas.consumo = 20
console.log(producto);
console.log(producto2);