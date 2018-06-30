var blur = (function() {
  var wrapper = document.querySelector(".reviews"),
    form = document.querySelector(".blur-form");
  return {
    set: () => {
      const imgWidth = document.querySelector(".reviews").offsetWidth;
      const posLeft = -wrapper.offsetLeft;
      const posTop = -wrapper.offsetTop;
      const blurCSS = form.style;
      const formTop = form.offsetTop;
      const res = formTop + posTop;
      const posBottom = -(form.offsetTop + form.getBoundingClientRect().height);

      blurCSS.backgroundSize = `${imgWidth}px auto`;
      blurCSS.backgroundPosition = posLeft + "px" + " " + posBottom + "px";
      // console.log(posBottom);

      // blurCSS.backgroundPosition = "10px";
    }
  };
})();

blur.set();

window.onresize = function() {
  blur.set();
};
