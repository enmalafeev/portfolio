<template lang="pug">
  li.work-item
    div.img-container
      img.work-img(:src="`https://webdev-api.loftschool.com/${work.photo}`")
    .work-item__container  
      h2.work-item__title {{work.title}}
      p.work-item__desc {{work.description}}
      a.work-item__link(:href="`${work.link}`") {{work.link}}

</template>

<script>
export default {
  props: {
    work: {
      type: Object,
      default: () => {}
    }
  }
};
</script>

<style lang="scss" scoped>
.work-item {
  width: 33%;
  box-shadow: 1px 2px 16px 2px rgba(0, 0, 0, 1);
  background-color: #fff;
  &__container {
    padding: 10px;
    margin-bottom: 35px;
    text-align: center;
  }
  &__link {
    text-align: center;
    color: #6269db;
    word-wrap: break-word;
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
</style>
