import Vue from "vue";
import VueRouter from "vue-router";
import axios from "axios";

Vue.use(VueRouter);
import adminHeader from "./components/adminHeader";
import adminTabs from "./components/adminTabs";
import adminBlog from "./components/adminBlog";
import adminWorks from "./components/adminWorks";
import adminSkills from "./components/adminSkills";

const routes = [
  {
    path: "/portfolio/dist/admin/",
    components: {
      default: adminSkills,
      header: adminHeader,
      tabs: adminTabs
    }
  },
  {
    path: "/portfolio/dist/admin/blog",
    components: {
      default: adminBlog,
      header: adminHeader,
      tabs: adminTabs
    }
  },
  {
    path: "/portfolio/dist/admin/works",
    components: {
      default: adminWorks,
      header: adminHeader,
      tabs: adminTabs
    }
  }
];

const router = new VueRouter({
  routes,
  mode: "history"
});

const guard = axios.create({
  baseURL: "https://webdev-api.loftschool.com/"
});

// router.beforeEach((to, from, next) => {
//   guard
//     .get("/user", {
//       headers: {
//         Autorization: `Bearer ${localStorage.getItem("token")}`
//       }
//     })
//     .then(response => {
//       next();
//     })
//     .catch(error => {
//       localStorage.removeItem("token");
//       window.location.href = "/";
//     });
// });

export default router;
