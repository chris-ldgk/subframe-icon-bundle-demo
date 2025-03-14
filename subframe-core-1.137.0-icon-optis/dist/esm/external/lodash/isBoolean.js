import { getDefaultExportFromCjs } from '../../_virtual/_commonjsHelpers.js';
import { _ as _baseGetTag } from './_baseGetTag.js';
import { i as isObjectLike_1 } from './isObjectLike.js';

var baseGetTag = _baseGetTag,
    isObjectLike = isObjectLike_1;

/** `Object#toString` result references. */
var boolTag = '[object Boolean]';

/**
 * Checks if `value` is classified as a boolean primitive or object.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a boolean, else `false`.
 * @example
 *
 * _.isBoolean(false);
 * // => true
 *
 * _.isBoolean(null);
 * // => false
 */
function isBoolean(value) {
  return value === true || value === false ||
    (isObjectLike(value) && baseGetTag(value) == boolTag);
}

var isBoolean_1 = isBoolean;

var isBoolean$1 = /*@__PURE__*/getDefaultExportFromCjs(isBoolean_1);

export { isBoolean$1 as default };
