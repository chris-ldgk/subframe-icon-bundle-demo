'use strict';

var React = require('react');
var tinyInvariant = require('../../../tiny-invariant/dist/esm/tiny-invariant.js');
var find = require('../../../lodash/find.js');
var every = require('../../../lodash/every.js');
var calculateViewBox = require('../util/calculateViewBox.js');
var DataUtils = require('../util/DataUtils.js');

function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
var XAxisContext = /*#__PURE__*/React.createContext(undefined);
var YAxisContext = /*#__PURE__*/React.createContext(undefined);
var ViewBoxContext = /*#__PURE__*/React.createContext(undefined);
var OffsetContext = /*#__PURE__*/React.createContext({});
var ClipPathIdContext = /*#__PURE__*/React.createContext(undefined);
var ChartHeightContext = /*#__PURE__*/React.createContext(0);
var ChartWidthContext = /*#__PURE__*/React.createContext(0);

/**
 * Will add all the properties required to render all individual Recharts components into a React Context.
 *
 * If you want to read these properties, see the collection of hooks exported from this file.
 *
 * @param {object} props CategoricalChartState, plus children
 * @returns {ReactElement} React Context Provider
 */
var ChartLayoutContextProvider = function ChartLayoutContextProvider(props) {
  var _props$state = props.state,
    xAxisMap = _props$state.xAxisMap,
    yAxisMap = _props$state.yAxisMap,
    offset = _props$state.offset,
    clipPathId = props.clipPathId,
    children = props.children,
    width = props.width,
    height = props.height;

  /**
   * Perhaps we should compute this property when reading? Let's see what is more often used
   */
  var viewBox = calculateViewBox.calculateViewBox(offset);

  /*
   * This pretends to be a single context but actually is split into multiple smaller ones.
   * Why?
   * Because one React Context only allows to set one value.
   * But we need to set multiple values.
   * If we do that with one context, then we force re-render on components that might not even be interested
   * in the part of the state that has changed.
   *
   * By splitting into smaller contexts, we allow each components to be optimized and only re-render when its dependencies change.
   *
   * To actually achieve the optimal re-render, it is necessary to use React.memo().
   * See the test file for details.
   */
  return /*#__PURE__*/React.createElement(XAxisContext.Provider, {
    value: xAxisMap
  }, /*#__PURE__*/React.createElement(YAxisContext.Provider, {
    value: yAxisMap
  }, /*#__PURE__*/React.createElement(OffsetContext.Provider, {
    value: offset
  }, /*#__PURE__*/React.createElement(ViewBoxContext.Provider, {
    value: viewBox
  }, /*#__PURE__*/React.createElement(ClipPathIdContext.Provider, {
    value: clipPathId
  }, /*#__PURE__*/React.createElement(ChartHeightContext.Provider, {
    value: height
  }, /*#__PURE__*/React.createElement(ChartWidthContext.Provider, {
    value: width
  }, children)))))));
};
var useClipPathId = function useClipPathId() {
  return React.useContext(ClipPathIdContext);
};
function getKeysForDebug(object) {
  var keys = Object.keys(object);
  if (keys.length === 0) {
    return 'There are no available ids.';
  }
  return "Available ids are: ".concat(keys, ".");
}

/**
 * This either finds and returns Axis by the specified ID, or throws an exception if an axis with this ID does not exist.
 *
 * @param xAxisId identifier of the axis - it's either autogenerated ('0'), or passed via `id` prop as <XAxis id='foo' />
 * @returns axis configuration object
 * @throws Error if no axis with this ID exists
 */
var useXAxisOrThrow = function useXAxisOrThrow(xAxisId) {
  var xAxisMap = React.useContext(XAxisContext);
  !(xAxisMap != null) ? process.env.NODE_ENV !== "production" ? tinyInvariant(false, 'Could not find Recharts context; are you sure this is rendered inside a Recharts wrapper component?') : tinyInvariant(false) : void 0;
  var xAxis = xAxisMap[xAxisId];
  !(xAxis != null) ? process.env.NODE_ENV !== "production" ? tinyInvariant(false, "Could not find xAxis by id \"".concat(xAxisId, "\" [").concat(_typeof(xAxisId), "]. ").concat(getKeysForDebug(xAxisMap))) : tinyInvariant(false) : void 0;
  return xAxis;
};

