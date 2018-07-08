import Vue from "vue";
import VueRouter from "vue-router";

Vue.use(VueRouter);
import admin from "./components/admin";
import adminHeader from "./components/adminHeader";
import adminTabs from "./components/adminTabs";
import adminTab2 from "./components/adminTab2";
import adminTab3 from "./components/adminTab3";
import adminSkills from "./components/adminSkills";

const routes = [
  {
    path: "/",
    components: {
      default: adminSkills,
      header: adminHeader,
      tabs: adminTabs
    }
  },
  {
    path: "/blog",
    components: {
      default: adminTab2,
      header: adminHeader,
      tabs: adminTabs
    }
  },
  {
    path: "/works",
    components: {
      default: adminTab3,
      header: adminHeader,
      tabs: adminTabs
    }
  }
];

export default new VueRouter({
  routes,
  mode: "history"
});
