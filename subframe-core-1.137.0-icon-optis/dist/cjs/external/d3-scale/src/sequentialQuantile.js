'use strict';

var continuous = require('./continuous.js');
var init = require('./init.js');
var ascending = require('../../d3-array/src/ascending.js');
var quantile = require('../../d3-array/src/quantile.js');
var bisect = require('../../d3-array/src/bisect.js');

function sequentialQuantile() {
  var domain = [],
      interpolator = continuous.identity;

  function scale(x) {
    if (x != null && !isNaN(x = +x)) return interpolator((bisect.default(domain, x, 1) - 1) / (domain.length - 1));
  }

  scale.domain = function(_) {
    if (!arguments.length) return domain.slice();
    domain = [];
    for (let d of _) if (d != null && !isNaN(d = +d)) domain.push(d);
    domain.sort(ascending);
    return scale;
  };

  scale.interpolator = function(_) {
    return arguments.length ? (interpolator = _, scale) : interpolator;
  };

  scale.range = function() {
    return domain.map((d, i) => interpolator(i / (domain.length - 1)));
  };

  scale.quantiles = function(n) {
    return Array.from({length: n + 1}, (_, i) => quantile.default(domain, i / n));
  };

  scale.copy = function() {
    return sequentialQuantile(interpolator).domain(domain);
  };

  return init.initInterpolator.apply(scale, arguments);
}

module.exports = sequentialQuantile;
