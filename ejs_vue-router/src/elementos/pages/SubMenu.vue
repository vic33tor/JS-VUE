<script setup>
import NavBar from "@/elementos/components/NavBar.vue";
</script>

<template>
  <header>
    <NavBar
      titulo="Sub Menú"
      :links="[{ name: `SubMenu 1` }, { name: `SubMenu 2` }]"
    />
  </header>
  <main>
    <RouterView />
  </main>
</template>

<style scoped></style>
