import { __module as reactIs } from '../../_virtual/index2.js';
import { __require as requireReactIs_development } from './cjs/react-is.development.js';
import { __require as requireReactIs_production_min } from './cjs/react-is.production.min.js';

if (process.env.NODE_ENV === 'production') {
  reactIs.exports = requireReactIs_production_min();
} else {
  reactIs.exports = requireReactIs_development();
}

var reactIsExports = reactIs.exports;

export { reactIsExports as r };
