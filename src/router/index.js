import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";

Vue.use(VueRouter);

const router = new VueRouter({
  mode: "history",
  base: import.meta.env.BASE_URL,
  routes: [
    {
      path: "/",
      name: "home",
      component: Home,
    },
    {
      path: "/services",
      name: "services",
      component: () => import("../views/Services.vue"),
    },
    {
      path: "/opinions",
      name: "opinions",
      component: () => import("../views/Opinions.vue"),
    },
    {
      path: "/contact",
      name: "contact",
      component: () => import("../views/contact.vue"),
    },
  ],
});

export default router;
