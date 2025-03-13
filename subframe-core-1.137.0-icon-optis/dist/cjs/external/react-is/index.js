'use strict';

var index = require('../../_virtual/index2.js');
var reactIs_development = require('./cjs/react-is.development.js');
var reactIs_production_min = require('./cjs/react-is.production.min.js');

if (process.env.NODE_ENV === 'production') {
  index.__module.exports = reactIs_production_min.__require();
} else {
  index.__module.exports = reactIs_development.__require();
}

var reactIsExports = index.__module.exports;

exports.reactIsExports = reactIsExports;
