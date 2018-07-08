<template lang="pug">
  main.content
    h2.page-title Страница "Мои работы"
    h3.blog-title Добавить работу
    form.form
      input(type="text" placeholder="Название проекта").form__name
      input(type="text" placeholder="Технологии").form__date
      label.file-upload
        span.btn-upload Загрузить картинку
        input(type="file").upload-input
    button.btn Добавить
</template>

<style lang="scss" scoped>
.form {
  width: 300px;
  display: flex;
  flex-direction: column;

  margin-bottom: 30px;
}

.form__name,
.form__date {
  width: 100%;
  height: 45px;
  line-height: 45px;
  padding-left: 20px;
  border-radius: 5px;
  border: none;
  font-size: 16px;

  margin-bottom: 20px;
}

.file-upload {
  position: relative;
  overflow: hidden;
  font-size: 1em;
  height: 3em;
  line-height: 3em;
}

.btn-upload {
  color: $green;
  padding-left: 45px;
  position: relative;
  &::before {
    position: absolute;
    content: "";
    width: 35px;
    height: 35px;
    top: -5px;
    left: 0;
    background: url("../img/upload.png") no-repeat center;
  }
}

.upload-input {
  position: absolute;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  transform: scale(20);
  letter-spacing: 10em;
  opacity: 0;
  cursor: pointer;
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
