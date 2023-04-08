import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router";

const routes: Array<RouteRecordRaw> = [
  {
    path: "/",
    name: "home",
    component: () =>
      import("../views/HomeView.vue"),
  },
  {
    path: "/login",
    name: "login",
    component: () =>
      import("../views/UserLogin.vue"),
  },
  {
    path: "/registration",
    name: "registration",
    component: () =>
      import("../views/UserRegistration.vue"),
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
