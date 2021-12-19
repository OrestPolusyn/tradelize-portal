const contentSize = document.querySelector('.main')
const headerHeight = document.querySelector('.header')
const asideMenuWidth = document.querySelector('.aside-nav')
const sideBarFeed = document.querySelector('.feed-side')
const sideTabsFeed = document.querySelector('.feed-side .tabs')
const searchTabsFeed = document.querySelector('.feed-side .search')
const asideProfileWidth = document.querySelector('.portfolio-side')

if (asideMenuWidth) {
  window.addEventListener('resize', mainContentWidth(asideMenuWidth))
  mainContentWidth(asideMenuWidth)
} else if (asideMenuWidth && asideProfileWidth) {
  window.addEventListener('resize', mainContentWidth(asideMenuWidth, asideProfileWidth))
  mainContentWidth(asideMenuWidth, asideProfileWidth)
}

function mainContentWidth() {
  contentSize.style.height = window.innerHeight - headerHeight.clientHeight + 'px'

  if (window.innerWidth >= 768) {
    if (sideBarFeed) {
      contentSize.style.paddingLeft = asideMenuWidth.clientWidth + sideBarFeed.clientWidth + 'px';
      sideBarFeed.style.left = asideMenuWidth.clientWidth + 'px'
    } else {
      contentSize.style.paddingLeft = asideMenuWidth.clientWidth + 5 + 'px';
      contentSize.style.paddingRight = asideProfileWidth.clientWidth - 0 + 'px';
    }
  } else {
    if (sideBarFeed) {
      sideBarFeed.style.left = 0 + 'px'
    }
    contentSize.style.paddingLeft = 0 + 'px'
    contentSize.style.paddingRight =  0 + 'px';
  }
}
