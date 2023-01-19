<template>
  <div>
    <h1>Inserta un usuario y una contraseña</h1>
    <input v-model="usuario" type="text" placeholder="Usuario" /><br /><br />
    <input
      type="password"
      placeholder="Contraseña"
      v-model="contraseña"
    /><br /><br />
    <select v-model="nivel">
      <option>Administrador</option>
      <option>Usuario</option>
      <option>Programador</option>
    </select>
    <button @click="getDatos">Log in</button>
    <button @click="anhadir">Añadir</button>
    <div v-if="acceder">
      Esta en la pagina <MiPrueba :valorInicial="usuarios" />
    </div>
    <div v-else>No esta en la pagina</div>
    <div v-if="esta">El usuario ya existe</div>
  </div>
</template>

<script setup>
import { ref } from "vue";
import axios from "axios";
import MiPrueba from "./components/MiPrueba.vue";

let usuarios = ref({});
let usuario = ref("");
let contraseña = ref("");
let nivel = ref("");
let acceder = ref(false);
let esta = ref(false);

async function getDatos() {
  try {
    const response = await axios.get(
      `http://localhost:3000/usuarios/?nombre=${usuario.value}&contraseña=${contraseña.value}`
    );
    usuarios.value = response.data;
    usuarios.value.length > 0
      ? (acceder.value = true)
      : (acceder.value = false);
    usuario.value = "";
    contraseña.value = "";
  } catch (error) {
    console.log(error);
  }
}
async function anhadir() {
  try {
    const response = await axios.get(
      `http://localhost:3000/usuarios/?nombre=${usuario.value}`
    );
    usuarios.value = response.data;

    if (
      !usuarios.value.length > 0 ? (esta.value = true) : (esta.value = false)
    ) {
      // eslint-disable-next-line no-unused-vars
      const res = await axios.post(`http://localhost:3000/usuarios/`, {
        id: "",
        nombre: usuario.value,
        contraseña: contraseña.value,
        nivel: nivel.value,
      });
    }
    usuario.value = "";
    contraseña.value = "";
    nivel.value = "";
  } catch (error) {
    console.log(error);
  }
}
</script>

<style lang="scss" scoped></style>
