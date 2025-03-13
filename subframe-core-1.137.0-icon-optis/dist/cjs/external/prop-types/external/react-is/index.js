'use strict';

var index = require('../../../../_virtual/index5.js');
var reactIs_development = require('./cjs/react-is.development.js');
var reactIs_production_min = require('./cjs/react-is.production.min.js');

var hasRequiredReactIs;

function requireReactIs () {
	if (hasRequiredReactIs) return index.__module.exports;
	hasRequiredReactIs = 1;

	if (process.env.NODE_ENV === 'production') {
	  index.__module.exports = reactIs_production_min.__require();
	} else {
	  index.__module.exports = reactIs_development.__require();
	}
	return index.__module.exports;
}

exports.__require = requireReactIs;
