import Vue from "vue";

new Vue({
  el: "#modal-form",
  methods: {
    close(e) {
      this.$emit("close");
    }
  },
  template: "#modal"
});
