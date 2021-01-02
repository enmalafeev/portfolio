import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

import skills from "./modules/skills";
import works from "./modules/works";
import categories from "./modules/categories";

export const store = new Vuex.Store({
  modules: {
    skills,
    works,
    categories
  }
});
