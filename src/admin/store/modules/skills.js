const skills = {
  state: {
    data: [],
  },
  mutations: {
    fillUpSkills(state, skills) {
      state.data = skills
    },
    addSkillToState(state, skill) {
      state.data.push(skill)
    },
  },
  actions: {
    addNewSkill({ commit }, skill) {
      return this.$axios
        .post('/skills', skill)
        .then(response => {
          commit('addSkillToState', response.data)
          console.log('addSkill', response)
        })
        .catch(e => console.error(e))
    },
    fetchSkills({ commit }) {
      return this.$axios
        .get('/skills/5')
        .then(response => {
          commit('fillUpSkills', response.data)
        })
        .catch(e => console.log(e))
    },
    deleteSkill({ dispatch }, skill) {
      return this.$axios
        .delete(`/skills/${skill}`)
        .then(response => {
          dispatch('fetchSkills', response.data)
        })
        .catch(e => console.log(e))
    },
  },
}

export default skills
