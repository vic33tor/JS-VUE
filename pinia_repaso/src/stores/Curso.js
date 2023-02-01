import { ref, computed } from "vue";
import { defineStore } from "pinia";

export const useCursoStore = defineStore("curso", () => {
  const id = ref("");
  const nombre = ref("");
  const fecha_inicio = ref("");
  const fecha_final = ref("");
  const matriculados = ref(0);
  const lista = ref([
    {
      id: 1,
      nombre: "PHP",
      fecha_inicio: "27/02/2023",
      fecha_final: "25/05/2023",
      matriculados: 8,
    },
    {
      id: 2,
      nombre: "REACT",
      fecha_inicio: "03/03/2023",
      fecha_final: "21/05/2023",
      matriculados: 5,
    },
    {
      id: 3,
      nombre: "TOMCAT",
      fecha_inicio: "04/04/2023",
      fecha_final: "29/07/2023",
      matriculados: 10,
    },
  ]);

  const getLista = computed(() => lista.value);
  const getMatriculados = computed(() => matriculados.value);

  const eliminaElementos = (nombre) => {
    lista.value = lista.value.filter((el) => el.nombre != nombre);
    console.log(lista);
  };
  const anhadirElementos = (
    id,
    nombre,
    fecha_inicio,
    fecha_final,
    matriculados
  ) => {
    const curso_nuevo = {
      id: id,
      nombre: nombre,
      fecha_inicio: fecha_inicio,
      fecha_final: fecha_final,
      matriculados: matriculados,
    };
    console.log(curso_nuevo);
    lista.value.push(curso_nuevo);
  };

  return {
    getLista,
    getMatriculados,
    eliminaElementos,
    anhadirElementos,
  };
});
