"use strict";
"use strict";

// const burger = document.querySelector('.burger');
// const menu = document.querySelector('.header__nav');
// const overlay = document.querySelector('.overlay');
// const disScroll = () => {
//   let pagePosition = window.scrollY;
//   document.body.classList.add('dis-scroll');
//   document.body.dataset.position = pagePosition;
//   document.body.style.top = -pagePosition + 'px';
// }
// const enScroll = () => {
//   let pagePosition = parseInt(document.body.dataset.position, 10);
//   document.body.style.top = 'auto';
//   document.body.classList.remove('dis-scroll');
//   window.scrollTo({
//     top: pagePosition,
//     left: 0
//   });
//   document.body.removeAttribute('data-position');
// }
// burger.addEventListener('click', (e) => {
//   burger.classList.toggle('burger--active');
//   menu.classList.toggle('header__nav--active');
//   overlay.classList.toggle('overlay--active');
//   if (burger.classList.contains('burger--active')) {
//     disScroll();
//   } else {
//     enScroll();
//   }
// });
var burger = document.querySelector('.burger');

if (burger) {
  burger.addEventListener('click', function (e) {
    if (window.innerWidth > 768) return false;
    e.currentTarget.classList.toggle('burger--active');
    document.querySelector('body').classList.toggle('open-mobile');
  });
  window.addEventListener('resize', function () {
    if (window.innerWidth < 768) return false;
    burger.classList.remove('burger--active');
    document.querySelector('body').classList.remove('open-mobile');
  });
}
"use strict";

var charactersNumber = document.querySelector('.posts-publish-number span');
var formPostWriteSend = document.querySelector('.posts-publish-form  .field-area');
var btnSubmitForm = document.querySelector('.posts-publish-apply.btn');
var btnPostReset = document.querySelector('.posts-publish-cancel');
var formPostWriteNumberField = document.querySelector('.posts-publish-number');
var formPostWriteBtns = document.querySelector('.posts-publish-btns');

if (formPostWriteSend) {
  var formPostSend = function formPostSend() {
    charactersNumber.textContent = 1000 - formPostWriteSend.value.length;

    if (formPostWriteSend.focus) {
      formPostWriteNumberField.classList.add('visible');
      formPostWriteBtns.classList.add('visible');
    } else {
      formPostWriteNumberField.classList.remove('visible');
      formPostWriteBtns.classList.remove('visible');
      document.querySelector('.posts-publish textarea').style.height = 45 + 'px';
    }
  };

  formPostWriteSend.addEventListener('keyup', function () {
    formPostSend();
  });
  formPostWriteSend.addEventListener('input', function () {
    formPostSend();
  });
  formPostWriteSend.addEventListener('focus', function () {
    formPostSend();
  });
  formPostWriteSend.addEventListener('keyup', function () {
    if (formPostWriteSend.value.length > 0) {
      btnSubmitForm.classList.remove('disabled');
    } else {
      btnSubmitForm.classList.add('disabled');
    }
  });
  btnPostReset.addEventListener('click', function () {
    btnSubmitForm.classList.add('disabled');
    formPostWriteNumberField.classList.remove('visible');
    formPostWriteBtns.classList.remove('visible');
  });
}
"use strict";

var valueProfitInput = document.querySelector('.trading-flow-label-calc input');
var valueProfitCalc = document.querySelector('.trading-flow-label-profit input');

if (valueProfitInput) {
  valueProfitInput.addEventListener("keyup", function () {
    calcProfitFlow();
  });
  calcProfitFlow();
}

function calcProfitFlow() {
  var calcProfit;

  if (+valueProfitInput.dataset.calc < 0) {
    calcProfit = +valueProfitInput.value + valueProfitInput.value / 100 * valueProfitInput.dataset.calc;
  } else if (+valueProfitInput.dataset.calc > 0) {
    calcProfit = +valueProfitInput.value + valueProfitInput.value / 100 * valueProfitInput.dataset.calc;
  }

  valueProfitCalc.value = calcProfit;

  if (valueProfitCalc.value < 1) {
    valueProfitCalc.value = 1;
    valueProfitInput.value = 0;
  }
}
"use strict";

