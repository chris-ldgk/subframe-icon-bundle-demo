"use client";
'use strict';

var _tslib = require('../_virtual/_tslib.js');
var index = require('../external/classnames/index.js');
var React = require('react');
var reactVirtualizedAutoSizer_esm = require('../external/react-virtualized-auto-sizer/dist/react-virtualized-auto-sizer.esm.js');
var charts_module = require('./charts.module.css.js');
var XAxis$1 = require('../external/recharts/es6/cartesian/XAxis.js');
var YAxis$1 = require('../external/recharts/es6/cartesian/YAxis.js');
var Tooltip = require('../external/recharts/es6/component/Tooltip.js');
var Legend = require('../external/recharts/es6/component/Legend.js');
var Label = require('../external/recharts/es6/component/Label.js');
var CartesianGrid$1 = require('../external/recharts/es6/cartesian/CartesianGrid.js');

function _interopNamespaceDefault(e) {
  var n = Object.create(null);
  if (e) {
    Object.keys(e).forEach(function (k) {
      if (k !== 'default') {
        var d = Object.getOwnPropertyDescriptor(e, k);
        Object.defineProperty(n, k, d.get ? d : {
          enumerable: true,
          get: function () { return e[k]; }
        });
      }
    });
  }
  n.default = e;
  return Object.freeze(n);
}

var React__namespace = /*#__PURE__*/_interopNamespaceDefault(React);

/**
 * Colors
 */
/* Default palette is Blue */
const DEFAULT_COLORS = ["3b82f6", "bfdbfe", "2563eb", "93c5fd", "1d4ed8", "60a5fa"];
function createColorMap({ categories, colors }) {
    const colorMap = new Map();
    for (let i = 0; i < categories.length; i++) {
        colorMap.set(categories[i], colors[i % colors.length]);
    }
    return colorMap;
}
const ChartContext = React__namespace.createContext(undefined);
function ChartContextProvider({ categories, colors, dark, children, }) {
    const value = React__namespace.useMemo(() => ({ colorMap: createColorMap({ categories, colors }), dark }), [categories, colors, dark]);
    return React__namespace.createElement(ChartContext.Provider, { value: value }, children);
}
function useChartContext() {
    return React__namespace.useContext(ChartContext);
}
const AutoSizedChartWrapper = React__namespace.forwardRef(function AutoSizedChartWrapper(_a, ref) {
    var { className, style, children } = _a, props = _tslib.__rest(_a, ["className", "style", "children"]);
    return (React__namespace.createElement("div", Object.assign({ className: index(className, charts_module.root), ref: ref }, props, { style: Object.assign(Object.assign({}, style), { minHeight: 200, minWidth: 300 }) }),
        React__namespace.createElement(reactVirtualizedAutoSizer_esm, null, ({ height, width }) => children({ height, width }))));
});
/**
 * Recharts Wrappers
 */
const ChartLabel = Label.Label;
const CartesianGrid = (_a) => {
    var { ref, className, horizontal = true, vertical = false, strokeWidth = 1 } = _a, otherProps = _tslib.__rest(_a, ["ref", "className", "horizontal", "vertical", "strokeWidth"]);
    const { dark } = useChartContext();
    return (React__namespace.createElement(CartesianGrid$1.CartesianGrid, Object.assign({ className: index(className, charts_module.grid, { [charts_module.dark]: dark }), horizontal: horizontal, vertical: vertical, strokeWidth: strokeWidth, ref: ref }, otherProps)));
};
CartesianGrid.displayName = CartesianGrid$1.CartesianGrid.displayName;
const XAxis = (props) => {
    return React__namespace.createElement(XAxis$1.XAxis, Object.assign({}, props));
};
XAxis.displayName = XAxis$1.XAxis.displayName;
XAxis.defaultProps = Object.assign(Object.assign({}, XAxis$1.XAxis.defaultProps), { axisLine: false, tickLine: false, padding: { left: 20, right: 20 }, interval: "equidistantPreserveStart" });
const YAxis = (props) => {
    return React__namespace.createElement(YAxis$1.YAxis, Object.assign({}, props));
};
YAxis.displayName = YAxis$1.YAxis.displayName;
YAxis.defaultProps = Object.assign(Object.assign({}, YAxis$1.YAxis.defaultProps), { axisLine: false, tickLine: false, width: 40 });
function DefaultTooltip({ active, colorMap, dark, payload, label }) {
    if (active && payload && payload.length) {
        return (React__namespace.createElement("div", { className: index(charts_module.tooltip, { [charts_module.dark]: dark }) },
            label ? React__namespace.createElement("div", null, label) : null,
            payload.map(({ name, value }, index) => (React__namespace.createElement("div", { className: charts_module.row, key: index },
                React__namespace.createElement("span", { className: charts_module.dot, style: { backgroundColor: colorMap.get(String(name)) } }),
                React__namespace.createElement("span", { className: charts_module.name }, name !== null && name !== void 0 ? name : ""),
                React__namespace.createElement("span", { className: charts_module.value }, value))))));
    }
    return null;
}
const ChartTooltip = (props) => {
    const { colorMap, dark } = useChartContext();
    return (React__namespace.createElement(Tooltip.Tooltip, Object.assign({ content: ({ active, payload, label }) => (React__namespace.createElement(DefaultTooltip, { active: active, colorMap: colorMap, dark: dark, label: label, payload: payload })) }, props)));
};
ChartTooltip.displayName = Tooltip.Tooltip.displayName;
ChartTooltip.defaultProps = Object.assign(Object.assign({}, Tooltip.Tooltip.defaultProps), { cursor: { stroke: "#D1D5DB", strokeWidth: 1 }, isAnimationActive: false });
function DefaultLegend({ align, colorMap, dark, payload }) {
    return (React__namespace.createElement("div", { className: index(charts_module.legend, {
            [charts_module.dark]: dark,
            [charts_module.left]: align === "left",
            [charts_module.center]: align === "center",
            [charts_module.right]: align === "right",
        }) }, payload.map(({ value }, index) => (React__namespace.createElement("div", { className: charts_module.row, key: index },
        React__namespace.createElement("span", { className: charts_module.dot, style: { backgroundColor: colorMap.get(String(value)) } }),
        React__namespace.createElement("span", { className: charts_module.name }, value))))));
}
const ChartLegend = (_a) => {
    var { ref } = _a, otherProps = _tslib.__rest(_a, ["ref"]);
    const { colorMap, dark } = useChartContext();
    return (React__namespace.createElement(Legend.Legend, Object.assign({ content: ({ payload }) => (React__namespace.createElement(DefaultLegend, { align: otherProps.align, colorMap: colorMap, dark: dark, payload: payload })), ref: ref }, otherProps)));
};
ChartLegend.displayName = Legend.Legend.displayName;
ChartLegend.defaultProps = Object.assign(Object.assign({}, Legend.Legend.defaultProps), { align: "right", verticalAlign: "top" });

exports.AutoSizedChartWrapper = AutoSizedChartWrapper;
exports.CartesianGrid = CartesianGrid;
exports.ChartContextProvider = ChartContextProvider;
exports.ChartLabel = ChartLabel;
exports.ChartLegend = ChartLegend;
exports.ChartTooltip = ChartTooltip;
exports.DEFAULT_COLORS = DEFAULT_COLORS;
exports.XAxis = XAxis;
exports.YAxis = YAxis;
exports.createColorMap = createColorMap;
exports.useChartContext = useChartContext;
