var data = [1, 5, 10, 6];

function renderChart() {
  var bar = d3.select('#bar-live')
    .selectAll("div")
    .data(data);

  bar.enter()
    .append("div")
    .style("height", "30px");

  bar.style("width", function(d) { return (d * 40) + "px"; });

  bar.exit()
    .remove();
}

requestAnimationFrame(renderLoop);

function renderLoop() {
  renderChart();
  requestAnimationFrame(renderLoop);
}