import Vue from "vue";
import axios from "axios";

new Vue({
  el: "#auth-component",
  data() {
    return {
      user: {
        name: "",
        password: ""
      }
    };
  },
  methods: {
    login() {
      axios
        .post("https://webdev-api.loftschool.com/login", this.user)
        .then(rsp => {
          if (rsp.status === 200) {
            const ttl = Math.floor(Date.now() / 1000 + rsp.data.ttl);
            localStorage.setItem("token", rsp.data.token);
            localStorage.setItem("ttl", ttl);
            window.location.href = "/portfolio/dist/admin/";
          }
        });
    }
  },
  template: "#auth-form"
});
