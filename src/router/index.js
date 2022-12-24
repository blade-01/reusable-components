import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: HomeView,
    },
    {
      path: "/paginations",
      name: "paginations",
      component: () =>
        import(
          /* webpackChunkName: "paginations" */ "../views/PaginationsView.vue"
        ),
    },
    {
      path: "/carousels",
      name: "carousels",
      component: () =>
        import(
          /* webpackChunkName: "carousels" */ "../views/CarouselsView.vue"
        ),
    },
    {
      path: "/loaders",
      name: "loaders",
      component: () =>
        import(/* webpackChunkName: "loaders" */ "../views/LoadersView.vue"),
    },
    {
      path: "/forms",
      name: "forms",
      component: () =>
        import(/* webpackChunkName: "forms" */ "../views/FormsView.vue"),
    },
    {
      path: "/gsap",
      name: "gsap",
      component: () =>
        import(/* webpackChunkName: "gsap" */ "../views/GsapView.vue"),
    },
  ],
  scrollBehavior() {
    return {
      top: 0,
      behavior: "smooth",
    };
  },
});

export default router;
