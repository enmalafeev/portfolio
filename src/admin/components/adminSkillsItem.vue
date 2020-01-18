<template lang="pug">
  tr(v-if="editMode === false").skill-row
    td.skill__title {{skill.title}}
    td 
      span.skill__percent {{skill.percent}}
      span %
    td
      //- button(@click="editSkill").skill__btn Редактировать
      button(@click="removeSkill").skill__btn Удалить
  //- tr(v-else-if="editMode === true").skill-row-edit
  //-   td
  //-     input(
  //-       type="text" 
  //-       v-model="skill.title"
  //-       @keyup.enter="editDone"
  //-       v-focus
  //-       ).skill__title-input
  //-   td
  //-     input(
  //-       type="text"
  //-       v-model="skill.percent"
  //-       @keyup.enter="editDone"
  //-       ).skill__title-input
  //-   td
  //-     button(@click="editDone").skill__btn Ok
  tr(v-else)
    td
      input(type="text" v-model="newSkill.title")
    td
      input(type="text" v-model="newSkill.percent")
    td
      button(@click="addSkill").skill__btn Добавить
    
</template>

<script>
import { mapActions } from "vuex";

export default {
  directives: {
    focus: {
      inserted: function(el) {
        el.focus();
      }
    }
  },
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
        category: this.typeId
      }
    };
  },
  methods: {
    ...mapActions(["addNewSkill", "deleteSkill"]),
    addSkill() {
      this.addNewSkill(this.newSkill).then(e => {
        this.newSkill.title = "";
        this.newSkill.percent = "";
      });
    },
    removeSkill() {
      this.deleteSkill(this.skill.id);
    },
    editSkill() {
      this.editMode = true;
    },
    editDone() {
      this.editMode = false;
    }
  }
};
</script>

<style lang="scss" scoped>
.skill-row .skill-row-edit {
  display: block;
  width: 350px;
  margin-bottom: 10px;
}
.skill__title {
  width: 100px;
}
.skill__percent {
  font-size: 16px;
  padding: 5px;
  margin-right: 10px;
  border-radius: 3px;
  background-color: #fff;
}
.skill__title-input {
  font-size: inherit;
}
.skill__btn {
  font-size: inherit;
}
</style>
