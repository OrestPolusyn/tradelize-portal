const tradeChart = Array.from(document.querySelectorAll('.myChart'));
const tradeCard = Array.from(document.querySelectorAll('.trader-card'));


if (tradeChart.length > 0) {
  let gradientGreen = document.querySelector('.myChart').getContext('2d').createLinearGradient(0, 0, 100, 100);
  gradientGreen.addColorStop(0, 'rgba(193,247,147,0)');
  gradientGreen.addColorStop(0.1, 'rgba(72,229,173,0.47)');
  gradientGreen.addColorStop(1, 'rgba(132,227,153,1)');

  let gradientBrown = document.querySelector('.myChart').getContext('2d').createLinearGradient(0, 0, 100, 100);
  gradientBrown.addColorStop(0, 'rgba(193,247,147,0)');
  gradientBrown.addColorStop(0.1, 'rgba(255,150,54,0.47)');
  gradientBrown.addColorStop(1, 'rgba(203,79,79,1)');

  let dataChart = [1, 3, 5, 5, 1, 6];

  let dataChartLoss = [];
  let dataChartShadow = [];
  let dataChartLabels = [];
  let data = [];
  let sumData = 0;
  let colorBorder;
  let D;


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
        ctx.shadowOffsetY = 0;
        _stroke.apply(this, arguments);
        ctx.restore();
      };

      draw.apply(this, arguments);
      ctx.stroke = _stroke;
    };

    tradeChart.forEach(element => {
      const chartEl = element.getContext('2d');
      const totalDuration = arr.length * 100;
      const delayBetweenPoints = totalDuration / arr.length;

      var boxShadow = chartEl.createLinearGradient(0, 0, 60, 60);
      boxShadow.addColorStop(0, 'rgba(12,10,32,0.14)');

      new Chart(element, {
        type: 'line',
        data: {
          labels: data,
          datasets: [{
            data: arr,
            borderColor: colorBorder,
            borderWidth: 6,
            tension: 0.3,
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
              display: false,
            }
          },
          plugins: {
            legend: false,
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
              from: NaN, // the point is initially skipped
              delay(element) {
                if (element.type !== 'data' || element.xStarted) {
                  return 0;
                }
                element.xStarted = true;
                return element.index * delayBetweenPoints;
              }
            },
          },
        }
      });
    });
  }
}
