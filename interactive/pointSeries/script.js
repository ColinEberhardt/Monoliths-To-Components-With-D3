// create some data
var data = d3.range(20)
      .map(function(d) {
        return {
          x: d,
          y: Math.sin(d / 3)
        }
      });

var width = 600, height = 250;

// create an SVG
var container = d3.select('#point')
    .append('svg')
    .style('overflow', 'inherit')
    .attr('width', width)
    .attr('height', height);

// create some scales
var xScale = d3.scale.linear()
    .domain(fc.util.extent(data, 'x'))
    .range([0, width]);

var yScale = d3.scale.linear()
    .domain(fc.util.extent(data, 'y'))
    .range([height, 0]);

// create a point series
var point = fc.series.point()
    .xScale(xScale)
    .yScale(yScale)
    .yValue(function(d) { return d.y; })
    .xValue(function(d) { return d.x; })
    .decorate(function(selection) {
      selection.enter()
        .append('text')
        .style('text-anchor', 'middle')
        .attr('transform', 'translate(0, -10)')
        .text(function(d) { return d3.format(".2g")(d.y); });
    });

// render it
container.append('g')
    .datum(data)
    .call(point);









// ----------------- Nothing to see down here !!! -----------

/*
.decorate(function(selection) {
  selection.enter()
          .select('circle')
          .style('fill', 'red');
});

selection.enter()
  .select('circle')
  .style('fill', function(d) { return d.y > 0 ? 'red' : 'blue'; });

selection.enter()
  .append('text')
  .style('text-anchor', 'middle')
  .attr('transform', 'translate(0, -10)')
  .text(function(d) { return d3.format(".2g")(d.y); });*/