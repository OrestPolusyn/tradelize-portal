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
  if (window.innerWidth > 768) {
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
  contentSize.style.height = window.innerHeight - headerHeight.clientHeight + 'px'

  if (window.innerWidth >= 768) {
    if (sideBarFeed) {
      contentSize.style.paddingLeft = asideMenuWidth.clientWidth + sideBarFeed.clientWidth + 'px'
      sideBarFeed.style.left = asideMenuWidth.clientWidth + 'px'
    } else {
      contentSize.style.paddingLeft = asideMenuWidth.clientWidth + 5 + 'px'
      if (asideProfileWidth) {
        contentSize.style.paddingRight = asideProfileWidth.clientWidth - 0 + 'px'
      }
    }
  } else {
    if (sideBarFeed) {
      sideBarFeed.style.left = 0 + 'px'
    }
    contentSize.style.paddingLeft = 0 + 'px'
    contentSize.style.paddingRight = 0 + 'px'
  }
}
