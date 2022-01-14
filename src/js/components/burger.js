const burger = document.querySelector('.burger')

if (burger) {
  burger.addEventListener('click', (e) => {
    if (window.innerWidth > 769) return false
    e.currentTarget.classList.toggle('burger--active')
    document.querySelector('.aside-nav').classList.toggle('aside-nav-open')
    document.querySelector('body').classList.toggle('menu-open')
  })

  window.addEventListener('resize', () => {
    if (window.innerWidth < 769) return false
    burger.classList.remove('burger--active')
    document.querySelector('.aside-nav').classList.remove('aside-nav-open')
    document.querySelector('body').classList.remove('menu-open')
  })
}