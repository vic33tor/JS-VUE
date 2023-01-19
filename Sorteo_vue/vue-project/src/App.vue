<template>
  <ReadFile texto="Elige un fichero" @carga="cargaFichero" />
  <p v-if="numeroInCorrecto">No es un número par</p>
  <ul>
    <li v-for="(el, key) in fichero" :key="key">{{ el[0] }}- {{ el[1] }}</li>
  </ul>
</template>

<script setup>
import ReadFile from "@/components/ReadFile.vue";
import { ref } from "vue";
let fichero = ref([]);
let numeroInCorrecto = ref(true);

function cargaFichero(fich) {
  //Pasamos la cadena de caracteres del fichero obtenido a un array
  let auxiliar = fich.toString().trim().split("\n");
  //Si el número de elementos no es par, no podemos continuar
  if (auxiliar.length % 2 == 0) {
    numeroInCorrecto.value = false;
    //Realizamos el emparejamiento aleatorio
    fichero.value = auxiliar
      .sort(() => Math.random() - 0.5)
      .map((el, idx, arr) => (idx % 2 == 1 ? [el, arr[idx - 1]] : null))
      .filter((el) => el !== null);
  } else {
    //No ha sido un número correcto
    numeroInCorrecto.value = true;
    fichero.value = [];
  }
}
</script>
