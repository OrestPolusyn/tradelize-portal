const breakpoint = window.matchMedia('(min-width:769px)')

let mySwiper

const breakpointChecker = function () {
  if (breakpoint.matches === true) {
    if (mySwiper !== undefined) mySwiper.destroy(true, true);
    return
  } else if (breakpoint.matches === false) {
    return enableSwiper()
  }
};

const enableSwiper = function () {
  mySwiper = new Swiper('.swiper', {
    centeredSlides: true,
    keyboardControl: true,
    grabCursor: true,
    pagination: '.swiper-pagination',
    paginationClickable: true,
  })
}
breakpoint.addListener(breakpointChecker)

breakpointChecker()