var doghnutExchange = document.querySelector('.profile-distribution-exchange');
var doghnutContracts = document.querySelector('.profile-distribution-contracts');
var doghnutCurrencies = document.querySelector('.profile-distribution-currencies');

if (doghnutCurrencies || doghnutContracts || doghnutExchange) {
  doghnutExchange.getContext("2d");
  doghnutContracts.getContext("2d");
  doghnutCurrencies.getContext("2d");
  var arrayDoghnutExchange = [{
    value: 40
  }, {
    value: 120
  }, {
    value: 10
  }, {
    value: 20
  }, {
    value: 20
  }, {
    value: 12
  }, {
    value: 1
  }, {
    value: 120
  }, {
    value: 120
  }];
  var arrayDoghnutContracts = [{
    value: 2440
  }, {
    value: 1240
  }, {
    value: 1440
  }, {
    value: 1220
  }, {
    value: 1120
  }, {
    value: 112
  }, {
    value: 111
  }, {
    value: 1201
  }, {
    value: 1210
  }];
  var arrayDoghnutCurrencies = [{
    value: 400
  }, {
    value: 1200
  }, {
    value: 1000
  }, {
    value: 200
  }, {
    value: 2000
  }, {
    value: 1002
  }, {
    value: 1000
  }, {
    value: 120
  }, {
    value: 1200
  }];
  var configexchange = {
    type: 'doughnut',
    data: {
      datasets: [{
        data: arrayDoghnutExchange,
        backgroundColor: ['rgba(167, 194, 249, 1)', 'rgba(144, 171, 222, 1)', 'rgba(122, 152, 212, 1)', 'rgba(83, 120, 190, 1)', 'rgba(54, 98, 159, 1)', 'rgba(25, 66, 134, 1)', 'rgba(15, 46, 97, 1)'],
        hoverOffset: 10
      }]
    },
    options: {
      responsive: true
    }
  };
  var configcontracts = {
    type: 'doughnut',
    data: {
      datasets: [{
        data: arrayDoghnutContracts,
        backgroundColor: ['rgba(225, 115, 110, 1)', 'rgba(223, 148, 108, 1)', 'rgba(226, 216, 132, 1)', 'rgba(129, 200, 133, 1)', 'rgba(131, 215, 196, 1)', 'rgba(176, 189, 184, 1)'],
        hoverOffset: 10
      }]
    },
    options: {
      responsive: true
    }
  };
  var configcurrencies = {
    type: 'doughnut',
    data: {
      datasets: [{
        data: arrayDoghnutCurrencies,
        backgroundColor: ['rgba(225, 115, 110, 1)', 'rgba(223, 148, 108, 1)', 'rgba(226, 216, 132, 1)', 'rgba(129, 200, 133, 1)', 'rgba(131, 215, 196, 1)', 'rgba(176, 189, 184, 1)'],
        hoverOffset: 10
      }]
    },
    options: {
      responsive: true
    }
  };
  var doghnutExchangeChart = new Chart(doghnutExchange, configexchange);
  var doghnutContractsChart = new Chart(doghnutContracts, configcontracts);
  var doghnutCurrenciesChart = new Chart(doghnutCurrencies, configcurrencies);
}
"use strict";

var imageAdd = document.querySelector('.posts-publish-image-thumb');
var addImagePost = document.querySelector('.posts-publish-btn');
var imageList = document.querySelector('.posts-publish-gallery-list');

if (imageAdd) {
  var call = function call() {
    var btnDeleteImage = Array.from(document.querySelectorAll('.posts-publish-image-delete'));
    btnDeleteImage.forEach(function (element) {
      element.addEventListener('click', function (e) {
        e.currentTarget.parentNode.remove();
      });
    });
  };

  addImagePost.addEventListener('input', function (event) {
    var urlImg = URL.createObjectURL(event.target.files[0]);
    imageList.innerHTML += "<li class=\"posts-publish-gallery-item\"><img class = \"posts-publish-image-thumb\" src='" + urlImg + "' height = \"100\"  width = \"100\"/><button class=\"posts-publish-image-delete\" type=\"button\"><span class=\"sr-only\">\u0423\u0434\u0430\u043B\u0438\u0442\u044C \u0438\u0437\u043E\u0431\u0440\u0430\u0436\u0435\u043D\u0438\u0435</span></button></li>";
    call();
  });
}
"use strict";

