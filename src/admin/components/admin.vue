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
// import adminTab2 from "./adminTab2";
// import adminTab3 from "./adminTab3";

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
    // adminTab2
    // adminTab3
  }
};
</script>


<style lang="scss" scoped>
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
