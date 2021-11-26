let sales = [5, 8, 1, 3, 7, 5, 9];


let canvas = Array.from(document.querySelectorAll(".trader-card-canvas"));

canvas.forEach(graph);


function graph(el) {
  let ctx = el.getContext("2d"),
    width = 300,
    height = "auto",
    uSpacing = 10,
    increase = 90/180*Math.PI / 9,
    scalar = 100,
    offset = (1 / (sales.length - 1)) * width;


  ctx.clearRect(0, 0, width, height)
  ctx.strokeRect(0, 0, width, height)
  ctx.beginPath();
  ctx.lineWidth = 3;



  ctx.moveTo(0, sales[0]);

 
  for (let x = 1; x < sales.length; x++) {
    ctx.lineTo(x * offset, 60 - sales[x]);
  }

  ctx.stroke();
}


