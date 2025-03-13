import { __module as reactIs } from '../../../../_virtual/index5.js';
import { __require as requireReactIs_development } from './cjs/react-is.development.js';
import { __require as requireReactIs_production_min } from './cjs/react-is.production.min.js';

var hasRequiredReactIs;

function requireReactIs () {
	if (hasRequiredReactIs) return reactIs.exports;
	hasRequiredReactIs = 1;

	if (process.env.NODE_ENV === 'production') {
	  reactIs.exports = requireReactIs_production_min();
	} else {
	  reactIs.exports = requireReactIs_development();
	}
	return reactIs.exports;
}

export { requireReactIs as __require };
