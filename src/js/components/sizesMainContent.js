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
      if (sideBarFeed) {
        contentSize.style.paddingLeft = asideMenuWidth.clientWidth + sideBarFeed.clientWidth + 'px';
        sideBarFeed.style.left = asideMenuWidth.clientWidth + 'px'

      } else {
        contentSize.style.paddingLeft = asideMenuWidth.clientWidth + 5 + 'px';
      }
    } else {
      if (sideBarFeed) {
        sideBarFeed.style.left = 0 + 'px'
      } 
      contentSize.style.paddingLeft = 0 + 'px'
    }
  }
}
