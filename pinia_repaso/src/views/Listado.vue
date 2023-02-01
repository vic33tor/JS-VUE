<script setup>
import { useCursoStore } from "@/stores/Curso.js";
const curso = useCursoStore();
</script>

<template>
  <h1>Listado</h1>
  <ul>
    <li v-for="dato in curso.getLista" :key="dato">
      {{ dato.nombre }} <br />
      Inicio: {{ dato.fecha_inicio }}
      <button @click="dato.matriculados++">Añadir</button> <br />
      Final: {{ dato.fecha_final }}
      <button @click="dato.matriculados--">Eliminar</button><br />
      Matriculados: {{ dato.matriculados }}<br /><br />
    </li>
  </ul>
</template>

<style scoped>
button {
  margin-left: 50px;
  background-color: red;
  border: 1px solid black;
  color: white;
}
</style>
