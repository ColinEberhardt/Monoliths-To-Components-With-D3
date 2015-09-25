function stripeFactory() {

  var odd = 'odd', even = 'even';

  var stripe = function(selection) {
    selection.each(function(data, index) {
      d3.select(this)
        .attr('class', index % 2 === 0 ? odd : even);
    });
  };

  stripe.odd = function(x) {
      if (!arguments.length) {
          return odd;
      }
      odd = x;
      return stripe;
  };

  stripe.even = function(x) {
      if (!arguments.length) {
          return even;
      }
      even = x;
      return stripe;
  };

  return stripe;
}

function paragraphFactory() {

  var decorate = fc.util.fn.noop;

  var dataJoin = fc.util.dataJoin()
        .selector('p.para')
        .element('p')
        .attr('class', 'para');

  var paragraph = function(selection) {

    selection.each(function(data, index) {

      var p = dataJoin(this, data);
      p.text(function(d) { return d; });
      decorate(p, data, index);

    });
  }

  paragraph.decorate = function(x) {
      if (!arguments.length) {
          return decorate;
      }
      decorate = x;
      return paragraph;
  };

  return paragraph;
}

var para = paragraphFactory()
  .decorate(function(sel) {
    sel.enter()
      .attr('class', function(d, i) {
        return i === 0 ? 'highlight' : '';
      });
  })

d3.select('.prose')
  .datum(['Computer Haiku',
    'How would you write a program',
    'To make them for you'])
  .call(para);

