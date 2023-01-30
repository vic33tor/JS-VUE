<template>
  <header class="header">
    <div class="logo-header">
      <a href=""><img :src="props.imagen" alt="" /></a>
    </div>
    <div class="nav-menu">
      <div>
        <h1>{{ props.titulo }}</h1>
      </div>
    </div>
  </header>
</template>

<script setup>
const props = defineProps({
  "titulo":String,
  "imagen":String,
})
</script>

<style scoped>
header {
  background-color: rgb(111, 159, 151);
  color: #fff;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0.5rem 2rem;
}
.logo-header img {
  width: 50px;
  height: auto;
}
.nav-menu div {
  display: flex;
  align-items: center;
}
.nav-menu a {
  color: #fff;
  text-decoration: none;
  margin-right: 2rem;
}
.nav-menu a:hover {
  color: rgb(137, 11, 11);
}

.menu-icon img {
  width: 30px;
  height: 30px;
  border-radius: 2px;
}
</style>
