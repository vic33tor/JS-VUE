<template>
  <div class="w-full sm:max-w-md p-5 mx-auto">
    <div class="mb-4">
      <label class="block mb-1" for="cajaEntrada">{{ marcado }}</label>
      <input
        id="cajaEntrada"
        v-model="checked"
        type="checkbox"
        class="py-2 px-3 border border-gray-300 focus:border-red-300 focus:outline-none focus:ring focus:ring-red-200 focus:ring-opacity-50 rounded-md shadow-sm disabled:bg-gray-100 mt-1 block w-full"
      />
    </div>
  </div>
</template>

<script>
export default {
  name: "EntradaCheck",
  emits: ["enviaRespuesta"],
  props: {
    entrada: {
      type: String,
    },
  },
  data() {
    return {
      checked: "",
      marca: "",
    };
  },
  computed: {
    marcado() {
      this.$emit("enviaRespuesta", this.checked);
      return this.checked ? `Filtrado por ${this.entrada}` : "No Filtrado";
    },
  },
};
</script>
<style scoped></style>
