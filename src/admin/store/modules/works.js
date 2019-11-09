const works = {
  state: {
    data: []
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
    addNewWork({ commit }, works) {
      return this.$axios
        .post("/works", works)
        .then(response => {
          commit("addWorksToState", response.data);
          console.log("work was added", response);
        })
        .catch(e => console.error(e));
    },
    fetchWorks({ commit }) {
      return this.$axios
        .get("/works/5")
        .then(response => {
          commit("fillUpWorks", response.data);
        })
        .catch(e => console.log(e));
    }
  }
};

export default works;
