<template lang="pug">
  .skills
    h3.skills-title Frontend
      .skill-row
        span.skill-name HTML
        inputPercent
        span.percent %
      .skill-row
        span.skill-name CSS
        inputPercent
        span.percent %
      .skill-row
        span.skill-name JavaScript
        inputPercent
        span.percent %
</template>

<script>
import inputPercent from "./inputPercent";
export default {
  components: {
    inputPercent
  }
};
</script>


<style lang="scss" scoped>
.skills {
  width: 200px;
}

.skills-title {
  font-weight: 600;
}

.skill-row {
  display: flex;
  justify-content: flex-start;
  padding-left: 20px;
  margin-bottom: 10px;
}

.skill-name {
  font-weight: 100;
  margin-right: auto;
}

.percent {
  font-weight: 100;
  margin-left: 10px;
}
</style>
