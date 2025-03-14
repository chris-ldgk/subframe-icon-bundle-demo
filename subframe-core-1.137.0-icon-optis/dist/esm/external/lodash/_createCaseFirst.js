import { _ as _castSlice } from './_castSlice.js';
import { _ as _hasUnicode } from './_hasUnicode.js';
import { _ as _stringToArray } from './_stringToArray.js';
import { t as toString_1 } from './toString.js';

var castSlice = _castSlice,
    hasUnicode = _hasUnicode,
    stringToArray = _stringToArray,
    toString = toString_1;

/**
 * Creates a function like `_.lowerFirst`.
 *
 * @private
 * @param {string} methodName The name of the `String` case method to use.
 * @returns {Function} Returns the new case function.
 */
function createCaseFirst(methodName) {
  return function(string) {
    string = toString(string);

    var strSymbols = hasUnicode(string)
      ? stringToArray(string)
      : undefined;

    var chr = strSymbols
      ? strSymbols[0]
      : string.charAt(0);

    var trailing = strSymbols
      ? castSlice(strSymbols, 1).join('')
      : string.slice(1);

    return chr[methodName]() + trailing;
  };
}

var _createCaseFirst = createCaseFirst;

export { _createCaseFirst as _ };
