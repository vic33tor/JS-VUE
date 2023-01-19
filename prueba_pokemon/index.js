import { fetchPokemonA, axiosPokemon } from './prueba_poke.mjs';
//async await
console.log("Con async-await");
const pokemonFetch = await fetchPokemonA();
console.log(pokemonFetch);
 
//con axios

console.log(await axiosPokemon(10));
