/**
 * название функции
 *
 * @param {number} first - первое число
 * @returns {number}
 */

if (document.querySelector('.aside-nav')) {
  document.querySelector('.aside-nav').addEventListener('click', function (e) {
    document.querySelector('body').classList.remove('open-mobile')
    document.querySelector('.burger').classList.remove('burger--active')
  })
}

const btnTableShow = document.querySelector('.table-btn-show')
const tableTradingFlow = document.querySelector('.trading-flow-table')

if (btnTableShow) {
  btnTableShow.addEventListener('click', () => {
    tableTradingFlow.classList.toggle('trading-flow-table-show')

    if (tableTradingFlow.classList.contains('trading-flow-table-show')) {
      btnTableShow.textContent = 'Show less'
    } else {
      btnTableShow.textContent = 'Show more'
    }
  })
}
