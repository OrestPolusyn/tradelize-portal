const valueProfitInput = document.querySelector('.trading-flow-label-calc input')
const valueProfitCalc = document.querySelector('.trading-flow-label-profit input')

if (valueProfitInput) {
  valueProfitInput.addEventListener("keyup", () => {
    calcProfitFlow()
  })
  calcProfitFlow()
}

function calcProfitFlow() {
  let calcProfit

  if (+valueProfitInput.dataset.calc < 0) {
    calcProfit = +valueProfitInput.value + (valueProfitInput.value / 100 * valueProfitInput.dataset.calc)
  } else if (+valueProfitInput.dataset.calc > 0) {
    calcProfit = +valueProfitInput.value + (valueProfitInput.value / 100 * valueProfitInput.dataset.calc)
  }

  valueProfitCalc.value = calcProfit

  if (valueProfitCalc.value < 1) {
    valueProfitCalc.value = 1
    valueProfitInput.value = 0
  }
}
