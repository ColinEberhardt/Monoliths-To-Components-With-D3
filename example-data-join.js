(function() {
  var data = [1, 5, 10, 6];

  var bar = d3.select('#bar')
    .selectAll("div")
    .data(data);

  bar.enter()
    .append("div")
    .style("width", function(d) { return (d * 40) + "px"; })
    .style("height", "50px");
})();