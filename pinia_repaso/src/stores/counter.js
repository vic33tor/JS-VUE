import { ref, computed } from "vue";
import { defineStore } from "pinia";

export const useCounterStore = defineStore("counter", () => {
  const count = ref(0);
  const doubleCount = computed(() => count.value * 2);
  const dameCount = computed(() => count.value);
  const increment = () => count.value++;
  const cambiaValor = (nuevoValor) => {
    console.log(nuevoValor);
    isNaN(nuevoValor) ? (count.value = 0) : (count.value = nuevoValor);
  };

  return {
    //count,
    doubleCount,
    dameCount,
    increment,
    cambiaValor,
  };
});
