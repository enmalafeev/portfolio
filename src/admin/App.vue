<template lang="pug">
  .container
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
  font-weight: 500;
  margin: 0;
}

.wrapper {
  width: 100%;
  min-height: 100%;
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
