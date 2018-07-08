<template lang="pug">
  div
    input.input-percent(type="number" min="0" max="100" v-model="percent")
</template>

<script>
export default {
  name: "AdminSkillsInputPercent",
  data() {
    return {
      percent: 0
    };
  }
};
</script>

<style lang="scss" scopped>
.input-percent {
  width: 45px;
  height: 30px;
  font-size: 16px;
  border-radius: 3px;
  text-align: right;
  border: none;
}
</style>
