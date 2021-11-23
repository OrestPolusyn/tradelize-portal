"use strict";

var bodyStyles = window.getComputedStyle(document.body);
var gap = parseInt(bodyStyles.getPropertyValue('--grid-gap'));
// const burger = document.querySelector('.burger');
// const menu = document.querySelector('.header__nav');
// const overlay = document.querySelector('.overlay');
// const disScroll = () => {
//   let pagePosition = window.scrollY;
//   document.body.classList.add('dis-scroll');
//   document.body.dataset.position = pagePosition;
//   document.body.style.top = -pagePosition + 'px';
// }
// const enScroll = () => {
//   let pagePosition = parseInt(document.body.dataset.position, 10);
//   document.body.style.top = 'auto';
//   document.body.classList.remove('dis-scroll');
//   window.scrollTo({
//     top: pagePosition,
//     left: 0
//   });
//   document.body.removeAttribute('data-position');
// }
// burger.addEventListener('click', (e) => {
//   burger.classList.toggle('burger--active');
//   menu.classList.toggle('header__nav--active');
//   overlay.classList.toggle('overlay--active');
//   if (burger.classList.contains('burger--active')) {
//     disScroll();
//   } else {
//     enScroll();
//   }
// });
"use strict";
"use strict";

var passwordBtnChange = Array.from(document.querySelectorAll('.field-btn'));
passwordBtnChange.forEach(function (el) {
  el.addEventListener('click', function () {
    if (!this.classList.contains('field-btn--show')) {
      this.classList.add('field-btn--show');
      this.previousElementSibling.setAttribute("type", "text");
    } else {
      this.classList.remove('field-btn--show');
      this.previousElementSibling.setAttribute("type", "password");
    }
  });
});
"use strict";

var contentWidth = document.querySelector('.main'),
    asideMenuWidth = document.querySelector('.aside-nav');
window.addEventListener('resize', mainContentWidth);
mainContentWidth();

function mainContentWidth() {
  contentWidth.style.paddingLeft = asideMenuWidth.clientWidth + 'px';
}
/**
  * название функции
  *
  * @param {number} first - первое число
  * @returns {number}
  */
"use strict";
//# sourceMappingURL=main.js.map
