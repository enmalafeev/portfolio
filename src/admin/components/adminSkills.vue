<template lang="pug">
  .skills
    h2.page-title Страница "Обо мне"
    adminSkillsRow(
      v-for="type in types"
      :key="type.name"
      :type="type"
      :skills="skills"
    )
</template>

<script>
import adminSkillsRow from "./adminSkillsRow";
import { mapActions, mapState } from "vuex";

export default {
  components: {
    adminSkillsRow
  },
  data() {
    return {
      types: [
        { id: 0, name: "Frontend" },
        { id: 1, name: "Backend" },
        { id: 2, name: "Workflow" }
      ]
    };
  },
  computed: {
    ...mapState({
      skills: state => state.skills.data
    })
  },
  created() {
    this.fetchSkills();
  },
  methods: {
    ...mapActions(["fetchSkills"])
  }
};
</script>


<style lang="scss" scoped>
.skills {
  width: 200px;
}

.skills-title {
  margin-top: 0;
  font-weight: 600;
}

.skills-wrap {
  width: 480px;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  margin-bottom: 30px;
}

.skill-row {
  display: flex;
  justify-content: flex-start;
  padding-left: 20px;
  margin-bottom: 10px;
}

.skill-name {
  font-weight: 100;
  margin-right: auto;
}

.percent {
  font-weight: 100;
  margin-left: 10px;
}

.btn {
  width: 120px;
  height: 45px;
  border-radius: 5px;
  background-color: $green;
  color: #fff;
  font-size: 16px;
}
</style>