var fitersCopyModal = Array.from(document.querySelectorAll('.modals-copy-content'));
var fitersCopyModalBtn = Array.from(document.querySelectorAll('.modals-copy-filters .tab'));

if (fitersCopyModal.length > 0) {
  var openCopyTab = function openCopyTab(e) {
    var btnPath = e.currentTarget.firstElementChild.getAttribute('data-copy-filer');
    fitersCopyModalBtn.forEach(function (element) {
      element.classList.remove('tab-active');
    });

    if (e.currentTarget.firstElementChild.hasAttribute('data-copy-filer')) {
      Array.from(document.querySelectorAll('.modals-copy-content')).forEach(function (element) {
        element.classList.remove('modals-copy-content-open');
      });
      e.currentTarget.classList.add('tab-active');
      document.querySelector("[data-content-filer=\"".concat(btnPath, "\"]")).classList.add('modals-copy-content-open');
    }
  };

  fitersCopyModalBtn.forEach(function (element) {
    element.addEventListener('click', function (e) {
      openCopyTab(e);
    });
  });
}
"use strict";

var formComment = Array.from(document.querySelectorAll('.post-write'));
var formTextarea = Array.from(document.querySelectorAll('textarea'));

if (formComment.length > 0) {
  var checkLenght = function checkLenght() {
    formTextarea.forEach(function (item) {
      if (item.value.length === 800) {
        item.nextElementSibling.classList.add('post-write-warning-active');
      } else {
        item.nextElementSibling.classList.remove('post-write-warning-active');
      }
    });
  };

  formComment.forEach(function (element) {
    element.addEventListener('submit', function (e) {
      e.preventDefault();
      checkLenght();
    });
    element.addEventListener('keyup', function (e) {
      checkLenght();
    });
  });
}

var textarea = Array.from(document.querySelectorAll('textarea'));

if (textarea.length > 0) {
  textarea.forEach(function (element) {
    element.addEventListener('keydown', autosize);
  });
}

function autosize() {
  var el = this;
  setTimeout(function () {
    el.style.cssText = 'height:auto; padding:0'; // for box-sizing other than "content-box" use:

    el.style.cssText = '-moz-box-sizing:content-box';
    el.style.cssText = 'height:' + el.scrollHeight + 'px';
  }, 0);
}
"use strict";

var openModals = Array.from(document.querySelectorAll('.btn-modal'));
var clodeModal = Array.from(document.querySelectorAll('[data-close="modals-close"]'));

if (openModals.length > 0) {
  var openComment = function openComment(e) {
    var btnModOut = e.currentTarget.getAttribute('data-modals');
    var btnModIn = e.currentTarget.getAttribute('data-modal-filter');

    if (e.currentTarget.hasAttribute('data-modals')) {
      Array.from(document.querySelectorAll('.modals')).forEach(function (element) {
        element.classList.remove('modals-open');
      });
      document.querySelector("[data-modal='".concat(btnModOut, "']")).classList.add('modals-open');
    }

    if (e.currentTarget.hasAttribute('data-modal-filter')) {
      Array.from(document.querySelectorAll('.modal')).forEach(function (element) {
        element.classList.remove('modal-open');
      });
      document.querySelector("[data-target-filter='".concat(btnModIn, "']")).classList.add('modal-open');
    }
  };

  openModals.forEach(function (element) {
    element.addEventListener('click', function (e) {
      openComment(e);
    });
  });

  if (clodeModal.length > 0) {
    clodeModal.forEach(function (element) {
      element.addEventListener('click', function () {
        Array.from(document.querySelectorAll('.modals')).forEach(function (element) {
          element.classList.remove('modals-open');
        });
        Array.from(document.querySelectorAll('.modal')).forEach(function (element) {
          element.classList.remove('modal-open');
        });
      });
    });
  }
}
"use strict";

