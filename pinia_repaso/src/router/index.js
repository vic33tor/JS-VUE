import { createRouter, createWebHistory } from "vue-router";
import Inicio from "@/views/Inicio.vue";
import LoginLogout from "@/views/LoginLogout.vue";
import PruebaStore from "@/views/PruebaStore.vue";
import Listado from "@/views/Listado.vue";
import AccionesListado from "@/views/AccionesListado.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "Inicio",
      component: Inicio,
    },
    {
      path: "/Login",
      name: "Iniciar Sesión",
      component: LoginLogout,
    },
    {
      path: "/About",
      name: "Sobre Nosotros",
      component: () => import("@/views/About.vue"),
    },
    {
      path: "/PruebaStore",
      name: "Prueba Store",
      component: PruebaStore,
    },
    {
      path: "/PruebaStore",
      name: "Prueba Store2",
      component: () => import("@/views/PruebaStore2.vue"),
    },
    {
      path: "/Listado",
      name: "Listado",
      component: Listado,
    },
    {
      path: "/AccionesListado",
      name: "Acciones Listado",
      component: AccionesListado,
    },
    {
      path: "/:pathMatch(.*)*",
      redirect: () => ({ name: "Inicio" }),
    },
  ],
});

export default router;
