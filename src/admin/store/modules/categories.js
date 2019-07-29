const categories = {
  state: {
    data: []
  },
  mutations: {
    fetchCategories(state, categories) {
      state.data = categories;
    },
    addCategoryToState(state, category) {
      state.data.push(category);
    }
  },
  actions: {
    addCategory({ commit }, category) {
      return this.axios
        .post("/categories", category)
        .then(response => {
          commit("addCategoryToState", response.data);
          console.log("addCategory", response);
        })
        .catch(e => console.log(e));
    }
  }
};

export default categories;
