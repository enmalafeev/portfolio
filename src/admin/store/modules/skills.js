const skills = {
  state: {
    data: []
  },
  mutations: {
    fillUpSkills(state, skills) {
      state.data = skills;
    },
    addSkillToState(state, skill) {
      state.data.push(skill);
    },
    removeSkill(state, skill) {
      state.data = state.data.filter(item => item.id !== skill.id);
    }
  },
  actions: {
    addNewSkill({ commit }, skill) {
      return this.$axios
        .post("/skills", skill)
        .then(response => {
          commit("addSkillToState", response.data);
          console.log("addSkill", response);
        })
        .catch(e => console.error(e));
    },
    fetchSkills({ commit }) {
      return this.$axios
        .get("/skills/5")
        .then(response => {
          commit("fillUpSkills", response.data);
        })
        .catch(e => console.log(e));
    },
    deleteSkill({ commit }, skill) {
      return this.$axios
        .delete(`./skills/${skill.id}`)
        .then(response => {
          commit("removeSkill", response.data);
        })
        .catch(e => console.log(e));
    }
  }
};

export default skills;
