<template>
  <div>
    <button @click="escribir">{{ Palabra }}</button>
  </div>
</template>

<script>
export default {
  name: "BotonAngel",
  props: {
    Palabra: {
      type: String,
      required: true,
    },
  },
  methods: {
    escribir() {
      console.log("Hola");
    },
  },
};
</script>

<style scoped></style>
