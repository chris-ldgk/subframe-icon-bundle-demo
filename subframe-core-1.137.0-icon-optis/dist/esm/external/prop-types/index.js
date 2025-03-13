import { getDefaultExportFromCjs } from '../../_virtual/_commonjsHelpers.js';
import { __module as propTypes } from '../../_virtual/index4.js';
import { __require as requireFactoryWithThrowingShims } from './factoryWithThrowingShims.js';
import { __require as requireReactIs } from './external/react-is/index.js';
import { __require as requireFactoryWithTypeCheckers } from './factoryWithTypeCheckers.js';

/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

if (process.env.NODE_ENV !== 'production') {
  var ReactIs = requireReactIs();

  // By explicitly using `prop-types` you are opting into new development behavior.
  // http://fb.me/prop-types-in-prod
  var throwOnDirectAccess = true;
  propTypes.exports = requireFactoryWithTypeCheckers()(ReactIs.isElement, throwOnDirectAccess);
} else {
  // By explicitly using `prop-types` you are opting into new production behavior.
  // http://fb.me/prop-types-in-prod
  propTypes.exports = requireFactoryWithThrowingShims()();
}

var propTypesExports = propTypes.exports;
var PropTypes = /*@__PURE__*/getDefaultExportFromCjs(propTypesExports);

export { PropTypes as default };
