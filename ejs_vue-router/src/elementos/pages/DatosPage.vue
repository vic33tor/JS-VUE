<script setup>
import { useRoute } from "vue-router";
import { axiosUsuario } from "../../shared/API/consulta";
const route = useRoute();
console.log(route.fullPath);
console.log(route.name);
console.log(route.query.apellido1);
axiosUsuario(route.params.nombre, route.query.apellido1, route.query.apellido2);
</script>

<template>
  <div>
    <h1>Usuario: {{ route.params.nombre }}</h1>
    <h1>Apellido1: {{ route.query.apellido1 }}</h1>
    <h1>Apellido2: {{ route.query.apellido2 }}</h1>
  </div>
</template>

<style scoped></style>
