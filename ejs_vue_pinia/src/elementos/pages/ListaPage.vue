<script setup>
import { useDatosStore } from "@/stores/DatosForm";
const datos = useDatosStore();
</script>

<template>
  <div>
    <ul>
      <li v-for="(el, idx) in datos.getLista" :key="idx">
        {{ el.nombre }} {{ el.apellido1 }} {{ el.apellido2 }}
      </li>
    </ul>
  </div>
</template>

<style scoped></style>
