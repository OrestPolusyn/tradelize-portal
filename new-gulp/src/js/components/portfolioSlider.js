const breakpoint = window.matchMedia('(min-width:769px)')

let mySwiper

const swiperPortfolio = document.querySelector('.swiper')

if (swiperPortfolio) {
  const breakpointChecker = function () {
    if (breakpoint.matches === true) {
      if (mySwiper !== undefined) mySwiper.destroy(true, true); return
    } else if (breakpoint.matches === false) {
      return enableSwiper()
    }
  };

  const enableSwiper = function () {
    mySwiper = new Swiper('swiperPortfolio', {
      slidesPerView: 1,
      keyboardControl: true,
      grabCursor: true,
      pagination: '.swiper-pagination',
      paginationClickable: true,
    })
  }
  breakpoint.addListener(breakpointChecker)

  breakpointChecker()
}
