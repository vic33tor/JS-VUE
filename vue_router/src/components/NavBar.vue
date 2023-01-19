<template>
  <nav>
    <RouterLink to="/"> Inicio </RouterLink>
    <RouterLink to="/about"> Sobre Nosotros </RouterLink>
  </nav>
</template>

<script setup>
import { RouterLink } from "vue-router";
</script>

<style scoped>
nav {
  width: 100%;
  font-size: 12px;
  text-align: center;
  margin-top: 10px;
  margin-right: 150px;
  display: flex;
  align-items: flex-start;
}
a {
  margin-right: 5px;
}
.router-link-active {
  color: gray !important;
}
.router-link-exact-active {
  color: brown;
}
</style>
