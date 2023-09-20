import { createRouter, createWebHistory } from "vue-router";
import { routes } from "./routes";

const router = createRouter({ history: createWebHistory(), routes });
// const isAuthenticated = false;

// router.beforeEach((to, _, next) => {
//   if (!isAuthenticated && to.name !== "login") next();
//   else next();
// });

export default router;
