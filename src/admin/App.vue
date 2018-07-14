<template lang="pug">
    admin
</template>

<script>
import admin from "./components/admin";

export default {
  name: "App",
  components: {
    admin
  },
  methods: {
    handleClick(e) {
      console.log("handleClick", e.target);
    }
  }
};
</script>

<style lang="scss">
body {
  font-family: "Roboto", Helvetica, sans-serif;
  font-size: 16px;
  line-height: 1.4;
  font-weight: 400;
  margin: 0;
}

.wrapper {
  width: 100%;
  height: 100vh;
  min-height: 100%;
  background: url("./img/bg1200.jpg") no-repeat center / cover;
  position: relative;
  &::after {
    position: absolute;
    content: "";
    width: 100%;
    height: 100%;
    background-color: #fff;
    opacity: 0.85;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    z-index: 10;
  }
}

ul {
  padding: 0;
  margin: 0;
}
li {
  list-style: none;
}

* {
  box-sizing: border-box;
}
</style>
