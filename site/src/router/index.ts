import { createRouter, createWebHistory } from "vue-router";
//@ts-ignore
import HomeView from "../views/HomeView.vue";
//@ts-ignore
import BoutiqueView from "../views/BoutiqueView.vue";
//@ts-ignore
import CotisationView from "../views/CotisationView.vue";
//@ts-ignore
import NotFoundView from "../views/NotFoundView.vue";
//@ts-ignore
import ProjetsView from "../views/ProjetsView.vue";
//@ts-ignore
import PalmaresView from "../views/PalmaresView.vue";

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
    {
      path: "/cotisation",
      name: "cotisation",
      component: CotisationView,
    },
    {
      path: "/projets",
      name: "projets",
      component: ProjetsView,
    },
    {
      path: "/palmares",
      name: "palmares",
      component: PalmaresView,
    },
    {
      path:'/:pathMatch(.*)*',
      name: '404',
      component: NotFoundView
  }
  ],
});

export default router;
