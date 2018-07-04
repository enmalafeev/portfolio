<template lang="pug">
  .tabs
    ul.tabs-list
      li.tabs-item
        a(href="#").tabs-link.active TAB 1
      li.tabs-item
        a(href="#").tabs-link TAB 2
      li.tabs-item
        a(href="#").tabs-link TAB 3
      li.tabs-item
        a(href="#").tabs-link TAB 4

</template>

<style lang="scss">
.tabs {
  width: 100%;
  background-color: $light-grey;
}
.tabs-list {
  width: 726px;
  display: flex;
}

.tabs-item {
  width: 25%;
  display: flex;
  justify-content: center;
  align-items: center;
}

.tabs-link {
  width: 100%;
  height: 60px;
  line-height: 60px;
  text-align: center;
  color: #000;
  text-decoration: none;
  border-right: 2px solid #fff;
  &:hover,
  &:focus {
    background-color: #fff;
    color: $green;
  }
}

.active {
  background-color: #fff;
  color: $green;
}
</style>
