'use strict';

var _commonjsHelpers = require('../../_virtual/_commonjsHelpers.js');

/*!
 * dashify <https://github.com/jonschlinkert/dashify>
 *
 * Copyright (c) 2015-2017, Jon Schlinkert.
 * Released under the MIT License.
 */

var dashify = (str, options) => {
  if (typeof str !== 'string') throw new TypeError('expected a string');
  return str.trim()
    .replace(/([a-z])([A-Z])/g, '$1-$2')
    .replace(/\W/g, m => /[À-ž]/.test(m) ? m : '-')
    .replace(/^-+|-+$/g, '')
    .replace(/-{2,}/g, m => options && options.condense ? '-' : m)
    .toLowerCase();
};

var dashify$1 = /*@__PURE__*/_commonjsHelpers.getDefaultExportFromCjs(dashify);

module.exports = dashify$1;
