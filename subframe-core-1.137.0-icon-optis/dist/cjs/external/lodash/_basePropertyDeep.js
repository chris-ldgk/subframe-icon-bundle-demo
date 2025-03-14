'use strict';

var _baseGet = require('./_baseGet.js');

var baseGet = _baseGet._baseGet;

/**
 * A specialized version of `baseProperty` which supports deep paths.
 *
 * @private
 * @param {Array|string} path The path of the property to get.
 * @returns {Function} Returns the new accessor function.
 */
function basePropertyDeep(path) {
  return function(object) {
    return baseGet(object, path);
  };
}

var _basePropertyDeep = basePropertyDeep;

exports._basePropertyDeep = _basePropertyDeep;
