<template lang="pug">
  tr(v-if="editMode === false")
    td {{skill.title}}
    td
      span {{skill.percent}} %
    td
      button() Удалить
  tr(v-else)
    td
      input(type="text" v-model="newSkill.title")
    td
      input(type="text" v-model="newSkill.percent")
    td
      button(@click="addSkill") Добавить
</template>

<script>
import { mapActions } from "vuex";

export default {
  props: {
    editMode: {
      type: Boolean,
      default: false
    },
    typeId: {
      type: Number,
      default: 0
    },
    skill: {
      type: Object,
      default: () => {}
    }
  },
  data() {
    return {
      newSkill: {
        title: "",
        percent: "",
        category: ""
      }
    };
  },
  methods: {
    ...mapActions(["addNewSkill"]),
    addSkill() {
      this.addNewSkill(this.newSkill).then(e => {
        this.newSkill.title = "";
        this.newSkill.percent = "";
      });
    }
  }
};
</script>
