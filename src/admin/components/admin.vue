<template lang="pug">
  .admin-panel
    .header
      router-view(name="header")
    .tabs
      router-view(name="tabs")
    main.content
      router-view

</template>

<script>
import adminHeader from "./adminHeader";
import adminTabs from "./adminTabs";
import adminSkills from "./adminSkills";

const data = [
  { id: 1, title: "HTML", percent: 20, category: 0 },
  { id: 2, title: "PHP", percent: 20, category: 1 },
  { id: 3, title: "CSS", percent: 20, category: 0 },
  { id: 4, title: "Node.js", percent: 30, category: 1 },
  { id: 5, title: "Mongo", percent: 20, category: 1 },
  { id: 6, title: "Git", percent: 20, category: 2 },
  { id: 7, title: "Gulp", percent: 20, category: 2 }
];

export default {
  components: {
    adminHeader,
    adminTabs,
    adminSkills
  }
};
</script>


<style lang="scss" scoped>
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

.admin-panel {
  position: relative;
  z-index: 20;
}

.page-title {
  font-size: 21px;
  margin-top: 48px;
  margin-bottom: 48px;
}

.content {
  padding-left: 30px;
}
</style>
