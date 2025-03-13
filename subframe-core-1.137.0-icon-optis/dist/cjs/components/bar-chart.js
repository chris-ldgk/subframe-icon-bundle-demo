"use client";
'use strict';

var _tslib = require('../_virtual/_tslib.js');
var React = require('react');
var charts = require('./charts.js');
var Bar = require('../external/recharts/es6/cartesian/Bar.js');
var BarChart$1 = require('../external/recharts/es6/chart/BarChart.js');

const BarChart = React.forwardRef(function BarChart(_a, ref) {
    var { categories, colors = charts.DEFAULT_COLORS, dark, data, index, stacked, gridLines = React.createElement(charts.CartesianGrid, null), xAxis = React.createElement(charts.XAxis, { dataKey: index }), yAxis = React.createElement(charts.YAxis, null), tooltip = React.createElement(charts.ChartTooltip, { cursor: { fill: "#D1D5DB", opacity: "0.15" } }), legend = React.createElement(charts.ChartLegend, null), children = categories.map((category, index) => {
        const color = colors[index % colors.length];
        return (React.createElement(Bar.Bar, { key: index, dataKey: category, fill: color, stackId: stacked ? "a" : undefined, isAnimationActive: false }));
    }), layout, syncId, margin, barCategoryGap, barGap, barSize, maxBarSize, stackOffset, reverseStackOrder } = _a, otherProps = _tslib.__rest(_a, ["categories", "colors", "dark", "data", "index", "stacked", "gridLines", "xAxis", "yAxis", "tooltip", "legend", "children", "layout", "syncId", "margin", "barCategoryGap", "barGap", "barSize", "maxBarSize", "stackOffset", "reverseStackOrder"]);
    return (React.createElement(charts.ChartContextProvider, { categories: categories, colors: colors, dark: dark },
        React.createElement(charts.AutoSizedChartWrapper, Object.assign({ ref: ref }, otherProps), ({ height, width }) => (React.createElement(BarChart$1.BarChart, { data: data, height: height, width: width, layout: layout, syncId: syncId, margin: margin, barCategoryGap: barCategoryGap, barGap: barGap, barSize: barSize, maxBarSize: maxBarSize, stackOffset: stackOffset, reverseStackOrder: reverseStackOrder },
            gridLines,
            xAxis,
            yAxis,
            tooltip,
            legend,
            children)))));
});

exports.BarChart = BarChart;
