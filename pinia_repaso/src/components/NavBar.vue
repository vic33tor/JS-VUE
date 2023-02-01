<script setup>
import { RouterLink } from 'vue-router';
const props = defineProps({
   "imagenLogo":String,
   "links":Array,
})

</script>


<template>
  <header class="header">
    <div class="logo-header">
      <a href=""><img :src="props.imagenLogo" alt="" /></a>
    </div>
    <div class="nav-menu">
      <nav>
        <RouterLink 
        v-for="link in props.links" 
        :key="link"
        :to="{ name: link }"> {{ link }}
      </RouterLink>
      </nav>
    </div>
  </header>
</template>



<style scoped>
header {
  background-color: #222;
  color: #fff;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0.5rem 2rem;
}
.logo-header img {
  width: 50px;
  height: auto;
}
.nav-menu nav {
  display: flex;
  align-items: center;
}
.nav-menu a {
  color: #fff;
  text-decoration: none;
  margin-right: 2rem;
}

.nav-menu a:last-child {
  background: #4ad295;
  padding: 0.25rem 0.75rem;
  border-radius: 0.2rem;
}

.menu-icon img {
  width: 30px;
  height: 30px;
  border-radius: 2px;
}
.router-link-active {
  color: gray !important;
}
.router-link-exact-active {
  color:red;
}
</style>
