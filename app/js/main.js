"use strict";

var bodyStyles = window.getComputedStyle(document.body);
var gap = parseInt(bodyStyles.getPropertyValue('--grid-gap'));
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
var asideMobile = document.querySelector('.aside-nav');

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
    var startNumber = formPostWriteSend.value.length;
    charactersNumber.textContent = 1000 - formPostWriteSend.value.length;

    if (formPostWriteSend.focus) {
      formPostWriteNumberField.classList.add("visible");
      formPostWriteBtns.classList.add("visible");
    } else {
      formPostWriteNumberField.classList.remove("visible");
      formPostWriteBtns.classList.remove("visible");
      document.querySelector(".posts-publish textarea").style.height = 45 + "px";
    }
  };

  formPostWriteSend.addEventListener("keyup", function () {
    formPostSend();
  });
  formPostWriteSend.addEventListener("input", function () {
    formPostSend();
  });
  formPostWriteSend.addEventListener("focus", function () {
    formPostSend();
  });
  formPostWriteSend.addEventListener("keyup", function () {
    if (formPostWriteSend.value.length > 0) {
      btnSubmitForm.classList.remove('disabled');
    } else {
      btnSubmitForm.classList.add('disabled');
    }
  });
  btnPostReset.addEventListener("click", function () {
    btnSubmitForm.classList.add('disabled');
    formPostWriteNumberField.classList.remove("visible");
    formPostWriteBtns.classList.remove("visible");
  });
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

        if (document.querySelectorAll('.posts-publish-gallery-item').length === 0) {}
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
  var openComment = function openComment(e) {
    var btnPath = e.currentTarget.firstElementChild.getAttribute('data-copy-filer');
    fitersCopyModalBtn.forEach(function (element) {
      element.classList.remove('tab-active');
    });

    if (e.currentTarget.firstElementChild.hasAttribute('data-copy-filer')) {
      Array.from(document.querySelectorAll(".modals-copy-content")).forEach(function (element) {
        element.classList.remove('modals-copy-content-open');
      });
      e.currentTarget.classList.add('tab-active');
      document.querySelector("[data-content-filer=\"".concat(btnPath, "\"]")).classList.add('modals-copy-content-open');
    }
  };

  fitersCopyModalBtn.forEach(function (element) {
    element.addEventListener('click', function (e) {
      openComment(e);
    });
  });
}
"use strict";

var formComment = Array.from(document.querySelectorAll('.post-write')),
    formTextarea = Array.from(document.querySelectorAll('textarea'));

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
textarea.forEach(function (element) {
  element.addEventListener('keydown', autosize);
});

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

if (openModals.length > 0) {
  var openComment = function openComment(e) {
    var btnModOut = e.currentTarget.getAttribute('data-modals');
    var btnModIn = e.currentTarget.getAttribute('data-modal-filter');
    console.log(btnModIn);

    if (e.currentTarget.hasAttribute('data-modals')) {
      Array.from(document.querySelectorAll(".modals")).forEach(function (element) {
        element.classList.remove('modals-open');
      });
      document.querySelector("[data-modal=\"".concat(btnModOut, "\"]")).classList.add('modals-open');
    }

    if (e.currentTarget.hasAttribute('data-modal-filter')) {
      Array.from(document.querySelectorAll(".modal")).forEach(function (element) {
        element.classList.remove('modal-open');
      });
      document.querySelector("[data-target-filter=\"".concat(btnModIn, "\"]")).classList.add('modal-open');
    }
  };

  openModals.forEach(function (element) {
    element.addEventListener('click', function (e) {
      openComment(e);
    });
  });
}

if (document.querySelector('[data-close="modals-copy-filters"]')) {
  document.querySelector('[data-close="modals-copy-filters"]').addEventListener("click", function () {
    Array.from(document.querySelectorAll(".modals")).forEach(function (element) {
      element.classList.remove('modals-open');
    });
    Array.from(document.querySelectorAll(".modal")).forEach(function (element) {
      element.classList.remove('modal-open');
    });
  });
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
  dropDownWritePost.addEventListener("click", function (e) {
    document.querySelector(".posts-publish-dropdown-text").innerText = e.target.textContent;
  });
}
"use strict";

var passwordBtnChange = Array.from(document.querySelectorAll('.field-btn'));

