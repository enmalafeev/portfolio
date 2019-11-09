<template lang="pug">
  li.work-item
    div.img-container
      img.work-img(:src="`https://webdev-api.loftschool.com/${work.photo}`")
    h2 {{work.title}}
    p {{work.description}}
    a(:href="`${work.link}`") {{work.link}}

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
.img-container {
  width: 100px;
  height: 100px;
}

.work-img {
  width: 100px;
  height: 100px;
}
</style>
