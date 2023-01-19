<template>
  <div class="mt-32">
    <div class="px-4 sm:px-8 max-w-5xl m-auto">
      <h1 class="text-center font-semibold text-sm">{{ cabecera }}</h1>
      <p class="mt-2 text-center text-xs mb-4 text-gray-500">
        {{ subcabecera }}
      </p>
      <ul class="border border-gray-200 rounded overflow-hidden shadow-md">
        <li
          v-for="(el, idx) in elementos"
          :key="idx"
          class="px-4 py-2 bg-white hover:bg-sky-100 hover:text-sky-900 border-b last:border-none border-gray-200 transition-all duration-300 ease-in-out"
        >
          <ElementoLista
            :elemento="el"
            textoBoton="Eliminar"
            @eliminar="eliminaElemento"
          />
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import ElementoLista from "@/components/ElementoLista.vue";
export default {
  components: {
    ElementoLista,
  },
  name: "Lista",
  props: {
    elementos: {
      type: Array,
    },
    cabecera: {
      type: String,
    },
    subcabecera: {
      type: String,
    },
  },
  //Emitirá este evento cuando reciba que hay que elminar un elemento en particular
  emits: ["eliminar"],
  mounted() {
    console.log("La montamos");
  },
  methods: {
    eliminaElemento(data) {
      this.$emit("eliminar", data);
    },
  },
};
</script>

<style lang="scss" scoped></style>
