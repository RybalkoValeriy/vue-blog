import Vue from "vue";
import VueRouter, { RouteConfig } from "vue-router";
import Login from "@/components/Login.vue";
import Articles from "@/components/Articles.vue";
import Topics from "@/components/Topics.vue";
import Profile from "@/components/Profile.vue";
import CreateTopic from "@/components/CreateTopic.vue";

Vue.use(VueRouter);

const routes: Array<RouteConfig> = [
  {
    path: "/",
    name: "topics",
    component: Topics,
  },
  {
    path: "/topic/:topicId/articles",
    name: "topic/articles",
    component: Articles,
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
  {
    path: "/createTopic",
    name: "createTopic",
    component: CreateTopic
  },
];

const router = new VueRouter({
  routes,
});

export default router;
