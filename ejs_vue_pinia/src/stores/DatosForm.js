import { defineStore } from "pinia";
import { ref, computed } from "vue";

export const useDatosStore = defineStore("datos", () => {
  const nombre = ref("");

  const apellido1 = ref("");

  const apellido2 = ref("");

  const contador = ref(0);

  const lista = ref([]);

  const getNombre = computed(() => nombre.value);
  const getApellido1 = computed(() => apellido1.value);
  const getApellido2 = computed(() => apellido2.value);
  const getContador = computed(() => contador.value);
  const getLista = computed(() => lista.value);

  const guardarDatos = (nom, ape1, ape2) => {
    nombre.value = nom;
    apellido1.value = ape1;
    apellido2.value = ape2;
    contador.value++;
    lista.value.push({ nombre: nom, apellido1: ape1, apellido2: ape2 });
    console.log(lista);
  };

  return {
    guardarDatos,
    getNombre,
    getApellido1,
    getApellido2,
    getContador,
    getLista,
  };
});
