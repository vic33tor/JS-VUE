<template>
  <label>
    {{ this.texto }}
    <input type="file" @change="loadTextFromFile" />
  </label>
</template>

<script>
export default {
  name: "ReadFile",
  props: {
    texto: {
      type: String,
    },
  },
  methods: {
    loadTextFromFile(ev) {
      const file = ev.target.files[0];
      const reader = new FileReader();
      reader.onload = (e) => this.$emit("carga", e.target.result);
      reader.readAsText(file);
    },
  },
};
</script>
<style></style>
