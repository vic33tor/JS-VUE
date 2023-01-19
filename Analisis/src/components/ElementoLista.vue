<template>
  <div>
    <p>
      {{ elemento }}
      <button
        @click="eliminar"
        class="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 border border-red-700 rounded"
      >
        {{ textoBoton }}
      </button>
    </p>
  </div>
</template>

<script>
export default {
  name: "ElementoLista",
  props: {
    elemento: {
      type: String,
      required: true,
    },
    textoBoton: {
      type: String,
    },
  },
  emits: ["eliminar"],
  methods: {
    eliminar() {
      //Aquí, en breve, utilizaremos una modal para trabajar los slots....
      if (confirm(`¿Estás seguro de eliminar a ${this.elemento}?`))
        this.$emit("eliminar", this.elemento);
    },
  },
};
</script>

<style scoped></style>
