const openTradeGraph = Array.from(document.querySelectorAll('.trade-finance-btn'))

if (openTradeGraph.length > 0) {
  openTradeGraph.forEach(element => {
    element.addEventListener('click', (e) => {
      const btnPath = e.target.getAttribute('data-table')

      if (e.target.hasAttribute('data-table')) {
        document.querySelector(`[data-graph="${btnPath}"]`).classList.toggle('trade-graph-open')
      }
    })
  })
}
