<script setup>
import { ref, watch, watchEffect } from "vue";
import { useRouter } from "vue-router";
import {
  leeLocalStorage,
  borraLocalStorage,
} from "../../shared/LocalStorage/LocalStorage";
let noPermitido = ref("true");
const router = useRouter();
watchEffect(() => {
  if (leeLocalStorage("permitido") == "Sí") {
    return (noPermitido.value = false);
  } else {
    return (noPermitido.value = true);
  }
});
function cambiar() {
  borraLocalStorage("permitido");
  router.push({
    name: "Inicio",
  });
}
const enviar = () =>
  router.push({
    name: "Datos",
    params: { nombre: nombre.value },
    query: { apellido1: apellido1.value, apellido2: apellido2.value },
  });
const nombre = ref("");
const apellido1 = ref("");
const apellido2 = ref("");
</script>

<template>
  <div v-if="noPermitido">
    <h1>Log In</h1>
    <h3>Usuario</h3>
    <input v-model="nombre" />
    <h3>Apellido1</h3>
    <input v-model="apellido1" />
    <h3>Apellido2</h3>
    <input v-model="apellido2" /><br />
    <button @click="enviar">Enviar</button>
  </div>
  <div v-else>
    <button @click="cambiar">Log Out</button>
  </div>
</template>

<style scoped></style>
