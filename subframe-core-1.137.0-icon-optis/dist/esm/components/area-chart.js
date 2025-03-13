"use client";
import { __rest } from '../_virtual/_tslib.js';
import classNames from '../external/classnames/index.js';
import React__default from 'react';
import styles from './area-chart.module.css.js';
import { DEFAULT_COLORS, CartesianGrid, XAxis, YAxis, ChartTooltip, ChartLegend, ChartContextProvider, AutoSizedChartWrapper } from './charts.js';
import { Area } from '../external/recharts/es6/cartesian/Area.js';
import { Dot } from '../external/recharts/es6/shape/Dot.js';
import { AreaChart as AreaChart$1 } from '../external/recharts/es6/chart/AreaChart.js';

const AreaChart = React__default.forwardRef(function AreaChart(_a, ref) {
    var { categories, colors = DEFAULT_COLORS, dark, data, index, stacked, gridLines = React__default.createElement(CartesianGrid, null), xAxis = React__default.createElement(XAxis, { dataKey: index }), yAxis = React__default.createElement(YAxis, null), tooltip = React__default.createElement(ChartTooltip, null), legend = React__default.createElement(ChartLegend, null), children = [
        ...categories.map((category, index) => {
            const color = colors[index % colors.length];
            return (React__default.createElement("defs", { key: category },
                React__default.createElement("linearGradient", { style: { color }, id: color, x1: "0", x2: "0", y1: "0", y2: "1" },
                    React__default.createElement("stop", { offset: "5%", stopColor: "currentColor", stopOpacity: 0.7 }),
                    React__default.createElement("stop", { offset: "98%", stopColor: "currentColor", stopOpacity: 0.1 }))));
        }),
        ...categories.map((category, index) => {
            const color = colors[index % colors.length];
            return (React__default.createElement(Area, { key: index, type: "monotone", activeDot: (props) => {
                    const { cx, cy, stroke, strokeLinecap, strokeLinejoin, strokeWidth } = props;
                    return (React__default.createElement(Dot, { className: classNames(styles.dot, { [styles.dark]: dark }), cx: cx, cy: cy, r: 5, fill: color, stroke: stroke, strokeLinecap: strokeLinecap, strokeLinejoin: strokeLinejoin, strokeWidth: strokeWidth }));
                }, dataKey: category, fill: `url(#${color})`, isAnimationActive: false, stackId: stacked ? "a" : undefined, stroke: color, strokeLinejoin: "round", strokeLinecap: "round", strokeWidth: 2 }));
        }),
    ], layout, syncId, margin, stackOffset } = _a, otherProps = __rest(_a, ["categories", "colors", "dark", "data", "index", "stacked", "gridLines", "xAxis", "yAxis", "tooltip", "legend", "children", "layout", "syncId", "margin", "stackOffset"]);
    return (React__default.createElement(ChartContextProvider, { categories: categories, colors: colors, dark: dark },
        React__default.createElement(AutoSizedChartWrapper, Object.assign({ ref: ref }, otherProps), ({ height, width }) => (React__default.createElement(AreaChart$1, { data: data, height: height, width: width, layout: layout, syncId: syncId, margin: margin, stackOffset: stackOffset },
            gridLines,
            xAxis,
            yAxis,
            tooltip,
            legend,
            children)))));
});

export { AreaChart };