var dropDownWritePostForm = document.querySelector('.posts-publish-form');
var dropDownWritePost = document.querySelector('.posts-publish-dropdown-list');

if (dropDownWritePostForm) {
  window.addEventListener('click', function (e) {
    if (e.target.classList.contains('posts-publish-dropdown')) {
      dropDownWritePost.classList.toggle('posts-publish-dropdown-open');
    } else {
      dropDownWritePost.classList.remove('posts-publish-dropdown-open');
    }
  });
  dropDownWritePost.addEventListener('click', function (e) {
    document.querySelector('.posts-publish-dropdown-text').innerText = e.target.textContent;
  });
}
"use strict";

var passwordBtnChange = Array.from(document.querySelectorAll('.field-btn'));

if (passwordBtnChange.length > 0) {
  passwordBtnChange.forEach(function (el) {
    el.addEventListener('click', function () {
      if (!this.classList.contains('field-btn-show')) {
        this.classList.add('field-btn-show');
        this.previousElementSibling.setAttribute('type', 'text');
      } else {
        this.classList.remove('field-btn-show');
        this.previousElementSibling.setAttribute('type', 'password');
      }
    });
  });
}
// var readURL = function (input) {
//   if (input.files && input.files[0]) {
//     var reader = new FileReader();
//     reader.onload = function (e) {
//       $('.profile-pic').attr('src', e.target.result);
//     }
//     reader.readAsDataURL(input.files[0]);
//   }
// }
// $(".file-upload").on('change', function () {
//   readURL(this);
// });
// $(".upload-button").on('click', function () {
//   $(".file-upload").click();
// });
"use strict";
"use strict";

