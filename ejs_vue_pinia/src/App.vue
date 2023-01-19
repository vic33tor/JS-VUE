<script setup>
import { RouterView, RouterLink } from "vue-router";

import NavBar from "@/elementos/components/NavBar.vue";
</script>

<template>
  <div>
    <header>
      <NavBar
        titulo="Menú Principal"
        :links="['Inicio', 'Sobre Nosotros', 'SubMenu', 'Formulario', 'Lista']"
      />
      <RouterLink
        :to="{
          name: 'Usuario',
          params: { nombre: 'Pedro' },
          query: { apellido1: 'Pereda', apellido2: 'Mellado' },
        }"
      >
        Usuario
      </RouterLink>
    </header>
    <main>
      <RouterView />
    </main>
  </div>
</template>

<style scoped></style>
