<script setup>
import NavBar from "@/elementos/components/NavBar.vue";
</script>

<template>
  <header>
    <NavBar titulo="Sub Menú" :links="['SubMenu 1', 'SubMenu 2']" />
  </header>
  <main>
    <RouterView />
  </main>
</template>

<style scoped></style>
