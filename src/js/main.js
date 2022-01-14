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


const contentSize = document.querySelector('.main')
const headerHeight = document.querySelector('.header')
const asideMenuWidth = document.querySelector('.aside-nav')
const sideBarFeed = document.querySelector('.feed-side')
const asideProfileWidth = document.querySelector('.profile-side')
const sidePortfolioBox = document.querySelectorAll('.profile-side-box')

if (asideMenuWidth) {
  window.addEventListener('resize', () => {
    mainContentWidth(asideMenuWidth)
  })
  mainContentWidth(asideMenuWidth)
} else if (asideMenuWidth && asideProfileWidth) {
  window.addEventListener('resize', () => {
    mainContentWidth(asideMenuWidth, asideProfileWidth)
  })
  mainContentWidth(asideMenuWidth, asideProfileWidth)
}

if (sidePortfolioBox.length > 0) {
  if (window.innerWidth > 769) {
    window.addEventListener('resize', () => {
      sidePortfolio(sidePortfolioBox)
    })
    sidePortfolio(sidePortfolioBox)
  }
}

function sidePortfolio() {
  sidePortfolioBox.forEach(element => {
    element.style.height = window.innerHeight - headerHeight.clientHeight + 'px'
  })
}

function mainContentWidth() {
  document.querySelector('.main').style.height = window.innerHeight - headerHeight.clientHeight + 'px'

  if (window.innerWidth >= 769) {
    if (sideBarFeed) {
      document.querySelector('.main').style.paddingLeft = asideMenuWidth.clientWidth + sideBarFeed.clientWidth + 'px'
      sideBarFeed.style.left = asideMenuWidth.clientWidth + 'px'
    } else {
      document.querySelector('.main').style.paddingLeft = asideMenuWidth.clientWidth + 5 + 'px'
      if (asideProfileWidth) {
        contentSize.style.paddingRight = asideProfileWidth.clientWidth - 0 + 'px'
      }
    }
  } else {
    if (sideBarFeed) {
      sideBarFeed.style.left = 0 + 'px'
    }
    document.querySelector('.main').style.paddingLeft = 0 + 'px'
    document.querySelector('.main').style.paddingRight = 0 + 'px'
  }
}
