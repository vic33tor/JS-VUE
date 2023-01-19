const superHeroes = [ 
	{nombre:'Batman', tipo:'DC'},
	{nombre:'Linterna Verde', tipo:'DC'},
	{nombre:'Lobezno', tipo:'Marvel'},
	{nombre:'Spiderman', tipo:'Marvel'},
	];

const fetch = (tipo, lista, tiempo=2000) => {
	return new Promise((resolve, reject) => {
        setTimeout(() => {
		if(tipo == "DC" || tipo == "Marvel"){
            resolve(lista.filter(x => x.tipo==tipo));
        }
        else{
            reject("Posicion no disponible");
        }
},tiempo);
});
}
fetch("Marvel", superHeroes)
	.then(data => console.log(data))
	.catch(error => console.log(error))
	.finally(()=> console.log("esto ha terminado"))