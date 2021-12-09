const contentSize = document.querySelector('.main')
const sideBar = document.querySelector('.aside-nav-list');

if (sideBar) {

  (function (timer) {
    window.addEventListener('load', function () {
      contentSize.addEventListener('scroll', function scrollShow(e) {
        const el = document.querySelector('.main');
        (function (el) {
          el.classList.add('scroll-mac')
          clearTimeout(timer)
          timer = setTimeout(function () {
            el.classList.remove('scroll-mac')
          }, 200)
        })(el)
      })
    })

    window.addEventListener('load', function () {
      sideBar.addEventListener('scroll', function scrollShow(e) {
        const el = sideBar;
        (function (el) {
          el.classList.add('scroll-mac')
          clearTimeout(timer)
          timer = setTimeout(function () {
            el.classList.remove('scroll-mac')
          }, 200)
        })(el)
      })
    })
  })()
}
