import { createApp } from "vue";
import App from "./App.vue";
import { borraLocalStorage } from "@/shared/LocalStorage/LocalStorage";

import router from "./router";

import "./assets/main.css";

const app = createApp(App);

app.use(router);

app.mount("#app");
/*window.onbeforeunload = function () {
  localStorage.removeItem("permitido");
  return "";
};*/
