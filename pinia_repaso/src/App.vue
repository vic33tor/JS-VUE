<script setup>
import { RouterView } from "vue-router";
import NavBar from "@/components/NavBar.vue";
import CabeceraPrincipal from "@/components/CabeceraPrincipal.vue";
</script>
<template>
  <CabeceraPrincipal titulo="Mi práctica favorita" />
  <NavBar :links="[
    'Inicio',
    'Sobre Nosotros',
    'Prueba Store',
    'Prueba Store2',
    'Listado',
    'Acciones Listado',
    'Iniciar Sesión'
    ]" />

  <div id="principal">
    <div id="contenedor">
      <RouterView />
    </div>
  </div>
</template>


<style scoped>
header {
  line-height: 1.5;
  max-height: 100vh;
}

.logo {
  display: block;
  margin: 0 auto 2rem;
}

nav {
  width: 100%;
  font-size: 12px;
  text-align: center;
  margin-top: 2rem;
}

a.router-link-exact-active {
  color: var(--color-text);
}

a.router-link-exact-active:hover {
  background-color: transparent;
}

a {
  display: inline-block;
  padding: 0 1rem;
  border-left: 1px solid var(--color-border);
}

a:first-of-type {
  
  border: 0;
}
#principal {
    display: flex;
    justify-content: center;
}
#contenedor {
    align-self: center;
    border-style: solid;
    width: 80%;
    padding: 10%;

}
#cabecera {
  width: 100%;
  padding: 1em;
  font-size: 140%;
  position: absolute;
  top: 100vh;
  left: 0;
  transition: opacity .2s ease-in-out;
  text-align: center;
}
#cabecera h1 {
  font-weight: 600;
  display: inline;
  margin: 0;
  padding: 0;
  font-size: inherit;
}
</style>
