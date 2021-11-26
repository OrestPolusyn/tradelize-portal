let contentSize = document.querySelector('.main'),
  headerHeight = document.querySelector('.header'),
  asideMenuWidth = document.querySelector('.aside-nav');

window.addEventListener('resize', mainContentWidth);
mainContentWidth();

function mainContentWidth() {

  contentSize.style.height = window.innerHeight - headerHeight.clientHeight + 'px';

  if (window.innerWidth >= 768) {
    contentSize.style.paddingLeft = asideMenuWidth.clientWidth + 'px';
  } else {
    contentSize.style.paddingLeft = 0 + 'px';

  }
}
