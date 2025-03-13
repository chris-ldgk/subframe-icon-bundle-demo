'use strict';

var _commonjsHelpers = require('../../_virtual/_commonjsHelpers.js');
var index$1 = require('../../_virtual/index4.js');
var factoryWithThrowingShims = require('./factoryWithThrowingShims.js');
var index = require('./external/react-is/index.js');
var factoryWithTypeCheckers = require('./factoryWithTypeCheckers.js');

/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

if (process.env.NODE_ENV !== 'production') {
  var ReactIs = index.__require();

  // By explicitly using `prop-types` you are opting into new development behavior.
  // http://fb.me/prop-types-in-prod
  var throwOnDirectAccess = true;
  index$1.__module.exports = factoryWithTypeCheckers.__require()(ReactIs.isElement, throwOnDirectAccess);
} else {
  // By explicitly using `prop-types` you are opting into new production behavior.
  // http://fb.me/prop-types-in-prod
  index$1.__module.exports = factoryWithThrowingShims.__require()();
}

var propTypesExports = index$1.__module.exports;
var PropTypes = /*@__PURE__*/_commonjsHelpers.getDefaultExportFromCjs(propTypesExports);

module.exports = PropTypes;