/**
 * This will find an arbitrary first XAxis. If there's exactly one it always returns that one
 * - but if there are multiple then it can return any of those.
 *
 * If you want specific XAxis out of multiple then prefer using useXAxisOrThrow
 *
 * @returns X axisOptions, or undefined - if there are no X axes
 */
var useArbitraryXAxis = function useArbitraryXAxis() {
  var xAxisMap = React.useContext(XAxisContext);
  return DataUtils.getAnyElementOfObject(xAxisMap);
};

/**
 * This hooks will:
 * 1st attempt to find an YAxis that has all elements in its domain finite
 * If no such axis exists, it will return an arbitrary YAxis
 * if there are no Y axes then it returns undefined
 *
 * @returns Either Y axisOptions, or undefined if there are no Y axes
 */
var useYAxisWithFiniteDomainOrRandom = function useYAxisWithFiniteDomainOrRandom() {
  var yAxisMap = React.useContext(YAxisContext);
  var yAxisWithFiniteDomain = find(yAxisMap, function (axis) {
    return every(axis.domain, Number.isFinite);
  });
  return yAxisWithFiniteDomain || DataUtils.getAnyElementOfObject(yAxisMap);
};

/**
 * This either finds and returns Axis by the specified ID, or throws an exception if an axis with this ID does not exist.
 *
 * @param yAxisId identifier of the axis - it's either autogenerated ('0'), or passed via `id` prop as <YAxis id='foo' />
 * @returns axis configuration object
 * @throws Error if no axis with this ID exists
 */
var useYAxisOrThrow = function useYAxisOrThrow(yAxisId) {
  var yAxisMap = React.useContext(YAxisContext);
  !(yAxisMap != null) ? process.env.NODE_ENV !== "production" ? tinyInvariant(false, 'Could not find Recharts context; are you sure this is rendered inside a Recharts wrapper component?') : tinyInvariant(false) : void 0;
  var yAxis = yAxisMap[yAxisId];
  !(yAxis != null) ? process.env.NODE_ENV !== "production" ? tinyInvariant(false, "Could not find yAxis by id \"".concat(yAxisId, "\" [").concat(_typeof(yAxisId), "]. ").concat(getKeysForDebug(yAxisMap))) : tinyInvariant(false) : void 0;
  return yAxis;
};
var useViewBox = function useViewBox() {
  var viewBox = React.useContext(ViewBoxContext);
  return viewBox;
};
var useOffset = function useOffset() {
  return React.useContext(OffsetContext);
};
var useChartWidth = function useChartWidth() {
  return React.useContext(ChartWidthContext);
};
var useChartHeight = function useChartHeight() {
  return React.useContext(ChartHeightContext);
};

exports.ChartHeightContext = ChartHeightContext;
exports.ChartLayoutContextProvider = ChartLayoutContextProvider;
exports.ChartWidthContext = ChartWidthContext;
exports.ClipPathIdContext = ClipPathIdContext;
exports.OffsetContext = OffsetContext;
exports.ViewBoxContext = ViewBoxContext;
exports.XAxisContext = XAxisContext;
exports.YAxisContext = YAxisContext;
exports.useArbitraryXAxis = useArbitraryXAxis;
exports.useChartHeight = useChartHeight;
exports.useChartWidth = useChartWidth;
exports.useClipPathId = useClipPathId;
exports.useOffset = useOffset;
exports.useViewBox = useViewBox;
exports.useXAxisOrThrow = useXAxisOrThrow;
exports.useYAxisOrThrow = useYAxisOrThrow;
exports.useYAxisWithFiniteDomainOrRandom = useYAxisWithFiniteDomainOrRandom;
