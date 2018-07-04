<template lang="pug">
  .admin-panel
    header.header
      .header__wrap
        h1.header__title Панель администрирования
        a(href="index.html").header__link Вернуться на сайт
    main.content
      admin-tabs
      h2.page-title Страница обо мне
      div.skills
        div(v-for="skill in 4" :value="skill").skill
          p.skill__title
          label.skill__name HTML
            input(type="number").skill__input
          span.skill__procent %
      button.btn Сохранить
</template>

<script>
import adminTabs from "./adminTabs";

export default {
  components: {
    adminTabs
  }
};
</script>


<style lang="scss" scoped>
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

.btn {
  background-color: $green;
  color: #fff;
}
</style>
