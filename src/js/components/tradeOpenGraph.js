const openTradeGraph = Array.from(document.querySelectorAll('.trades-item'));

if (openTradeGraph.length > 0) {
  openTradeGraph.forEach(element => {
    element.addEventListener('click', (e) => {
      openComment(e);
    })
  });

  function openComment(e) {
    let btnPath = e.target.getAttribute('data-table');

    if (e.target.hasAttribute('data-table')) {
      Array.from(document.querySelectorAll(".trade-graph")).forEach(element => {
        element.classList.remove('trade-graph-open');
      });
    }
    document.querySelector(`[data-graph="${btnPath}"]`).classList.add('trade-graph-open');
  }
}
