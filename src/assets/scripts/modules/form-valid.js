import Vue from "vue";

new Vue({
  el: "#form",
  data: {
    errors: [],
    name: null,
    email: null
  },
  methods: {
    checkForm(e) {
      if (this.name && this.email) {
        return true;
      }
      this.errors = [];
      if (!this.name) this.errors.push("Укажите имя");
      if (!this.email) this.errors.push("Укажите email");
      e.preventDefault();
    }
  }
});
