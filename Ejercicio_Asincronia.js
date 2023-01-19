const ej = ( posicion, lista ) => {
	return new Promise((resolve, reject) => {
        setTimeout(() => {
		if(posicion<=lista.length-1){
            resolve(lista[posicion]);
        }
        else{
            reject("Posicion no disponible");
        }
},2000);
});
}
ej(2,[1,2,3])
	.then(data => console.log(data))
	.catch(error => console.log(error))
	.finally(()=> console.log("esto ha terminado"))
console.log("Estoy esperando");
console.log("Estoy esperando");
console.log("Estoy esperando");