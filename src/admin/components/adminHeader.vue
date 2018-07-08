<template lang="pug">
  header.header
      .header__wrap
        h1.header__title Панель администрирования
        a(href="index.html").header__link Вернуться на сайт
</template>

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
</style>
