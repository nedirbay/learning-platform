import { createRouter, createWebHistory } from "vue-router";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: <any>[
    {
      path: "/",
      name: "home",
      component: () => import("../features/MainPage/presentation/views/HomeView.vue"),
    },
  ],
});

function beforeEnterFunc(to: any, from: any, next: any) {
  return next();
  // if (authState.token?.length) {
  //   return next();
  // }
  // return next({ name: "login" });
}

function permBeforeEnter(to: any, from: any, next: any) {
  return next();
  // getUserAllPermissons()
  //   .then(() => {
  //     if (checkPermission(to.name)) return next();
  //   })
  //   .catch(() => {
  //     // ElMessage.error("Ýalňyşlyk ýüze çykdy");
  //   });
}

export default router;
