<template>
  <div>
    {{ valorInicial[0].nombre }}
  </div>
</template>

<script setup>
const props = defineProps({
  valorInicial: {
    type: Object,
  },
});
</script>

<style lang="scss" scoped></style>
