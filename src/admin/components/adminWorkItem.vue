<template lang="pug">
  li.work-item
    div.img-container
      img.work-img(:src="`https://webdev-api.loftschool.com/${work.photo}`")
    .work-item__container
      h2.work-item__title {{work.title}}
      p.work-item__desc {{work.description}}
      a.work-item__link(:href="`${work.link}`") {{work.link}}
      button.work-item__btn(@click="removeWork") Удалить работу

</template>

<script>
import { mapMutations, mapActions } from "vuex";

export default {
  props: {
    work: {
      type: Object,
      default: () => {}
    }
  },
  methods: {
    ...mapMutations(["updateWork"]),
    ...mapActions(["deleteWork"]),
    removeWork() {
      this.deleteWork(this.work.id);
    }
  }
};
</script>

<style lang="scss" scoped>
.work-item {
  box-shadow: 1px 2px 16px 2px rgba(0, 0, 0, 0.5);
  background-color: #fff;
  text-align: center;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  &__container {
    padding: 10px;
    margin-bottom: 35px;
  }
  &__link {
    display: inline-block;
    color: #6269db;
    word-wrap: break-word;
    margin-bottom: 15px;
  }
  &__btn {
    display: block;
    margin: 0 auto;
  }
}

.img-container {
  width: 100%;
  max-height: 400px;
  overflow: hidden;
  object-fit: cover;
}

.work-img {
  height: auto;
  max-width: 100%;
}

.work-item__btn {
  height: 45px;
  padding: 10px;
  border-radius: 5px;
  background-color: red;
  color: #fff;
  font-size: 16px;
}
</style>
