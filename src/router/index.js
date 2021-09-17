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
    redirect: "/signin",
  },
  {
    path: "/signin/admin",
    name: "signin-admin",
    component: () => import("../views/AdminSignIn.vue"),
  },
  {
    path: "/signin",
    name: "sign-in",
    component: SignIn,
  },
  {
    path: "/signup",
    name: "signup",
    component: SignUp,
  },
  {
    path: "/main",
    name: "main",
    component: Main,
  },
  {
    path: "/profile",
    name: "profile",
    component: () => import("../views/User.vue"),
    redirect: "/profile/tweets",
    children: [
      {
        path: "tweets",
        name: "tweets",
        component: () => import("../components/UserTweets.vue"),
      },
      {
        path: "replied",
        name: "replied",
        component: () => import("../components/UserReplied.vue"),
      },
      {
        path: "likes",
        name: "likes",
        component: () => import("../components/UserLikes.vue"),
      },
    ],
  },
  {
    path: "/setting",
    name: "setting",
    component: () => import("../views/Setting.vue"),
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
