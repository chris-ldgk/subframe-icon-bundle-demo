/**
 * The base implementation of `_.unary` without support for storing metadata.
 *
 * @private
 * @param {Function} func The function to cap arguments for.
 * @returns {Function} Returns the new capped function.
 */

function baseUnary(func) {
  return function(value) {
    return func(value);
  };
}

var _baseUnary = baseUnary;

export { _baseUnary as _ };
