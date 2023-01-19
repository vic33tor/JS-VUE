<template>
  <div>
    <h1>{{ message }}</h1>
    <p>{{ author }}</p>
  </div>
  <hr />
  <Pokemons />
</template>

<script>
// Importo mi componente
import Pokemons from "@/components/Pokemons.vue";
export default {
  // Digo que tengo este componente, así lo renderizo
  components: { Pokemons },
  // Como me llamo
  name: "App",
  // Mis objetos de datos
  data() {
    return {
      message: "Este es el mensaje",
      author: "Este será tu nombre",
    };
  },
};
</script>

<style scoped>
h1 {
  color: blue;
}
</style>
