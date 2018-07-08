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
