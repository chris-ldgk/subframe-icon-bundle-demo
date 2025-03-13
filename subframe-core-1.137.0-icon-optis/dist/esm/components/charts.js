"use client";
import { __rest } from '../_virtual/_tslib.js';
import classNames from '../external/classnames/index.js';
import * as React from 'react';
import AutoSizer from '../external/react-virtualized-auto-sizer/dist/react-virtualized-auto-sizer.esm.js';
import styles from './charts.module.css.js';
import { XAxis as XAxis$1 } from '../external/recharts/es6/cartesian/XAxis.js';
import { YAxis as YAxis$1 } from '../external/recharts/es6/cartesian/YAxis.js';
import { Tooltip } from '../external/recharts/es6/component/Tooltip.js';
import { Legend } from '../external/recharts/es6/component/Legend.js';
import { Label } from '../external/recharts/es6/component/Label.js';
import { CartesianGrid as CartesianGrid$1 } from '../external/recharts/es6/cartesian/CartesianGrid.js';

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
const ChartContext = React.createContext(undefined);
function ChartContextProvider({ categories, colors, dark, children, }) {
    const value = React.useMemo(() => ({ colorMap: createColorMap({ categories, colors }), dark }), [categories, colors, dark]);
    return React.createElement(ChartContext.Provider, { value: value }, children);
}
function useChartContext() {
    return React.useContext(ChartContext);
}
const AutoSizedChartWrapper = React.forwardRef(function AutoSizedChartWrapper(_a, ref) {
    var { className, style, children } = _a, props = __rest(_a, ["className", "style", "children"]);
    return (React.createElement("div", Object.assign({ className: classNames(className, styles.root), ref: ref }, props, { style: Object.assign(Object.assign({}, style), { minHeight: 200, minWidth: 300 }) }),
        React.createElement(AutoSizer, null, ({ height, width }) => children({ height, width }))));
});
/**
 * Recharts Wrappers
 */
const ChartLabel = Label;
const CartesianGrid = (_a) => {
    var { ref, className, horizontal = true, vertical = false, strokeWidth = 1 } = _a, otherProps = __rest(_a, ["ref", "className", "horizontal", "vertical", "strokeWidth"]);
    const { dark } = useChartContext();
    return (React.createElement(CartesianGrid$1, Object.assign({ className: classNames(className, styles.grid, { [styles.dark]: dark }), horizontal: horizontal, vertical: vertical, strokeWidth: strokeWidth, ref: ref }, otherProps)));
};
CartesianGrid.displayName = CartesianGrid$1.displayName;
const XAxis = (props) => {
    return React.createElement(XAxis$1, Object.assign({}, props));
};
XAxis.displayName = XAxis$1.displayName;
XAxis.defaultProps = Object.assign(Object.assign({}, XAxis$1.defaultProps), { axisLine: false, tickLine: false, padding: { left: 20, right: 20 }, interval: "equidistantPreserveStart" });
const YAxis = (props) => {
    return React.createElement(YAxis$1, Object.assign({}, props));
};
YAxis.displayName = YAxis$1.displayName;
YAxis.defaultProps = Object.assign(Object.assign({}, YAxis$1.defaultProps), { axisLine: false, tickLine: false, width: 40 });
function DefaultTooltip({ active, colorMap, dark, payload, label }) {
    if (active && payload && payload.length) {
        return (React.createElement("div", { className: classNames(styles.tooltip, { [styles.dark]: dark }) },
            label ? React.createElement("div", null, label) : null,
            payload.map(({ name, value }, index) => (React.createElement("div", { className: styles.row, key: index },
                React.createElement("span", { className: styles.dot, style: { backgroundColor: colorMap.get(String(name)) } }),
                React.createElement("span", { className: styles.name }, name !== null && name !== void 0 ? name : ""),
                React.createElement("span", { className: styles.value }, value))))));
    }
    return null;
}
const ChartTooltip = (props) => {
    const { colorMap, dark } = useChartContext();
    return (React.createElement(Tooltip, Object.assign({ content: ({ active, payload, label }) => (React.createElement(DefaultTooltip, { active: active, colorMap: colorMap, dark: dark, label: label, payload: payload })) }, props)));
};
ChartTooltip.displayName = Tooltip.displayName;
ChartTooltip.defaultProps = Object.assign(Object.assign({}, Tooltip.defaultProps), { cursor: { stroke: "#D1D5DB", strokeWidth: 1 }, isAnimationActive: false });
function DefaultLegend({ align, colorMap, dark, payload }) {
    return (React.createElement("div", { className: classNames(styles.legend, {
            [styles.dark]: dark,
            [styles.left]: align === "left",
            [styles.center]: align === "center",
            [styles.right]: align === "right",
        }) }, payload.map(({ value }, index) => (React.createElement("div", { className: styles.row, key: index },
        React.createElement("span", { className: styles.dot, style: { backgroundColor: colorMap.get(String(value)) } }),
        React.createElement("span", { className: styles.name }, value))))));
}
const ChartLegend = (_a) => {
    var { ref } = _a, otherProps = __rest(_a, ["ref"]);
    const { colorMap, dark } = useChartContext();
    return (React.createElement(Legend, Object.assign({ content: ({ payload }) => (React.createElement(DefaultLegend, { align: otherProps.align, colorMap: colorMap, dark: dark, payload: payload })), ref: ref }, otherProps)));
};
ChartLegend.displayName = Legend.displayName;
ChartLegend.defaultProps = Object.assign(Object.assign({}, Legend.defaultProps), { align: "right", verticalAlign: "top" });

export { AutoSizedChartWrapper, CartesianGrid, ChartContextProvider, ChartLabel, ChartLegend, ChartTooltip, DEFAULT_COLORS, XAxis, YAxis, createColorMap, useChartContext };
