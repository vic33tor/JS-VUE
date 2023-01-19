<script setup>
import { escribeLocalStorage } from "@/shared/LocalStorage/LocalStorage";
</script>

<template>
  <div>
    <h1>SubMenu2</h1>
    <button @click="escribeLocalStorage('permitido', 'Sí')">Permite</button>
    <button @click="escribeLocalStorage('permitido', 'No')">No Permite</button>
  </div>
</template>

<style scoped></style>
