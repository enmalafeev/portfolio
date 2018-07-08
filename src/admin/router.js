import Vue from "vue";
import VueRouter from "vue-router";

Vue.use(VueRouter);
import admin from "./components/admin";

const routes = [
  {
    path: "/",
    component: admin
  }
];

export default new VueRouter({
  routes,
  mode: "history"
});
