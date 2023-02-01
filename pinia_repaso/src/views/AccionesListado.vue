<script setup>
import { ref } from "vue";
import { useCursoStore } from "@/stores/Curso.js";
const curso = useCursoStore();
const nombre = ref("");
</script>

<template>
  <h1>Acciones sobre el Listado</h1>
  <label>Curso a eliminar</label>
  <input
    type="text"
    v-model="nombre"
    @keyup.enter="curso.eliminaElementos(nombre)"
  /><br />

  <h2>Curso a añadir</h2>
  <label>id: </label>
  <input type="text" v-model="id_nuevo" /> <br /><br />
  <label>nombre: </label>
  <input type="text" v-model="nombre_nuevo" /> <br /><br />
  <label>fecha inicio: </label>
  <input type="text" v-model="inicio_nuevo" /> <br /><br />
  <label>fecha final: </label>
  <input type="text" v-model="final_nuevo" /> <br /><br />
  <label>matriculados: </label>
  <input type="text" v-model="matriculados_nuevo" /> <br /><br />
  <button
    @click="
      curso.anhadirElementos(
        id_nuevo,
        nombre_nuevo,
        inicio_nuevo,
        final_nuevo,
        matriculados_nuevo
      )
    "
  >
    Añadir
  </button>
</template>

<style scoped></style>
