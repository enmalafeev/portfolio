import Vue from "vue";
import axios from "axios";

const skill = {
  template: "#skill",
  props: {
    skillName: String,
    skillPercent: Number
  },
  methods: {
    drawCircle() {
      const circle = this.$refs["color-circle"];
      const dashoffset = parseInt(
        getComputedStyle(circle).getPropertyValue("stroke-dashoffset")
      );
      const percents = (dashoffset / 100) * (100 - this.skillPercent);
      circle.style.strokeDashoffset = percents;
    }
  },
  mounted() {
    this.drawCircle();
  }
};

const skillsRow = {
  template: "#skills-row",
  components: {
    skill
  },
  props: {
    skill: Object
  }
};

new Vue({
  el: "#skills-container",
  components: {
    skillsRow
  },
  data: {
    skills: {}
  },
  created() {
    // const data = require("../../data/skills.json");
    axios
      .get("https://webdev-api.loftschool.com//skills/5")
      .then(response => (this.skills = response.data))
      .catch(e => console.log(e));
    // this.skills = data;
  },
  template: "#skills-list"
});
