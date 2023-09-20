import home from "../views/home.vue";
import { RouteRecordRaw } from "vue-router";

export const routes: Array<RouteRecordRaw> = [
  {
    path: "/",
    component: home,
    name: "home",
    meta: { requiresAuth: false },
  },
];
