'use strict';

var _isStrictComparable = require('./_isStrictComparable.js');
var keys$1 = require('./keys.js');

var isStrictComparable = _isStrictComparable._isStrictComparable,
    keys = keys$1.keys_1;

/**
 * Gets the property names, values, and compare flags of `object`.
 *
 * @private
 * @param {Object} object The object to query.
 * @returns {Array} Returns the match data of `object`.
 */
function getMatchData(object) {
  var result = keys(object),
      length = result.length;

  while (length--) {
    var key = result[length],
        value = object[key];

    result[length] = [key, value, isStrictComparable(value)];
  }
  return result;
}

var _getMatchData = getMatchData;

exports._getMatchData = _getMatchData;
