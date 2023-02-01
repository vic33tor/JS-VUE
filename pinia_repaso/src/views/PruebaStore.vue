<script setup>
import { useCounterStore } from "@/stores/counter.js";
import { ref } from "vue";
const contador = useCounterStore();
const valor = ref(0);
const modificaValor = () => {
  contador.cambiaValor(valor.value);
  valor.value = "";
};
</script>

<template>
  <div>
    <h1>Prueba Store</h1>
    <h2>El valor del contador es {{ contador.dameCount }}</h2>
    <input v-model="valor" @keyup.enter="modificaValor()" />
    <button @click="contador.increment()">Incrementa</button>
    <button @click="contador.increment()">Duplica</button>
  </div>
</template>

<style scoped></style>
