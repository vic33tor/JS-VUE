<script setup>
import { useDatosStore } from "@/stores/DatosForm";
import { ref } from "vue";
const datos = useDatosStore();
const nombre = ref("");
const apellido1 = ref("");
const apellido2 = ref("");
</script>

<template>
  <div>
    <h1>Formulario</h1>
    <h3>Usuario</h3>
    <input v-model="nombre" />
    <h3>Apellido1</h3>
    <input v-model="apellido1" />
    <h3>Apellido2</h3>
    <input v-model="apellido2" /><br />
    <button @click="datos.guardarDatos(nombre, apellido1, apellido2)">
      Enviar
    </button>
    <h3>Registros:{{ datos.getContador }}</h3>
  </div>
</template>

<style scoped></style>
