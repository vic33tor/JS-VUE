<script setup>
//Nuestro store de permisos
import { usePermisosStore } from "@/stores/Permisos";
const permisos = usePermisosStore();
</script>
<template>
  <div>
    <h1>SubMenu2</h1>
    <button @click="permisos.cambioPermiso(true)">Permite</button>
    <button @click="permisos.cambioPermiso(false)">No Permite</button>
  </div>
</template>
<style scoped></style>
