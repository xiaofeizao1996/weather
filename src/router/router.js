import VueRouter from "vue-router";
import vue from "vue";

vue.use(VueRouter);

const router = new VueRouter({
  mode: "history",
  routes: [
    {
      path: "/login",
      component: () => import("../pages/login"),
    },
  ],
});

export default router;
