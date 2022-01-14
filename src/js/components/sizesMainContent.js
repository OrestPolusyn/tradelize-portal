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
