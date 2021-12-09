/**
 * название функции
 *
 * @param {number} first - первое число
 * @returns {number}
 */

document.querySelector('.aside-nav').addEventListener('click', function (e) {
  document.querySelector('body').classList.remove('open-mobile')
  document.querySelector('.burger').classList.remove('burger--active')
})

