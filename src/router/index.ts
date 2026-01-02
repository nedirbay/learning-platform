import { createRouter, createWebHistory } from "vue-router";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      component: () => import("../layout/UserLayout.vue"),
      children: [
         {
          path: "",
          name: "home",
          component: () => import("../features/MainPage/presentation/views/HomeView.vue"),
        },
        {
          path: "courses",
          name: "courses",
          component: () => import("../features/CourseCatalog/presentation/views/CourseListView.vue"),
        },
        {
          path: "courses/:courseId",
          name: "course-detail",
          component: () => import("../features/CourseCatalog/presentation/views/CourseDetailView.vue"),
        },
        {
          path: "learning/:courseId", // Ideally this might be a different mode/layout (fullscreen)
          name: "learning",
          component: () => import("../features/Learning/presentation/views/CoursePlayerView.vue"),
        },
        {
          path: "dashboard",
          name: "dashboard",
          component: () => import("../features/StudentDashboard/presentation/views/MyCoursesView.vue"),
        },
        {
          path: "cart",
          name: "cart",
          component: () => import("../features/Checkout/presentation/views/CartView.vue"),
        },
        {
          path: "blog",
          name: "blog",
          component: () => import("../features/Blog/presentation/views/BlogListView.vue"),
        },
        {
          path: "blog/:id",
          name: "blog-detail",
          component: () => import("../features/Blog/presentation/views/BlogDetailView.vue"),
        },
         {
          path: "profile",
          name: "profile",
          component: () => import("../features/StudentDashboard/presentation/views/ProfileView.vue"),
        },
        {
          path: "about",
          name: "about",
          component: () => import("../features/About/presentation/views/AboutView.vue"),
        },
      ]
    },
    {
      path: "/auth",
      component: () => import("../layout/AuthLayout.vue"),
      children: [
        {
          path: "login", // /auth/login
          alias: "/login", // Map /login to here as well or redirection
          name: "login",
          component: () => import("../features/Auth/presentation/views/LoginView.vue"),
        },
      ]
    },
    {
        path: "/admin",
        beforeEnter: (to, from, next) => {
          // Check if user is authenticated
          const user = localStorage.getItem('user');
          if (user) {
            next();
          } else {
            // Redirect to login with return URL
            next({ name: 'login', query: { redirect: to.fullPath } });
          }
        },
        children: [
          {
            path: "",
            name: "admin-dashboard",
            component: () => import("../features/Admin/presentation/views/AdminDashboardView.vue"),
          },
        ]
    }
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
