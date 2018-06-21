var blur = (function() {
  var wrapper = document.querySelector(".reviews"),
    form = document.querySelector(".blur-form");
  return {
    set: () => {
      var imgWidth = document.querySelector(".reviews").offsetWidth,
        posLeft = -wrapper.offsetLeft,
        posTop = -wrapper.offsetTop,
        blurCSS = form.style;

      console.log(imgWidth);

      blurCSS.backgroundSize = `${imgWidth}px auto`;
      // blurCSS.backgroundPosition = posLeft + "px" + " " + posTop + "px";
    }
  };
})();

blur.set();

window.onresize = function() {
  blur.set();
};