<template>
  <div class="w-full sm:max-w-md p-5 mx-auto">
    <div class="mb-4">
      <label class="block mb-1" for="cajaEntrada">{{ this.etiqueta }}</label>
      <input
        ref="input"
        v-model="entrada"
        id="personaje"
        type="text"
        name="CajaEntrada"
        class="py-2 px-3 border border-gray-300 focus:border-red-300 focus:outline-none focus:ring focus:ring-red-200 focus:ring-opacity-50 rounded-md shadow-sm disabled:bg-gray-100 mt-1 block w-full"
        @keydown.enter="enviaEntrada"
      />
    </div>
  </div>
</template>

<script>
export default {
  name: "Entrada",
  emits: ["enviaRespuesta"],
  props: {
    etiqueta: {
      type: String,
    },
    blanquear: {
      type: Boolean,
      default: true,
    },
  },
  data() {
    return {
      entrada: "",
    };
  },
  methods: {
    enviaEntrada() {
      this.$emit("enviaRespuesta", this.entrada);
      if (this.blanquear) this.entrada = "";
      this.$refs.input.focus();
    },
  },
};
</script>

<style scoped></style>
