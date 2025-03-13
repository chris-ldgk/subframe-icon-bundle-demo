'use strict';

var React = require('react');
var upperFirst = require('../../../lodash/upperFirst.js');
var isFunction = require('../../../lodash/isFunction.js');
var clsx = require('../../../clsx/dist/clsx.js');
var types = require('../util/types.js');
var ReactUtils = require('../util/ReactUtils.js');
var DataUtils = require('../util/DataUtils.js');
var area = require('../../../d3-shape/src/area.js');
var line = require('../../../d3-shape/src/line.js');
var linear = require('../../../d3-shape/src/curve/linear.js');
var basisClosed = require('../../../d3-shape/src/curve/basisClosed.js');
var basisOpen = require('../../../d3-shape/src/curve/basisOpen.js');
var basis = require('../../../d3-shape/src/curve/basis.js');
var bump = require('../../../d3-shape/src/curve/bump.js');
var linearClosed = require('../../../d3-shape/src/curve/linearClosed.js');
var monotone = require('../../../d3-shape/src/curve/monotone.js');
var natural = require('../../../d3-shape/src/curve/natural.js');
var step = require('../../../d3-shape/src/curve/step.js');

function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
var CURVE_FACTORIES = {
  curveBasisClosed: basisClosed,
  curveBasisOpen: basisOpen,
  curveBasis: basis.default,
  curveBumpX: bump.bumpX,
  curveBumpY: bump.bumpY,
  curveLinearClosed: linearClosed,
  curveLinear: linear,
  curveMonotoneX: monotone.monotoneX,
  curveMonotoneY: monotone.monotoneY,
  curveNatural: natural,
  curveStep: step.default,
  curveStepAfter: step.stepAfter,
  curveStepBefore: step.stepBefore
};
var defined = function defined(p) {
  return p.x === +p.x && p.y === +p.y;
};
var getX = function getX(p) {
  return p.x;
};
var getY = function getY(p) {
  return p.y;
};
var getCurveFactory = function getCurveFactory(type, layout) {
  if (isFunction.default(type)) {
    return type;
  }
  var name = "curve".concat(upperFirst(type));
  if ((name === 'curveMonotone' || name === 'curveBump') && layout) {
    return CURVE_FACTORIES["".concat(name).concat(layout === 'vertical' ? 'Y' : 'X')];
  }
  return CURVE_FACTORIES[name] || linear;
};
/**
 * Calculate the path of curve. Returns null if points is an empty array.
 * @return path or null
 */
var getPath = function getPath(_ref) {
  var _ref$type = _ref.type,
    type = _ref$type === void 0 ? 'linear' : _ref$type,
    _ref$points = _ref.points,
    points = _ref$points === void 0 ? [] : _ref$points,
    baseLine = _ref.baseLine,
    layout = _ref.layout,
    _ref$connectNulls = _ref.connectNulls,
    connectNulls = _ref$connectNulls === void 0 ? false : _ref$connectNulls;
  var curveFactory = getCurveFactory(type, layout);
  var formatPoints = connectNulls ? points.filter(function (entry) {
    return defined(entry);
  }) : points;
  var lineFunction;
  if (Array.isArray(baseLine)) {
    var formatBaseLine = connectNulls ? baseLine.filter(function (base) {
      return defined(base);
    }) : baseLine;
    var areaPoints = formatPoints.map(function (entry, index) {
      return _objectSpread(_objectSpread({}, entry), {}, {
        base: formatBaseLine[index]
      });
    });
    if (layout === 'vertical') {
      lineFunction = area().y(getY).x1(getX).x0(function (d) {
        return d.base.x;
      });
    } else {
      lineFunction = area().x(getX).y1(getY).y0(function (d) {
        return d.base.y;
      });
    }
    lineFunction.defined(defined).curve(curveFactory);
    return lineFunction(areaPoints);
  }
  if (layout === 'vertical' && DataUtils.isNumber(baseLine)) {
    lineFunction = area().y(getY).x1(getX).x0(baseLine);
  } else if (DataUtils.isNumber(baseLine)) {
    lineFunction = area().x(getX).y1(getY).y0(baseLine);
  } else {
    lineFunction = line().x(getX).y(getY);
  }
  lineFunction.defined(defined).curve(curveFactory);
  return lineFunction(formatPoints);
};
var Curve = function Curve(props) {
  var className = props.className,
    points = props.points,
    path = props.path,
    pathRef = props.pathRef;
  if ((!points || !points.length) && !path) {
    return null;
  }
  var realPath = points && points.length ? getPath(props) : path;
  return /*#__PURE__*/React.createElement("path", _extends({}, ReactUtils.filterProps(props, false), types.adaptEventHandlers(props), {
    className: clsx.clsx('recharts-curve', className),
    d: realPath,
    ref: pathRef
  }));
};

exports.Curve = Curve;
exports.getPath = getPath;
