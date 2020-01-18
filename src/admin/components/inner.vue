<template lang="pug">
  div
    pre {{formData}}
    h1
    br
    input(type="text" v-model="formData.username")
    span Hello
    hr
    input(type="checkbox" v-model="formData.hobby" value="movie")
    span Movie
    input(type="checkbox" v-model="formData.hobby" value="music")
    span Music
    hr
    input(type="radio" v-model="formData.card" value="visa")
    span Visa
    input(type="radio" v-model="formData.card" value="masterCard")
    span MasterCard
    hr
    select(v-model="formData.nums")
      option(v-for="n in 10" :value="n") {{n}}

</template>

<script>
export default {
  inheritAttrs: false,
  data() {
    return {
      title: "I am title!",
      formData: {
        username: "John Doe",
        hobby: ["music"],
        card: "visa",
        nums: "1"
      }
    };
  },
  mounted() {
    console.log(this.$attrs);
  },
  methods: {
    handleClick() {
      console.log("click");
    }
  }
};
</script>
