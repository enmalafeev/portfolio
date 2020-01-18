const scrollToElement = require("scroll-to-element");

const btnUp = document.querySelector("#btn-up");
const btnDown = document.querySelector("#btn-down");

btnUp.addEventListener("click", e => {
  e.preventDefault();
  scrollToElement(".hero");
});

btnDown.addEventListener("click", e => {
  e.preventDefault();
  scrollToElement(".my-works");
});
