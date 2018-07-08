import Vue from "vue";
import VueRouter from "vue-router";

Vue.use(VueRouter);
import admin from "./components/admin";
import adminTab2 from "./components/adminTab2";
import adminTab3 from "./components/adminTab3";

const routes = [
  {
    path: "/",
    component: admin
  },
  {
    path: "/blog",
    component: adminTab2
  },
  {
    path: "/works",
    component: adminTab3
  }
];

export default new VueRouter({
  routes,
  mode: "history"
});
