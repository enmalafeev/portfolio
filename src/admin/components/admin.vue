<template lang="pug">
  .admin-panel
    adminHeader
    admin-tabs
    main.content
      h2.page-title Страница "Обо мне"
      .skills-wrap
        adminSkills
        adminSkills
        adminSkills

      button.btn Сохранить
</template>

<script>
import adminHeader from "./adminHeader";
import adminTabs from "./adminTabs";
import adminSkills from "./adminSkills";
// import adminTab2 from "./adminTab2";
// import adminTab3 from "./adminTab3";

export default {
  components: {
    adminHeader,
    adminTabs,
    adminSkills
    // adminTab2
    // adminTab3
  }
};
</script>


<style lang="scss" scoped>
.admin-panel {
  position: relative;
  z-index: 20;
}

.page-title {
  font-size: 21px;
  margin-top: 48px;
  margin-bottom: 48px;
}

.skills-wrap {
  width: 480px;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  margin-bottom: 30px;
}

.content {
  padding-left: 30px;
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