function _createForOfIteratorHelper(o, allowArrayLike) { var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"]; if (!it) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = it.call(o); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

var moreDataBaby = [];
var labelsData = [];
Date.prototype.monthNames = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

Date.prototype.getMonthName = function () {
  return this.monthNames[this.getMonth()];
};

Date.prototype.getShortMonthName = function () {
  return this.getMonthName().substr(0, 3);
};

fetch('../jsons/chart.json').then(function (response) {
  return response.json();
}).then(function (data) {
  if (document.querySelector('.profile-chartic')) {
    var _iterator = _createForOfIteratorHelper(data),
        _step;

    try {
      var _loop = function _loop() {
        var dataItem = _step.value;
        dataItem.items.forEach(function (element) {
          var newDate = new Date(element.x * 1000);
          var monthDate = newDate.getShortMonthName();
          var numberDate = newDate.getDate();
          labelsData.push(numberDate + " " + monthDate);
          moreDataBaby.push(element.y);
        });
        var gradientChart = document.querySelector('.profile-chartic').getContext('2d').createLinearGradient(0, 550, 0, 0);
        gradientChart.addColorStop(0, 'rgba(64, 106, 255, 0)');
        gradientChart.addColorStop(1, ' rgba(179, 195, 255, 0.5)');
        var myDataLine = {
          labels: labelsData,
          datasets: [{
            label: false,
            fill: true,
            data: moreDataBaby,
            cubicInterpolationMode: 'monotone',
            tension: 0.4,
            borderWidth: 1
          }]
        };
        var myDataBar = {
          labels: labelsData,
          datasets: [{
            label: false,
            fill: true,
            data: moreDataBaby,
            cubicInterpolationMode: 'monotone',
            tension: 0.4
          }]
        };
        var optionsCharts = {
          borderWidth: 1,
          radius: 0,
          responsive: true,
          scales: {
            y: {
              type: 'linear',
              beginAtZero: true
            },
            x: {
              grid: {
                display: false
              }
            }
          },
          plugins: {
            legend: false,
            tooltip: {
              mode: 'index',
              intersect: false
            }
          },
          elements: {
            bar: {
              backgroundColor: colorize(true),
              borderColor: colorize(true)
            },
            line: {
              backgroundColor: gradientChart,
              borderColor: 'rgb(64, 106, 255)'
            }
          },
          hover: {
            mode: 'nearest',
            intersect: true
          }
        };
        Array.from(document.querySelectorAll('[data-chart]')).forEach(function (element) {
          element.addEventListener('click', function () {
            updateChartType(element.dataset.chart);
          });
        }); // Default chart defined with type: 'line'

        var ctx = document.querySelector('.profile-chartic').getContext('2d');

        if (document.querySelector('.profile-chartic-trading')) {
          var ctxTrading = document.querySelector('.profile-chartic-trading').getContext('2d');
        }

        var typeChart = 'line';

        if (!document.querySelector('.profile-chartic').classList.contains('profile-chartic-trading')) {
          typeChart = 'line';
        } else {
          typeChart = 'bar';
        }

        var myChart = new Chart(ctx, {
          type: typeChart,
          data: myDataLine,
          options: optionsCharts
        }); // Function runs on chart type select update

        function updateChartType(item) {
          // Since you can't update chart type directly in Charts JS you must destroy original chart and rebuild
          myChart.destroy();
          myChart = new Chart(ctx, {
            type: item,
            data: myDataBar,
            options: optionsCharts
          });
        }

        ;
      };

      for (_iterator.s(); !(_step = _iterator.n()).done;) {
        _loop();
      }
    } catch (err) {
      _iterator.e(err);
    } finally {
      _iterator.f();
    }
  }
});

function colorize(opaque) {
  return function (ctx) {
    var v = ctx.parsed.y;
    var c = v < 0 ? '#eb5757' : '#406aff';
    return opaque ? c : Utils.transparentize(c, 1 - Math.abs(v / 150));
  };
}
"use strict";

var postOpenCommentsBtn = Array.from(document.querySelectorAll('.post-btn'));

if (postOpenCommentsBtn.length > 0) {
  var openComment = function openComment(e) {
    var btnPath = e.currentTarget.getAttribute('data-path');
    var btnPathReply = e.currentTarget.getAttribute('data-path-reply');

    if (e.currentTarget.hasAttribute('data-path')) {
      Array.from(document.querySelectorAll('.comments')).forEach(function (element) {
        element.classList.remove('comments-open');
      });
      document.querySelector("[data-target=\"".concat(btnPath, "\"]")).classList.toggle('comments-open');
    }

    if (e.currentTarget.hasAttribute('data-path-reply')) {
      Array.from(document.querySelectorAll('.post-write-reply')).forEach(function (element) {
        element.classList.remove('comments-open');
      });
      document.querySelector("[data-target-reply=\"".concat(btnPathReply, "\"]")).classList.toggle('comments-open');
    }
  };

  postOpenCommentsBtn.forEach(function (element) {
    element.addEventListener('click', function (e) {
      openComment(e);
    });
  });
}
"use strict";

var btnSideNav = Array.from(document.querySelectorAll('.profile-side .btn'));
var btnCloseSideEdit = Array.from(document.querySelectorAll('[data-side="normal"]'));

if (btnSideNav.length > 0) {
  btnSideNav.forEach(function (element) {
    element.addEventListener('click', function (e) {
      var openSideBarNav = e.currentTarget.getAttribute('data-side-path');

      if (e.currentTarget.hasAttribute('data-side-path')) {
        document.querySelector("[data-side-target=\"".concat(openSideBarNav, "\"]")).classList.add('profile-side-edit-open');
      }
    });
  });
}

if (btnCloseSideEdit.length > 0) {
  btnCloseSideEdit.forEach(function (element) {
    element.addEventListener('click', function () {
      document.querySelectorAll('[data-side-target]').forEach(function (item) {
        item.classList.remove('profile-side-edit-open');
      });
    });
  });
}
"use strict";

var contentSize = document.querySelector('.main');
var sideBar = document.querySelector('.aside-nav-list');

if (sideBar) {
  (function (timer) {
    window.addEventListener('load', function () {
      contentSize.addEventListener('scroll', function scrollShow(e) {
        var el = document.querySelector('.main');

        (function (el) {
          el.classList.add('scroll-mac');
          clearTimeout(timer);
          timer = setTimeout(function () {
            el.classList.remove('scroll-mac');
          }, 200);
        })(el);
      });
    });
    window.addEventListener('load', function () {
      sideBar.addEventListener('scroll', function scrollShow(e) {
        var el = sideBar;

        (function (el) {
          el.classList.add('scroll-mac');
          clearTimeout(timer);
          timer = setTimeout(function () {
            el.classList.remove('scroll-mac');
          }, 200);
        })(el);
      });
    });
  })();
}
"use strict";

var radioBtnSideProfile = Array.from(document.querySelectorAll('.profile-side-stat input'));
var btcElements = Array.from(document.querySelectorAll('[data-side-item]'));

if (radioBtnSideProfile.length > 0) {
  var checkedInput = function checkedInput(element) {
    if (element.dataset.sideTarget === 'btc') {
      btcElements.forEach(function (item) {
        item.classList.remove('radio-show');

        if (item.dataset.sideItem === 'btc') {
          item.classList.add('radio-show');
        }
      });
    } else {
      btcElements.forEach(function (item) {
        item.classList.remove('radio-show');

        if (item.dataset.sideItem === 'usd') {
          item.classList.add('radio-show');
        }
      });
    }
  };

  btcElements.forEach(function (item) {
    item.classList.remove('radio-show');

    if (item.dataset.sideItem === 'btc') {
      item.classList.add('radio-show');
    }
  });
  radioBtnSideProfile.forEach(function (element) {
    element.addEventListener('click', function () {
      checkedInput(element);
    });
  });
}
"use strict";

var contentSize = document.querySelector('.main');
var headerHeight = document.querySelector('.header');
var asideMenuWidth = document.querySelector('.aside-nav');
var sideBarFeed = document.querySelector('.feed-side');
var asideProfileWidth = document.querySelector('.profile-side');
var sidePortfolioBox = document.querySelectorAll('.profile-side-box');

if (asideMenuWidth) {
  window.addEventListener('resize', function () {
    mainContentWidth(asideMenuWidth);
  });
  mainContentWidth(asideMenuWidth);
} else if (asideMenuWidth && asideProfileWidth) {
  window.addEventListener('resize', function () {
    mainContentWidth(asideMenuWidth, asideProfileWidth);
  });
  mainContentWidth(asideMenuWidth, asideProfileWidth);
}

if (sidePortfolioBox.length > 0) {
  if (window.innerWidth > 768) {
    window.addEventListener('resize', function () {
      sidePortfolio(sidePortfolioBox);
    });
    sidePortfolio(sidePortfolioBox);
  }
}

function sidePortfolio() {
  sidePortfolioBox.forEach(function (element) {
    element.style.height = window.innerHeight - headerHeight.clientHeight + 'px';
  });
}

function mainContentWidth() {
  contentSize.style.height = window.innerHeight - headerHeight.clientHeight + 'px';

  if (window.innerWidth >= 768) {
    if (sideBarFeed) {
      contentSize.style.paddingLeft = asideMenuWidth.clientWidth + sideBarFeed.clientWidth + 'px';
      sideBarFeed.style.left = asideMenuWidth.clientWidth + 'px';
    } else {
      contentSize.style.paddingLeft = asideMenuWidth.clientWidth + 5 + 'px';

      if (asideProfileWidth) {
        contentSize.style.paddingRight = asideProfileWidth.clientWidth - 0 + 'px';
      }
    }
  } else {
    if (sideBarFeed) {
      sideBarFeed.style.left = 0 + 'px';
    }

    contentSize.style.paddingLeft = 0 + 'px';
    contentSize.style.paddingRight = 0 + 'px';
  }
}
"use strict";

var x, i, j, l, ll, selElmnt, a, b, c;
/* Look for any elements with the class "profile-select": */

x = document.getElementsByClassName("profile-select");
l = x.length;

for (i = 0; i < l; i++) {
  selElmnt = x[i].getElementsByTagName("select")[0];
  ll = selElmnt.length;
  /* For each element, create a new DIV that will act as the selected item: */

  a = document.createElement("DIV");
  a.setAttribute("class", "select-selected");
  a.innerHTML = selElmnt.options[selElmnt.selectedIndex].innerHTML;
  x[i].appendChild(a);
  /* For each element, create a new DIV that will contain the option list: */

  b = document.createElement("DIV");
  b.setAttribute("class", "select-items select-hide");

  for (j = 1; j < ll; j++) {
    /* For each option in the original select element,
    create a new DIV that will act as an option item: */
    c = document.createElement("DIV");
    c.innerHTML = selElmnt.options[j].innerHTML;
    c.addEventListener("click", function (e) {
      /* When an item is clicked, update the original select box,
      and the selected item: */
      var y, i, k, s, h, sl, yl;
      s = this.parentNode.parentNode.getElementsByTagName("select")[0];
      sl = s.length;
      h = this.parentNode.previousSibling;

      for (i = 0; i < sl; i++) {
        if (s.options[i].innerHTML == this.innerHTML) {
          s.selectedIndex = i;
          h.innerHTML = this.innerHTML;
          y = this.parentNode.getElementsByClassName("same-as-selected");
          yl = y.length;

          for (k = 0; k < yl; k++) {
            y[k].removeAttribute("class");
          }

          this.setAttribute("class", "same-as-selected");
          break;
        }
      }

      h.click();
    });
    b.appendChild(c);
  }

  x[i].appendChild(b);
  a.addEventListener("click", function (e) {
    /* When the select box is clicked, close any other select boxes,
    and open/close the current select box: */
    e.stopPropagation();
    closeAllSelect(this);
    this.nextSibling.classList.toggle("select-hide");
    this.classList.toggle("select-arrow-active");
  });
}

function closeAllSelect(elmnt) {
  /* A function that will close all select boxes in the document,
  except the current select box: */
  var x,
      y,
      i,
      xl,
      yl,
      arrNo = [];
  x = document.getElementsByClassName("select-items");
  y = document.getElementsByClassName("select-selected");
  xl = x.length;
  yl = y.length;

  for (i = 0; i < yl; i++) {
    if (elmnt == y[i]) {
      arrNo.push(i);
    } else {
      y[i].classList.remove("select-arrow-active");
    }
  }

  for (i = 0; i < xl; i++) {
    if (arrNo.indexOf(i)) {
      x[i].classList.add("select-hide");
    }
  }
}
/* If the user clicks anywhere outside the select box,
then close all select boxes: */


document.addEventListener("click", closeAllSelect);
"use strict";

var openTradeGraph = Array.from(document.querySelectorAll('.trade-finance-btn'));

if (openTradeGraph.length > 0) {
  var openGraph = function openGraph(e) {
    var btnPath = e.target.getAttribute('data-table');

    if (e.target.hasAttribute('data-table')) {
      document.querySelector("[data-graph=\"".concat(btnPath, "\"]")).classList.toggle('trade-graph-open');
    }
  };

  openTradeGraph.forEach(function (element) {
    element.addEventListener('click', function (e) {
      Array.from(document.querySelectorAll('.trade-graph')).forEach(function (element) {
        element.classList.remove('trade-graph-open');
      });
      openGraph(e);
    });
  });
}
"use strict";

var tradeChart = Array.from(document.querySelectorAll('.myChart'));
var tradeCard = Array.from(document.querySelectorAll('.trader-card'));

if (tradeChart.length > 0) {
  var drawGraph = function drawGraph(arr) {
    if (arr.length > 0) {
      arr.forEach(function callback(value, index) {
        dataChartLabels.push(index);
        dataChartShadow.push(Math.abs(value) - 0.5);
        dataChartLoss.push(Math.abs(value));
        sumData += value;

        if (sumData > 0) {
          data = dataChartLoss;
          colorBorder = gradientGreen;
        } else {
          data = dataChartLoss;
          colorBorder = gradientBrown;
        }
      });
    }

    var draw = Chart.controllers.line.prototype.draw;

    Chart.controllers.line.prototype.draw = function () {
      var chart = this.chart;
      var ctx = chart.ctx;
      var _stroke = ctx.stroke;

      ctx.stroke = function () {
        ctx.save();
        ctx.shadowColor = "rgba(12,10,32,0.14)";
        ctx.shadowBlur = 13;
        ctx.shadowOffsetX = 0;
        ctx.shadowOffsetY = 10;

        _stroke.apply(this, arguments);

        ctx.restore();
      };

      draw.apply(this, arguments);
      ctx.stroke = _stroke;
    };

    tradeChart.forEach(function (element) {
      var chartEl = element.getContext('2d');
      var totalDuration = arr.length * 100;
      var delayBetweenPoints = totalDuration / arr.length;
      var boxShadow = chartEl.createLinearGradient(0, 0, 60, 60);
      boxShadow.addColorStop(0, 'rgba(12,10,32,0.14)');
      new Chart(element, {
        type: 'line',
        data: {
          labels: data,
          datasets: [{
            data: arr,
            borderColor: colorBorder,
            borderWidth: 5,
            tension: 0.4
          }]
        },
        options: {
          radius: 0,
          responsive: true,
          scales: {
            y: {
              display: false,
              type: 'linear'
            },
            x: {
              display: false
            }
          },
          plugins: {
            legend: false
          },
          layout: {
            padding: 10
          },
          interaction: {
            intersect: false
          },
          animations: {
            x: {
              duration: 10,
              easing: 'linear',
              from: NaN,
              // the point is initially skipped
              delay: function delay(element) {
                if (element.type !== 'data' || element.xStarted) {
                  return 0;
                }

                element.xStarted = true;
                return element.index * delayBetweenPoints;
              }
            }
          }
        }
      });
    });
  };

  var gradientGreen = document.querySelector('.myChart').getContext('2d').createLinearGradient(0, 0, 100, 100);
  gradientGreen.addColorStop(0, 'rgba(193,247,147,0)');
  gradientGreen.addColorStop(0.1, 'rgba(72,229,173,0.47)');
  gradientGreen.addColorStop(1, 'rgba(132,227,153,1)');
  var gradientBrown = document.querySelector('.myChart').getContext('2d').createLinearGradient(0, 0, 100, 100);
  gradientBrown.addColorStop(0, 'rgba(193,247,147,0)');
  gradientBrown.addColorStop(0.1, 'rgba(255,150,54,0.47)');
  gradientBrown.addColorStop(1, 'rgba(203,79,79,1)');
  var dataChart = [12, -16, 13, 15, 120, 13];
  var dataChartLoss = [];
  var dataChartShadow = [];
  var dataChartLabels = [];
  var data = [];
  var sumData = 0;
  var colorBorder;
  var D;
  drawGraph(dataChart);
}
"use strict";

/**
 * название функции
 *
 * @param {number} first - первое число
 * @returns {number}
 */
if (document.querySelector('.aside-nav')) {
  document.querySelector('.aside-nav').addEventListener('click', function (e) {
    document.querySelector('body').classList.remove('open-mobile');
    document.querySelector('.burger').classList.remove('burger--active');
  });
}

var btnTableShow = document.querySelector('.table-btn-show');
var tableTradingFlow = document.querySelector('.trading-flow-table');

if (btnTableShow) {
  btnTableShow.addEventListener('click', function () {
    tableTradingFlow.classList.toggle('trading-flow-table-show');

    if (tableTradingFlow.classList.contains('trading-flow-table-show')) {
      btnTableShow.textContent = 'Show less';
    } else {
      btnTableShow.textContent = 'Show more';
    }
  });
}

document.querySelector('.trading-flow-choose-text').addEventListener('click', function () {
  document.querySelector('.trading-flow-choose').classList.toggle('trading-flow-choose-open');
});
document.querySelectorAll('.trading-flow-choose-link').forEach(function (element) {
  element.addEventListener('click', function (el) {
    document.querySelector('.trading-flow-choose-text').innerHTML = el.currentTarget.innerText;
    document.querySelector('.trading-flow-choose').classList.remove('trading-flow-choose-open');
  });
});
//# sourceMappingURL=main.js.map
