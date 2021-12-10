let contentWidth = document.querySelector('.main'),
  asideMenuWidth = document.querySelector('.aside-nav');

window.addEventListener('resize', mainContentWidth);
mainContentWidth();

function mainContentWidth() {
  contentWidth.style.paddingLeft = asideMenuWidth.clientWidth + 'px';
}
