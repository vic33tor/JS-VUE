<template>
  <div>
    <ul>
      <li v-for="(elemento, index) in Tabla" :key="index">
        <span> {{ elemento }}</span>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "MiLista",
  props: {
    Tabla: {
      type: Array,
      required: true,
    },
  },
};
</script>

<style scoped></style>
