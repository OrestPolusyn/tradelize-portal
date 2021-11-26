let contentSize = document.querySelector('.main'),
  sideBar = document.querySelector('.aside-nav-list');

(function (timer) {

  window.addEventListener('load', function () {
    contentSize.addEventListener('scroll', function scrollShow(e) {
      const el = document.querySelector('.main');
      (function (el) {
        el.classList.add('scroll-mac');
        clearTimeout(timer);
        timer = setTimeout(function () {
          el.classList.remove('scroll-mac');
        }, 200);
      })(el);
    })
  });

  window.addEventListener('load', function () {
    sideBar.addEventListener('scroll', function scrollShow(e) {
      const el = sideBar;
      (function (el) {
        el.classList.add('scroll-mac');
        clearTimeout(timer);
        timer = setTimeout(function () {
          el.classList.remove('scroll-mac');
        }, 200);
      })(el);
    })
  });


})();
