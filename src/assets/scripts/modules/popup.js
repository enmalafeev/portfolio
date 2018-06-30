const btn = document.querySelector(".header__menu");
const overlay = document.querySelector(".overlay");

btn.addEventListener("click", e => {
  overlay.classList.toggle("overlay-show");
  // document.body.style.overflow = "hidden";
  // document.body.style.maxHeight = "100vh";
});
