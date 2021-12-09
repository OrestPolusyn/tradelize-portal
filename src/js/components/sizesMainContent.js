const contentSize = document.querySelector('.main')
const headerHeight = document.querySelector('.header')
const asideMenuWidth = document.querySelector('.aside-nav')
const sideBarFeed = document.querySelector('.feed-side')
const sideTabsFeed = document.querySelector('.feed-side .tabs')
const searchTabsFeed = document.querySelector('.feed-side .search')

if (asideMenuWidth) {
  window.addEventListener('resize', mainContentWidth)
  mainContentWidth()

  function mainContentWidth() {
    contentSize.style.height = window.innerHeight - headerHeight.clientHeight + 'px'

    if (window.innerWidth >= 768) {
      contentSize.style.paddingLeft = asideMenuWidth.clientWidth + 5 + 'px'
    } else {
      contentSize.style.paddingLeft = 0 + 'px'
    }
  }
}
