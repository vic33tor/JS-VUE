<template>
  <div>
    <MiSaludo Nombre="Victor" Apellido="Gil" />
    <MiLista :Tabla="filtrar" />
    <input v-model="filtro" type="text" />
    <BotonAngel Palabra="hola" />
  </div>
</template>

<script>
import MiSaludo from "@/components/MiSaludo.vue";
import MiLista from "@/components/MiLista.vue";
import BotonAngel from "@/components/BotonAngel.vue";
export default {
  name: "App",
  components: { MiSaludo, MiLista, BotonAngel },
  data() {
    return {
      personas: ["Juan", "Luis", "Alberto", "Angel"],
      filtro: "",
    };
  },
  computed: {
    filtrar() {
      if (this.filtro != "") {
        return this.personas.filter(
          (x) =>
            x.substring(0, this.filtro.length).toLowerCase() ==
            this.filtro.toLowerCase()
        );
      } else {
        return this.personas;
      }
    },
  },
};
</script>

<style scoped></style>
