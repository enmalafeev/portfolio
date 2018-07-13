const works = {
  state: {
    work: []
  },
  mutations: {
    fillUpWorks(state, works) {
      state.data = works;
    },
    addWorksToState(state, works) {
      state.data.push(works);
    }
  },
  actions: {
    addNewWork({ commit }, work) {
      return this.$axios
        .post("/works", works)
        .then(response => {
          commit("addWorksToState", response.data);
          console.log("work was added", response);
        })
        .catch(e => console.error(e));
    }
  }
};

export default works;
