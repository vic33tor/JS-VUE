<script setup>
import { useDatosStore } from "@/stores/DatosForm";
const datos = useDatosStore();
const nombre = datos.getNombre;
const apellido1 = datos.getApellido1;
const apellido2 = datos.getApellido2;
</script>

<template>
  <div>
    <h1>Usuario: {{ nombre }}</h1>
    <h1>Apellido1: {{ apellido1 }}</h1>
    <h1>Apellido2: {{ apellido2 }}</h1>
  </div>
</template>

<style scoped></style>
