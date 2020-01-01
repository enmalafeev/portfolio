const cnt = document.querySelector('.container')
const menu = document.querySelector('.blog-left')

window.onscroll = e => {
  if (cnt.getBoundingClientRect().top <= 0) {
    menu.classList.add('blog-left--fixed')
  } else if (cnt.getBoundingClientRect().top > 0) {
    menu.classList.remove('blog-left--fixed')
  }
  addActiveClass()
}

function addActiveClass() {
  let obj = {
    article0: 'link0',
    article1: 'link1',
    article2: 'link2',
    article3: 'link3',
  }
  for (const prop in obj) {
    let article = document.getElementById(prop)
    let blogLink = document.getElementById(obj[prop])
    let { top, bottom } = article.getBoundingClientRect()
    if (top < 100 && bottom > 0) {
      blogLink.classList.add('menu-articles__link--active')
    } else {
      blogLink.classList.remove('menu-articles__link--active')
    }
  }
}
