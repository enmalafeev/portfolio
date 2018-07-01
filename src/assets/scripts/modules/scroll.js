let scroller = require('scroll-to-js');

const btnUp = document.querySelector("#btn-up");
let elem = document.querySelector(".hero");

btnUp.addEventListener("click", e => {
  e.preventDefault();
  scroller(document.body, elem.offsetTop, 2000);
});
