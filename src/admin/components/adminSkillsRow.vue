<template lang="pug">
  .skills-row
    .skills-title {{type.name}}
    table
      adminSkillsItem(
        v-for="skill in skills"
        v-if="skill.category === type.id"
        :key="skill.id"
        :skill="skill"
      )
      adminSkillsItem(
        :editMode="true"
        :typeId="type.id"
      )

    br
    hr
    br

</template>

<script>
import adminSkillsItem from "./adminSkillsItem";

export default {
  components: {
    adminSkillsItem
  },
  props: {
    skills: {
      type: Array,
      default: () => []
    },
    type: {
      type: Object,
      default: () => ({
        id: 0,
        title: "Frontend"
      })
    }
  }
};
</script>
