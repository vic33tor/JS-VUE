import { ref, computed } from "vue";
import { defineStore } from "pinia";

export const useCounterStore = defineStore("counter", () => {
  const personasCheck = ref([]);
  const getPersonas = computed(() => personasCheck.value);
  function setPersonas(personas) {
    personasCheck.value = personas;
  }

  return { personasCheck, getPersonas, setPersonas };
});
