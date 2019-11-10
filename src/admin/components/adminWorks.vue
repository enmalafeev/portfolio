<template lang="pug">
  main.content
    h2.page-title Страница "Мои работы"
    h3.blog-title Добавить работу
    form.form
      input(type="text" placeholder="Название проекта" v-model="work.title").form__name
      input(type="text" placeholder="Технологии" v-model="work.techs").form__date
      input(type="text" placeholder="Описание" v-model="work.description").form__description
      input(type="text" placeholder="Ссылка на работу" v-model="work.link").form__link
      label.file-upload
        span.btn-upload Загрузить картинку
        input(type="file" @change="addPhoto").upload-input
    button(@click="addWorks").btn Добавить
    hr
    h2 Список работ
    ul.works-list
      adminWorkItem(
        v-for="work in works"
        :key="work.id"
        :work="work"
      )

</template>

<script>
import adminWorkItem from "./adminWorkItem";

import { mapActions, mapState } from "vuex";
export default {
  components: {
    adminWorkItem
  },
  data() {
    return {
      work: {
        title: "",
        techs: "",
        description: "",
        link: "",
        photo: ""
      }
    };
  },
  computed: {
    ...mapState({
      works: state => state.works.data
    })
  },
  created() {
    this.fetchWorks();
  },
  methods: {
    ...mapActions(["addNewWork", "fetchWorks"]),
    addPhoto(e) {
      const files = e.target.files;
      if (files.length === 0) return;
      this.work.photo = files[0];
    },
    addWorks() {
      const formData = new FormData();
      Object.keys(this.work).forEach(prop => {
        formData.append(prop, this.work[prop]);
      });

      this.addNewWork(formData);
    }
  }
};
</script>


<style lang="scss" scoped>
.form {
  width: 300px;
  display: flex;
  flex-direction: column;

  margin-bottom: 30px;
}

.form__name,
.form__date,
.form__description,
.form__link {
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

.works-list {
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
}
</style>
