const burger = document.querySelector('.burger')

if (burger) {
  burger.addEventListener('click', (e) => {
    if (window.innerWidth > 768) return false
    e.currentTarget.classList.toggle('burger--active')
    document.querySelector('body').classList.toggle('open-mobile')
  })

  window.addEventListener('resize', () => {
    if (window.innerWidth < 768) return false
    burger.classList.remove('burger--active')
    document.querySelector('body').classList.remove('open-mobile')
  })
}
