import { fetchPokemon, fetchPokemonA, axiosPokemon } from './pokemon.mjs';
//async await
console.log("Con async-await");
const pokemonFetch = await fetchPokemonA();
console.log(pokemonFetch);

//then catch
fetchPokemon();

//con axios

console.log(await axiosPokemon(10));
