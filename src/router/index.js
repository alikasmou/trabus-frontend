import { createRouter, createWebHistory } from "vue-router";
import Home from "../views/Home.vue";

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/buspassing",
    name: "BusPassing",
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/BusPassing.vue"),
  },
  {
    path: "/about",
    name: "About",
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/About.vue"),
  },
  {
    path: "/metrobuspassing",
    name: "MetrobusPassing",
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/MetrobusPassing.vue"),
  },
  {
    path: "/charging",
    name: "Charging",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/Charging.vue"),
  },
  {
    path: "/refund",
    name: "Refund",
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/Refund.vue"),
  },
  {
    path: "/new",
    name: "New",
    component: () => import(/* webpackChunkName: "about" */ "../views/New.vue"),
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
