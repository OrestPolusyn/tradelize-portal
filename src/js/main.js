/**
 * название функции
 *
 * @param {number} first - первое число
 * @returns {number}
 */

if (document.querySelector('.aside-nav')) {
  document.querySelector('.aside-nav').addEventListener('click', function (e) {
    document.querySelector('body').classList.remove('menu-open')
    document.querySelector('.aside-nav').classList.remove('aside-nav-open')
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

if (document.querySelector('.trading-flow-choose-text')) {
  document.querySelector('.trading-flow-choose-text').addEventListener('click', () => {
    document.querySelector('.trading-flow-choose').classList.toggle('trading-flow-choose-open')
  })
}

if (document.querySelectorAll('.trading-flow-choose-link').length > 0) {
  document.querySelectorAll('.trading-flow-choose-link').forEach(element => {
    element.addEventListener('click', (el) => {
      document.querySelector('.trading-flow-choose-text').innerHTML = el.currentTarget.innerText
      document.querySelector('.trading-flow-choose').classList.remove('trading-flow-choose-open')
    })
  })
}

if (document.querySelector('.wallet-code')) {
  document.querySelector('.wallet-address-btn').addEventListener('click', () => {
    document.querySelector('.wallet-code').classList.add('wallet-code-show')
  })
}
