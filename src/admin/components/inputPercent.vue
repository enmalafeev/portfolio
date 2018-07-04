<template lang="pug">
  div
    input.input-percent(type="number" min="0" max="100" v-model="percent")
</template>

<script>
export default {
  name: "InputPercent",
  data() {
    return {
      percent: 0
    };
  }
};
</script>
