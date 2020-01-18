const btn = document.querySelector(".header__menu");
const overlay = document.querySelector(".overlay");

btn.addEventListener("click", e => {
  overlay.classList.toggle("overlay-show");
  document.body.classList.toggle("no-scroll");
});
