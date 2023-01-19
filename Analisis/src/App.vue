<template>
  <Entrada v-model="anade1" etiqueta="Añade" @enviaRespuesta="recibido" />
  <Entrada etiqueta="Filtra" @enviaRespuesta="filtra" :blanquear="false" />
  <EntradaCheck :entrada="this.filtrar_por" @enviaRespuesta="ActivaFiltro" />
  <Lista
    :elementos="listaFiltered"
    cabecera="Elementos"
    subcabecera="Puedes filtrar activando el checkBox"
    @eliminar="eliminaElemento"
  />
</template>

<script>
// Importo mi componente
import Entrada from "@/components/Entrada.vue";
import Lista from "@/components/Lista.vue";
import EntradaCheck from "@/components/EntradaCheck.vue";
import "./style.css";

export default {
  // Digo que tengo este componente, así lo renderizo
  components: {
    Entrada,
    Lista,
    EntradaCheck,
  },
  // Como me llamo
  name: "App",
  // Mis objetos de datos
  data() {
    return {
      lista: [],
      anade1: "",
      filtrar_por: "",
      filtroActivo: false,
    };
  },
  methods: {
    recibido(data) {
      this.lista.push(data);
      console.log(this.lista);
    },
    filtra(data) {
      this.filtrar_por = data;
    },
    ActivaFiltro(data) {
      console.log("Hemos recibido el cambio");
      console.log("Con el valor", data);
      this.filtroActivo = data;
    },
    //Recibe de la lista el elemento a eliminar y lo hace
    eliminaElemento(data) {
      this.lista = this.lista.filter((el) => el !== data);
    },
  },
  computed: {
    listaFiltered() {
      return this.filtroActivo
        ? this.lista.filter((el) => el.includes(this.filtrar_por))
        : this.lista;
    },
  },
};
</script>

<style scoped>
h1 {
  color: blue;
}
</style>
