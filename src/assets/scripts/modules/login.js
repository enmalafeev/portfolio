import Vue from "vue";
import axios from "axios";

new Vue({
  el: "#auth-component",
  data() {
    return {
      user: {
        name: "04062018-admin",
        password: "323232"
      }
    };
  },
  methods: {
    login() {
      axios
        .post("http://webdev-api.loftschool.com/login", this.user)
        .then(rsp => {
          if (rsp.status === 200) {
            const ttl = Math.floor(Date.now() / 1000 + rsp.data.ttl);
            localStorage.setItem("token", rsp.data.token);
            localStorage.setItem("ttl", ttl);
            window.location.href = "/admin";
          }
        });
    }
  },
  template: "#auth-form"
});
