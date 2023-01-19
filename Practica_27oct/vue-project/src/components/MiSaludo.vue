<template>
  <div>
    <h1>{{ Nombre }}</h1>
    <h1>{{ Apellido }}</h1>
  </div>
</template>

<script>
export default {
  name: "MiSaludo",
  props: {
    Nombre: {
      type: String,
      required: true,
    },
    Apellido: {
      type: String,
      required: true,
    },
  },
};
</script>

<style scoped></style>
