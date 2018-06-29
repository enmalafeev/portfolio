var authBtn = document.querySelector(".auth-btn");
var flip = document.querySelector(".user-wrap");

authBtn.addEventListener("click", function(e) {
  e.preventDefault();
  flip.classList.toggle("user-wrap--flipped");
});
