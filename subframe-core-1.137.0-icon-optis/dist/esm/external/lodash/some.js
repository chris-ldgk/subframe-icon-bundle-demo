import { getDefaultExportFromCjs } from '../../_virtual/_commonjsHelpers.js';
import { _ as _arraySome } from './_arraySome.js';
import { _ as _baseIteratee } from './_baseIteratee.js';
import { _ as _baseSome } from './_baseSome.js';
import { i as isArray_1 } from './isArray.js';
import { _ as _isIterateeCall } from './_isIterateeCall.js';

var arraySome = _arraySome,
    baseIteratee = _baseIteratee,
    baseSome = _baseSome,
    isArray = isArray_1,
    isIterateeCall = _isIterateeCall;

/**
 * Checks if `predicate` returns truthy for **any** element of `collection`.
 * Iteration is stopped once `predicate` returns truthy. The predicate is
 * invoked with three arguments: (value, index|key, collection).
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Collection
 * @param {Array|Object} collection The collection to iterate over.
 * @param {Function} [predicate=_.identity] The function invoked per iteration.
 * @param- {Object} [guard] Enables use as an iteratee for methods like `_.map`.
 * @returns {boolean} Returns `true` if any element passes the predicate check,
 *  else `false`.
 * @example
 *
 * _.some([null, 0, 'yes', false], Boolean);
 * // => true
 *
 * var users = [
 *   { 'user': 'barney', 'active': true },
 *   { 'user': 'fred',   'active': false }
 * ];
 *
 * // The `_.matches` iteratee shorthand.
 * _.some(users, { 'user': 'barney', 'active': false });
 * // => false
 *
 * // The `_.matchesProperty` iteratee shorthand.
 * _.some(users, ['active', false]);
 * // => true
 *
 * // The `_.property` iteratee shorthand.
 * _.some(users, 'active');
 * // => true
 */
function some(collection, predicate, guard) {
  var func = isArray(collection) ? arraySome : baseSome;
  if (guard && isIterateeCall(collection, predicate, guard)) {
    predicate = undefined;
  }
  return func(collection, baseIteratee(predicate));
}

var some_1 = some;

var some$1 = /*@__PURE__*/getDefaultExportFromCjs(some_1);

export { some$1 as default };
