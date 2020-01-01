const blur = (function() {
  const wrapper = document.querySelector('.reviews')
  const form = document.querySelector('.blur-form')
  return {
    set: () => {
      // соотношение ширины и высоты бекграунда
      const review = document.querySelector('.reviews')
      const formWrapper = document.querySelector('.blur-form-wrapper')
      const topReview = review.offsetTop
      const heightReview = review.getBoundingClientRect().height
      const wrapperTop = formWrapper.offsetTop
      const dif = topReview - wrapperTop
      const blurCSS = form.style

      blurCSS.backgroundSize = `auto ${heightReview}px`
      blurCSS.backgroundPosition = `${-formWrapper.offsetLeft}px ${dif}px`
    },
  }
})()
blur.set()
window.onresize = function() {
  blur.set()
}
