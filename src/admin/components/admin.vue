<template lang="pug">
  .admin-panel
    header.header
      .header__wrap
        h1.header__title Панель администрирования
        a(href="index.html").header__link Вернуться на сайт

    admin-tabs
    main.content
      h2.page-title Страница  "Обо мне"
      .skills-wrap
        adminSkills
        adminSkills
        adminSkills

      button.btn Сохранить
</template>

<script>
import adminTabs from "./adminTabs";
import adminSkills from "./adminSkills";
// import adminTab2 from "./adminTab2";

export default {
  components: {
    adminTabs,
    adminSkills
    // adminTab2
  }
};
</script>


<style lang="scss" scoped>
.admin-panel {
  position: relative;
  z-index: 20;
}
.header {
  width: 100%;
  height: 80px;
  background-color: $green;

  &__wrap {
    width: auto;
    padding: 0 30px;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  &__title {
    font-family: "Roboto", Helvetica, sans-serif;
    font-size: 28px;
    color: #fff;
  }
  &__link {
    font-size: 16px;
    color: #fff;
  }
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
