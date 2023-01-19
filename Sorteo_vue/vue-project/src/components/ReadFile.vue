<template>
  <label>
    {{ texto }}
    <input type="file" @change="loadTextFromFile" />
  </label>
</template>

<script setup>
import { ref } from "vue";
const emits = defineEmits(["carga"]);
const props = defineProps({
  valorInicial: {
    type: String,
  },
});
const texto = ref(props.valorInicial);
function loadTextFromFile(ev) {
  const file = ev.target.files[0];
  const reader = new FileReader();
  reader.onload = (e) => emits("carga", e.target.result);
  reader.readAsText(file);
}
</script>
<style></style>
