import Vue from "vue";
import VueRouter from "vue-router";
import NotFound from "../views/NotFound.vue";
import Main from "../views/Main.vue";
import SignIn from "../views/SignIn.vue";
import SignUp from "../views/SignUp.vue";


Vue.use(VueRouter);

const routes = [
  {
    path: "/",    
    redirect: "/signin"
  },
  {
    path: "/signin/admin",
    name: "signin-admin",
    component: () => import('../views/AdminSignIn.vue'),
  },
  {
    path: "/signin",
    name: "sign-in",
    component: SignIn,
  },
  {
    path: "/signup",
    name: "signup",
    component: SignUp
  },
  {
    path: "/main",
    name: "main",
    component: Main,
  },
  {
    path: "*",
    name: "not-found",
    component: NotFound,
  },
];

const router = new VueRouter({
  routes,
});

export default router;
