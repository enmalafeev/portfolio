<template lang="pug">
  main.content
    h2.page-title Страница "Блог"
    h3.blog-title Добавить запись
    form.form
      input(type="text" placeholder="Название").form__name
      input(type="date" placeholder="Дата").form__date
      textarea(placeholder="Сообщение").form__message
    button.btn Добавить
</template>

<style lang="scss" scoped>
.blog-title {
  font-size: 16px;
}

.form {
  width: 500px;
  display: flex;
  flex-direction: column;
}

.form__name,
.form__date {
  width: 300px;
  height: 45px;
  line-height: 45px;
  padding-left: 20px;
  border-radius: 5px;
  border: none;
  font-size: 16px;

  margin-bottom: 20px;
}

.form__message {
  height: 166px;
  border: none;
  border-radius: 5px;
  padding-top: 20px;
  padding-left: 20px;
  font-size: 16px;

  margin-bottom: 30px;
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
