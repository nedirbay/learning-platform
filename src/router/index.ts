import { createRouter, createWebHistory } from "vue-router";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: <any>[
    {
      path: "/",
      name: "home",
      component: () => import("../features/MainPage/presentation/views/HomeView.vue"),
    },
    {
      path: "/login",
      name: "login",
      component: () => import("../features/Auth/presentation/views/LoginView.vue"),
    },
    {
      path: "/courses",
      name: "courses",
      component: () => import("../features/CourseCatalog/presentation/views/CourseListView.vue"),
    },
    {
      path: "/dashboard",
      name: "dashboard",
      component: () => import("../features/StudentDashboard/presentation/views/MyCoursesView.vue"),
    },
    {
      path: "/learning/:courseId",
      name: "learning",
      component: () => import("../features/Learning/presentation/views/CoursePlayerView.vue"),
    },
    {
      path: "/cart",
      name: "cart",
      component: () => import("../features/Checkout/presentation/views/CartView.vue"),
    },
    {
      path: "/blog",
      name: "blog",
      component: () => import("../features/Blog/presentation/views/BlogListView.vue"),
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
