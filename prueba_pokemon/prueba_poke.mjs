import axios from "axios";

const fetchPokemonA = async () => {
  try {
    const response = await fetch("https://pokeapi.co/api/v2/pokemon/1/");
    const allpokemon = await response.json();
    return allpokemon;
  } catch (error) {
    console.log(error);
  }
};

//Ahora con axios

const axiosPokemon = async () => {
  try {
    const response = await axios.get(`https://pokeapi.co/api/v2/pokemon/1/`);
    return response.data;
  } catch (error) {
    console.log(error);
  }
};

export { fetchPokemonA, axiosPokemon };
