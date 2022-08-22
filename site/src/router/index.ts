import { createRouter, createWebHistory } from "vue-router";
//@ts-ignore
import HomeView from "../views/HomeView.vue";
//@ts-ignore
import BoutiqueView from "../views/BoutiqueView.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: HomeView,
    },
    {
      path: "/boutique",
      name: "boutique",
      component: BoutiqueView,
    },
  ],
});

export default router;
