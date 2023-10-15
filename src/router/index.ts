import Vue from "vue";
import VueRouter, { RouteConfig } from "vue-router";
import Login from "@/components/Login.vue";
import Articles from "@/components/Articles.vue";
import Topics from "@/components/Topics.vue";
import Profile from "@/components/Profile.vue";

Vue.use(VueRouter);

const routes: Array<RouteConfig> = [
  {
    path: "/",
    name: "topics",
    component: Topics,
  },
  {
    path: "/articles",
    name: "articles",
    component: Articles,
  },
  {
    path: "/login",
    name: "login",
    component: Login,
  },
  {
    path: "/profile",
    name: "profile",
    component: Profile,
  },
];

const router = new VueRouter({
  routes,
});

export default router;
