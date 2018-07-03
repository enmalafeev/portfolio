<template lang="pug">
  div#app
    header.header
      h1.header__title
      a(href="index.html") Вернуться на сайт
    nav.tab-menu
      a(v-for="tab in 4" :value="tab" href="#") {{tab}}
    main.content
      h2.page-title Страница обо мне
      div.skills
        div(v-for="skill in 4" :value="skill").skill
          p.skill__title
          label.skill__name
            input(type="number").skill__input
          span.skill__procent %
      button.btn Сохранить



</template>

<script>
import inner from "./components/inner";
export default {
  components: {
    appTitle: require("./components/title").default,
    inner
  },
  methods: {
    handleClick(e) {
      console.log("handleClick", e.target);
    }
  }
};
</script>
<style lang="scss" scoped>
.title {
  border-bottom: 1px solid #000;
  color: green;
}

.desc {
  color: blue;
  font-size: 24px;
}

.btn {
  background-color: $green;
  color: #fff;
}
</style>
