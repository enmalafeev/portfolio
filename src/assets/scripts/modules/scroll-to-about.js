const scrollToElement = require("scroll-to-element");

const btnDown = document.querySelector("#btn-down");

btnDown.addEventListener("click", e => {
  e.preventDefault();
  scrollToElement(".about");
});
