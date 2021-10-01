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
  // 通知
  {
    path: "/notification",
    name: "notification",
    component: () => import("./../views/Notification.vue"),
  },
  // 公開聊天室
  {
    path: "/public-chat-room",
    name: "publicChatRoom",
    component: () => import("./../views/PublicChatRoom.vue"),
  },
  // 私人聊天室
  {
    path: "/private-message",
    name: "privateMessage",
    component: () => import("./../views/PrivateMessage.vue"),
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
    path: "/profile/:id",
    name: "other-profile",
    component: () => import("../views/OtherUser.vue"),
    redirect: "/profile/:id/tweets",
    children: [
      {
        path: "tweets",
        name: "other-tweets",
        component: () => import("../components/OtherUserTweets.vue"),
      },
      {
        path: "replied",
        name: "other-replied",
        component: () => import("../components/OtherUserReplied.vue"),
      },
      {
        path: "likes",
        name: "other-likes",
        component: () => import("../components/OtherUserLikes.vue"),
      },
    ],
  },
  // 跟隨者
  {
    path: "/user-followers",
    name: "user-followers",
    component: () => import("../views/UserFollowers.vue"),
  },
  // 正在跟隨中
  {
    path: "/user-followings",
    name: "user-followings",
    component: () => import("../views/UserFollowings.vue"),
  },
  {
    path: "/tweets/:id",
    name: "tweet",
    component: () => import("../views/Tweet.vue"),
  },
  {
    path: "/setting",
    name: "setting",
    component: () => import("../views/Setting.vue"),
  },
  {
    path: "/admin",
    name: "admin",
    component: () => import("../views/AdminMain.vue"),
    redirect: "/admin/tweets-list",
    children: [
      {
        path: "tweets-list",
        name: "tweets-list",
        component: () => import("./../components/AdminList.vue"),
      },
      {
        path: "users-list",
        name: "users-list",
        component: () => import("../components/AdminUsers.vue"),
      },
    ],
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
