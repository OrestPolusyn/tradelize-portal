const moreDataBaby = []
const labelsData = []

Date.prototype.monthNames = [
  "January", "February", "March",
  "April", "May", "June",
  "July", "August", "September",
  "October", "November", "December"
]

Date.prototype.getMonthName = function () {
  return this.monthNames[this.getMonth()]
}

Date.prototype.getShortMonthName = function () {
  return this.getMonthName().substr(0, 3)
}

fetch('../jsons/chart.json')
  .then((response) => {
    return response.json()
  })
  .then((data) => {
    if (document.querySelector('.profile-chartic')) {
      for (const dataItem of data) {
        dataItem.items.forEach(element => {
          const newDate = new Date(element.x * 1000)

          const monthDate = newDate.getShortMonthName()
          const numberDate = newDate.getDate()

          labelsData.push(numberDate + " " + monthDate)
          moreDataBaby.push(element.y)
        })

        const gradientChart = document.querySelector('.profile-chartic').getContext('2d').createLinearGradient(0, 550, 0, 0)
        gradientChart.addColorStop(0, 'rgba(64, 106, 255, 0)')
        gradientChart.addColorStop(1, ' rgba(179, 195, 255, 0.5)')

        const myDataLine = {
          labels: labelsData,
          datasets: [{
            label: false,
            fill: true,
            data: moreDataBaby,
            cubicInterpolationMode: 'monotone',
            tension: 0.4,
            borderWidth: 1
          }]
        }

        const myDataBar = {
          labels: labelsData,
          datasets: [{
            label: false,
            fill: true,
            data: moreDataBaby,
            cubicInterpolationMode: 'monotone',
            tension: 0.4,
          }]
        }

        const optionsCharts = {
          borderWidth: 1,
          radius: 0,
          responsive: true,
          scales: {
            y: {
              type: 'linear',
              beginAtZero: true,
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
        }

        Array.from(document.querySelectorAll('[data-chart]')).forEach(element => {
          element.addEventListener('click', () => {
            updateChartType(element.dataset.chart)
          })
        })

        // Default chart defined with type: 'line'
        const ctx = document.querySelector('.profile-chartic').getContext('2d')

        if (document.querySelector('.profile-chartic-trading')) {
          const ctxTrading = document.querySelector('.profile-chartic-trading').getContext('2d')
        }

        const typeChart = 'line'

        if (!document.querySelector('.profile-chartic').classList.contains('profile-chartic-trading')) {
          typeChart = 'line'
        } else {
          typeChart = 'bar'
        }

        const myChart = new Chart(ctx, {
          type: typeChart,
          data: myDataLine,
          options: optionsCharts
        })

        // Function runs on chart type select update
        function updateChartType(item) {
          // Since you can't update chart type directly in Charts JS you must destroy original chart and rebuild
          myChart.destroy()

          myChart = new Chart(ctx, {
            type: item,
            data: myDataBar,
            options: optionsCharts
          })
        };
      }
    }
  })



function colorize(opaque) {
  return (ctx) => {
    const v = ctx.parsed.y
    const c = v < 0 ? '#eb5757' :
      '#406aff'

    return opaque ? c : Utils.transparentize(c, 1 - Math.abs(v / 150))
  }
}
