const strip1 = document.querySelector(".header__menu-strip-1");
const strip2 = document.querySelector(".header__menu-strip-2");
const strip3 = document.querySelector(".header__menu-strip-3");

const menu = document.querySelector(".hamburger");

menu.addEventListener("click", e => {
  strip1.classList.toggle("open");
  strip2.classList.toggle("open");
  strip3.classList.toggle("open");
});
