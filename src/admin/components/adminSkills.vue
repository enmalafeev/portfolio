<template lang="pug">
  .skills
    h2.page-title Страница "Обо мне"
    h3.skills-title Frontend
    .skills-wrap
      .skill-row
        span.skill-name HTML
        adminSkillsInputPercent
        span.percent %
      .skill-row
        span.skill-name CSS
        adminSkillsInputPercent
        span.percent %
      .skill-row
        span.skill-name JavaScript
        adminSkillsInputPercent
        span.percent %
    button.btn Сохранить
</template>

<script>
import adminSkillsInputPercent from "./adminSkillsInputPercent";
export default {
  components: {
    adminSkillsInputPercent
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
