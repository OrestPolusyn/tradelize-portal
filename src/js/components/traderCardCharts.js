const tradeChart = document.querySelector('.myChart');
const tradeCard = Array.from(document.querySelectorAll('.trader-card'));

let barData = [12, -16, 13, 15, 120, 13];

let dataChartLoss = [];
let dataChartShadow = [];
let dataChartLabels = [];
let labelData = [];
let data = [];
let sumData = 0;
let colorBorder;
let D;


if (tradeChart.length > 0) {
  let gradientGreen = document.querySelector('.myChart').getContext('2d').createLinearGradient(0, 0, 100, 100);
  gradientGreen.addColorStop(0, 'rgba(193,247,147,0)');
  gradientGreen.addColorStop(0.1, 'rgba(72,229,173,0.47)');
  gradientGreen.addColorStop(1, 'rgba(132,227,153,1)');

  let gradientBrown = document.querySelector('.myChart').getContext('2d').createLinearGradient(0, 0, 100, 100);
  gradientBrown.addColorStop(0, 'rgba(193,247,147,0)');
  gradientBrown.addColorStop(0.1, 'rgba(255,150,54,0.47)');
  gradientBrown.addColorStop(1, 'rgba(203,79,79,1)');


  drawGraph(dataChart);

  function drawGraph(arr) {
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

    let draw = Chart.controllers.line.prototype.draw;

    Chart.controllers.line.prototype.draw = function () {
      let chart = this.chart;
      let ctx = chart.ctx;
      let _stroke = ctx.stroke;
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


  }
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
});

// fetch('../jsons/chart.json')
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
