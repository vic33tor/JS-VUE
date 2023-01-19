import { defineStore } from "pinia";
import { ref, computed } from "vue";

export const usePermisosStore = defineStore("permisos", () => {
  //El estado
  const permiso = ref(true);
  //Los getters
  const estaPermitido = computed(() => permiso.value);
  //Las acciones
  const cambioPermiso = (valor) => {
    if (permiso.value == valor) {
      alert("El permiso ya estaba cambiado");
    } else {
      permiso.value = valor;
      alert("Cambio realizado");
    }
  };

  return {
    permiso, //--> no queremos que sea pública
    estaPermitido,
    cambioPermiso,
  };
});
