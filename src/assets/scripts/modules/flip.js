const authBtn = document.querySelector('.auth-btn')
const flip = document.querySelector('.user-wrap')

authBtn.addEventListener('click', e => {
  e.preventDefault()
  flip.classList.toggle('user-wrap--flipped')
})
