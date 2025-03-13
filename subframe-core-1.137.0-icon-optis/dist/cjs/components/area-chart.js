"use client";
'use strict';

var _tslib = require('../_virtual/_tslib.js');
var index = require('../external/classnames/index.js');
var React = require('react');
var areaChart_module = require('./area-chart.module.css.js');
var charts = require('./charts.js');
var Area = require('../external/recharts/es6/cartesian/Area.js');
var Dot = require('../external/recharts/es6/shape/Dot.js');
var AreaChart$1 = require('../external/recharts/es6/chart/AreaChart.js');

const AreaChart = React.forwardRef(function AreaChart(_a, ref) {
    var { categories, colors = charts.DEFAULT_COLORS, dark, data, index: index$1, stacked, gridLines = React.createElement(charts.CartesianGrid, null), xAxis = React.createElement(charts.XAxis, { dataKey: index$1 }), yAxis = React.createElement(charts.YAxis, null), tooltip = React.createElement(charts.ChartTooltip, null), legend = React.createElement(charts.ChartLegend, null), children = [
        ...categories.map((category, index) => {
            const color = colors[index % colors.length];
            return (React.createElement("defs", { key: category },
                React.createElement("linearGradient", { style: { color }, id: color, x1: "0", x2: "0", y1: "0", y2: "1" },
                    React.createElement("stop", { offset: "5%", stopColor: "currentColor", stopOpacity: 0.7 }),
                    React.createElement("stop", { offset: "98%", stopColor: "currentColor", stopOpacity: 0.1 }))));
        }),
        ...categories.map((category, index$1) => {
            const color = colors[index$1 % colors.length];
            return (React.createElement(Area.Area, { key: index$1, type: "monotone", activeDot: (props) => {
                    const { cx, cy, stroke, strokeLinecap, strokeLinejoin, strokeWidth } = props;
                    return (React.createElement(Dot.Dot, { className: index(areaChart_module.dot, { [areaChart_module.dark]: dark }), cx: cx, cy: cy, r: 5, fill: color, stroke: stroke, strokeLinecap: strokeLinecap, strokeLinejoin: strokeLinejoin, strokeWidth: strokeWidth }));
                }, dataKey: category, fill: `url(#${color})`, isAnimationActive: false, stackId: stacked ? "a" : undefined, stroke: color, strokeLinejoin: "round", strokeLinecap: "round", strokeWidth: 2 }));
        }),
    ], layout, syncId, margin, stackOffset } = _a, otherProps = _tslib.__rest(_a, ["categories", "colors", "dark", "data", "index", "stacked", "gridLines", "xAxis", "yAxis", "tooltip", "legend", "children", "layout", "syncId", "margin", "stackOffset"]);
    return (React.createElement(charts.ChartContextProvider, { categories: categories, colors: colors, dark: dark },
        React.createElement(charts.AutoSizedChartWrapper, Object.assign({ ref: ref }, otherProps), ({ height, width }) => (React.createElement(AreaChart$1.AreaChart, { data: data, height: height, width: width, layout: layout, syncId: syncId, margin: margin, stackOffset: stackOffset },
            gridLines,
            xAxis,
            yAxis,
            tooltip,
            legend,
            children)))));
});

exports.AreaChart = AreaChart;
