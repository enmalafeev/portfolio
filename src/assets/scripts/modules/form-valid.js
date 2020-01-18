import Vue from "vue";

Vue.component("modal", {
  template: "#modal"
});

new Vue({
  el: "#form-valid",
  components: {
    modal
  },
  data: {
    showModal: false,
    errors: [],
    name: null,
    email: null,
    message: null
  },
  methods: {
    checkForm(e) {
      if (this.name && this.email) {
        return true;
      }
      this.errors = [];
      if (!this.name) this.errors.push("Укажите имя.");
      if (!this.email) {
        this.errors.push("Укажите электронную почту.");
      } else if (!this.validEmail(this.email)) {
        this.errors.push("Укажите корректный адрес электронной почты.");
      }
      if (!this.errors.length) return true;
      e.preventDefault();
    },
    clearAll: function() {
      (this.name = ""), (this.email = ""), (this.message = "");
    }
  },
  validEmail: function(email) {
    var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(email);
  },
  template: "#form"
});
