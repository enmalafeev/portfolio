const btn = document.querySelector(".swiper");
const blogLeft = document.querySelector(".blog-left");

btn.addEventListener("click", e => {
  blogLeft.classList.toggle("fixed");
});
