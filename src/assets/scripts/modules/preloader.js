const images = document.images;
const imagesTotalCount = images.length;
let imagesLoadedCount = 0;
let preloader = document.querySelector(".preloader");
let percDisplay = document.getElementById("perc_load");

for (let i = 0; i < imagesTotalCount; i++) {
  let imageClone = new Image();
  imageClone.onload = imageLoaded;
  imageClone.onerror = imageLoaded;
  imageClone.src = images[i].src;
}

function imageLoaded() {
  imagesLoadedCount++;
  percDisplay.innerHTML =
    (((100 / imagesTotalCount) * imagesLoadedCount) << 0) + "%";

  if (imagesLoadedCount >= imagesTotalCount) {
    setTimeout(() => {
      if (!preloader.classList.contains("done")) {
        preloader.classList.add("done");
      }
    }, 700);
  }
}
