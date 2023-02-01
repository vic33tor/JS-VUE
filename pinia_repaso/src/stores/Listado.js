import { ref, computed } from "vue";
import { defineStore } from "pinia";

export const useListadoStore = defineStore("listado", () => {
  const lista = ref([0, 1, 2, 3]);
  const ultimo = computed(() => lista.value[lista.value.length - 1]);
  const eliminaElemento = (elemento) => {
    lista.value = lista.value.filter((el) => el != elemento);
  };
  const anadeElemento = (elemento) => lista.value.push(elemento);

  return {
    lista,
    ultimo,
    eliminaElemento,
    anadeElemento,
  };
});
