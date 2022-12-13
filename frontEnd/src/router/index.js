import { createRouter, createWebHistory } from "vue-router";

import LoginPage from "../views/LoginPage.vue";
import MainPage from "../views/MainPage.vue";
import ChatPage from "../views/ChatPage.vue";
import ProfilePage from "../views/ProfilePage.vue";
import NotFound from "../views/NotFound.vue";

import FriendsList from "../components/layout/main/FriendsList.vue";
import ChatsList from "../components/layout/main/ChatsList.vue";

const routes = [
  {
    path: "/",
    redirect: "/login",
  },
  {
    path: "/login",
    component: LoginPage,
  },
  {
    path: "/main",
    redirect: "/main/friendsList",
    component: MainPage,
    children: [
      { path: "friendsList", component: FriendsList },
      { path: "chatsList", component: ChatsList },
    ],
  },
  {
    path: "/chat",
    component: ChatPage,
  },
  {
    path: "/profile",
    component: ProfilePage,
  },
  { path: "/:notFound(.*)", component: NotFound },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
