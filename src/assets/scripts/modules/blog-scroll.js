const cnt = document.querySelector(".container");
const menu = document.querySelector(".blog-left");

window.onscroll = e => {
  if (cnt.getBoundingClientRect().top <= 0) {
    menu.classList.add("blog-left--fixed");
  } else if (cnt.getBoundingClientRect().top > 0) {
    menu.classList.remove("blog-left--fixed");
  }
};
