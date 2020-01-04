<template lang="pug">
  #root
    .header
      router-view(name="header")
    .tabs
      router-view(name="tabs")
    main.content
      router-view
</template>

<script>
import adminHeader from './components/adminHeader'
import adminTabs from './components/adminTabs'
import adminSkills from './components/adminSkills'

const data = [
  { id: 1, title: 'HTML', percent: 20, category: 0 },
  { id: 2, title: 'PHP', percent: 20, category: 1 },
  { id: 3, title: 'CSS', percent: 20, category: 0 },
  { id: 4, title: 'Node.js', percent: 30, category: 1 },
  { id: 5, title: 'Mongo', percent: 20, category: 1 },
  { id: 6, title: 'Git', percent: 20, category: 2 },
  { id: 7, title: 'Gulp', percent: 20, category: 2 },
]

export default {
  components: {
    adminHeader,
    adminTabs,
    adminSkills,
  },
}
</script>

<style lang="scss">
body,
html {
  margin: 0;
  height: 100%;
  font-family: 'Roboto', Helvetica, sans-serif;
  font-size: 16px;
  line-height: 1.4;
}
.wrapper {
  height: 100wh;
  background: url('./img/bg1200.jpg') no-repeat center / cover;
  position: relative;
  &::after {
    position: absolute;
    content: '';
    width: 100%;
    height: 100%;
    background-color: rgba(255, 255, 255, 0.85);
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    z-index: 10;
  }
}
#root {
  height: 100%;
  display: flex;
  flex-flow: column;
  position: relative;
  z-index: 100;
}
.header {
  height: 80px;
}
ul {
  padding: 0;
  margin: 0;
  li {
    list-style: none;
  }
}
* {
  box-sizing: border-box;
}
.tabs {
  height: 60px;
}
.content {
  flex: 1;
  padding: 20px;
}
</style>
