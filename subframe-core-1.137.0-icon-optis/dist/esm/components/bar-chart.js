"use client";
import { __rest } from '../_virtual/_tslib.js';
import React__default from 'react';
import { DEFAULT_COLORS, CartesianGrid, XAxis, YAxis, ChartTooltip, ChartLegend, ChartContextProvider, AutoSizedChartWrapper } from './charts.js';
import { Bar } from '../external/recharts/es6/cartesian/Bar.js';
import { BarChart as BarChart$1 } from '../external/recharts/es6/chart/BarChart.js';

const BarChart = React__default.forwardRef(function BarChart(_a, ref) {
    var { categories, colors = DEFAULT_COLORS, dark, data, index, stacked, gridLines = React__default.createElement(CartesianGrid, null), xAxis = React__default.createElement(XAxis, { dataKey: index }), yAxis = React__default.createElement(YAxis, null), tooltip = React__default.createElement(ChartTooltip, { cursor: { fill: "#D1D5DB", opacity: "0.15" } }), legend = React__default.createElement(ChartLegend, null), children = categories.map((category, index) => {
        const color = colors[index % colors.length];
        return (React__default.createElement(Bar, { key: index, dataKey: category, fill: color, stackId: stacked ? "a" : undefined, isAnimationActive: false }));
    }), layout, syncId, margin, barCategoryGap, barGap, barSize, maxBarSize, stackOffset, reverseStackOrder } = _a, otherProps = __rest(_a, ["categories", "colors", "dark", "data", "index", "stacked", "gridLines", "xAxis", "yAxis", "tooltip", "legend", "children", "layout", "syncId", "margin", "barCategoryGap", "barGap", "barSize", "maxBarSize", "stackOffset", "reverseStackOrder"]);
    return (React__default.createElement(ChartContextProvider, { categories: categories, colors: colors, dark: dark },
        React__default.createElement(AutoSizedChartWrapper, Object.assign({ ref: ref }, otherProps), ({ height, width }) => (React__default.createElement(BarChart$1, { data: data, height: height, width: width, layout: layout, syncId: syncId, margin: margin, barCategoryGap: barCategoryGap, barGap: barGap, barSize: barSize, maxBarSize: maxBarSize, stackOffset: stackOffset, reverseStackOrder: reverseStackOrder },
            gridLines,
            xAxis,
            yAxis,
            tooltip,
            legend,
            children)))));
});

export { BarChart };