if (passwordBtnChange.length > 0) {
  passwordBtnChange.forEach(function (el) {
    el.addEventListener('click', function () {
      if (!this.classList.contains('field-btn-show')) {
        this.classList.add('field-btn-show');
        this.previousElementSibling.setAttribute("type", "text");
      } else {
        this.classList.remove('field-btn-show');
        this.previousElementSibling.setAttribute("type", "password");
      }
    });
  });
}
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
        Array.from(document.querySelectorAll("[data-chart]")).forEach(function (element) {
          element.addEventListener('click', function () {
            updateChartType(element.dataset.chart);
          });
        }); // Default chart defined with type: 'line'

        ctx = document.querySelector('.profile-chartic').getContext('2d');
        myChart = new Chart(ctx, {
          type: 'line',
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
        var ctx;
        var myChart;

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
      Array.from(document.querySelectorAll(".comments")).forEach(function (element) {
        element.classList.remove('comments-open');
      });
      document.querySelector("[data-target=\"".concat(btnPath, "\"]")).classList.add('comments-open');
    }

    if (e.currentTarget.hasAttribute('data-path-reply')) {
      Array.from(document.querySelectorAll(".post-write-reply")).forEach(function (element) {
        element.classList.remove('comments-open');
      });
      document.querySelector("[data-target-reply=\"".concat(btnPathReply, "\"]")).classList.add('comments-open');
    }
  };

  postOpenCommentsBtn.forEach(function (element) {
    element.addEventListener('click', function (e) {
      openComment(e);
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
"use strict";

var contentSize = document.querySelector('.main');
var headerHeight = document.querySelector('.header');
var asideMenuWidth = document.querySelector('.aside-nav');
var sideBarFeed = document.querySelector('.feed-side');
var sideTabsFeed = document.querySelector('.feed-side .tabs');
var searchTabsFeed = document.querySelector('.feed-side .search');

if (asideMenuWidth) {
  var mainContentWidth = function mainContentWidth() {
    contentSize.style.height = window.innerHeight - headerHeight.clientHeight + 'px';

    if (window.innerWidth >= 768) {
      if (sideBarFeed) {
        contentSize.style.paddingLeft = asideMenuWidth.clientWidth + sideBarFeed.clientWidth + 'px';
        sideBarFeed.style.left = asideMenuWidth.clientWidth + 'px';
      } else {
        contentSize.style.paddingLeft = asideMenuWidth.clientWidth + 5 + 'px';
      }
    } else {
      if (sideBarFeed) {
        sideBarFeed.style.left = 0 + 'px';
      }

      contentSize.style.paddingLeft = 0 + 'px';
    }
  };

  window.addEventListener('resize', mainContentWidth);
  mainContentWidth();
}
"use strict";

var openTradeGraph = Array.from(document.querySelectorAll('.trades-item'));

if (openTradeGraph.length > 0) {
  var openComment = function openComment(e) {
    var btnPath = e.target.getAttribute('data-table');

    if (e.target.hasAttribute('data-table')) {
      Array.from(document.querySelectorAll(".trade-graph")).forEach(function (element) {
        element.classList.remove('trade-graph-open');
      });
    }

    document.querySelector("[data-graph=\"".concat(btnPath, "\"]")).classList.add('trade-graph-open');
  };

  openTradeGraph.forEach(function (element) {
    element.addEventListener('click', function (e) {
      openComment(e);
    });
  });
}
"use strict";

var tradeChart = document.querySelector('.myChart');
var tradeCard = Array.from(document.querySelectorAll('.trader-card'));
var barData = [12, -16, 13, 15, 120, 13];
var dataChartLoss = [];
var dataChartShadow = [];
var dataChartLabels = [];
var labelData = [];
var data = [];
var sumData = 0;
var colorBorder;
var D;

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
  };

  var gradientGreen = document.querySelector('.myChart').getContext('2d').createLinearGradient(0, 0, 100, 100);
  gradientGreen.addColorStop(0, 'rgba(193,247,147,0)');
  gradientGreen.addColorStop(0.1, 'rgba(72,229,173,0.47)');
  gradientGreen.addColorStop(1, 'rgba(132,227,153,1)');
  var gradientBrown = document.querySelector('.myChart').getContext('2d').createLinearGradient(0, 0, 100, 100);
  gradientBrown.addColorStop(0, 'rgba(193,247,147,0)');
  gradientBrown.addColorStop(0.1, 'rgba(255,150,54,0.47)');
  gradientBrown.addColorStop(1, 'rgba(203,79,79,1)');
  drawGraph(dataChart);
}

var grapharea = tradeChart.getContext("2d");
var myChart = new Chart(grapharea, {
  type: 'bar',
  data: barData,
  options: barOptions
});
myChart.destroy();
myChart = new Chart(grapharea, {
  type: 'radar',
  data: barData,
  options: barOptions
}); // fetch('../jsons/chart.json')
//   .then((response) => {
//     return response.json();
//   })
//   .then((data) => {
//     for (let dataItem of data) {
//       dataItem.items.forEach(function (element, index) {
//         moreDataBaby.push(element.y)
//         labelData.push(index)
//       });
//       data.forEach(element => {
//         console.log(element.items);
//         tradeChart.forEach(element => {
//           const chartEl = element.getContext('2d');
//           const optionsChartTrade = {
//             radius: 0,
//             responsive: true,
//             scales: {
//               y: {
//                 display: false,
//                 type: 'linear'
//               },
//               x: {
//                 display: false,
//               }
//             },
//             plugins: {
//               legend: false,
//             },
//             layout: {
//               padding: 10
//             },
//             interaction: {
//               intersect: false
//             },
//             // animations: {
//             //   x: {
//             //     duration: 10,
//             //     easing: 'linear',
//             //     from: NaN, // the point is initially skipped
//             //     delay(element) {
//             //       if (element.type !== 'data' || element.xStarted) {
//             //         return 0;
//             //       }
//             //       element.xStarted = true;
//             //       return element.index * delayBetweenPoints;
//             //     }
//             //   },
//             // },
//           }
//           var boxShadow = chartEl.createLinearGradient(0, 0, 60, 60);
//           boxShadow.addColorStop(0, 'rgba(12,10,32,0.14)');
//           var myChart = new Chart(chartEl, {
//             type: 'line',
//             data: {
//               labels: labelData,
//               datasets: [{
//                 data: element.items,
//                 borderColor: colorBorder,
//                 borderWidth: 5,
//                 tension: 0.4,
//               }]
//             },
//             options: optionsChartTrade
//           });
//           myChart.destroy();
//           var myChart = new Chart(chartEl, {
//             type: 'bar',
//             data: {
//               labels: labelData,
//               datasets: [{
//                 data: element.items,
//               }]
//             },
//           });
//         });
//       });
//     }
//   })
"use strict";

/**
 * название функции
 *
 * @param {number} first - первое число
 * @returns {number}
 */
document.querySelector('.aside-nav').addEventListener('click', function (e) {
  document.querySelector('body').classList.remove('open-mobile');
  document.querySelector('.burger').classList.remove('burger--active');
});
//# sourceMappingURL=main.js.map
