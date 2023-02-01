<script setup>
import { useCounterStore } from "@/stores/counter.js";
const contador = useCounterStore();
</script>

<template>
  <div>
    <h1>Vamos a comprobar si hay conexión entre nuestros contadores</h1>
    <h2>El valor del contador es {{ contador.dameCount }}</h2>
  </div>
</template>
