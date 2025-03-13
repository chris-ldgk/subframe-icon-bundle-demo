"use client";
'use strict';

var _tslib = require('../_virtual/_tslib.js');
var index = require('../external/classnames/index.js');
var React = require('react');
var charts = require('./charts.js');
var lineChart_module = require('./line-chart.module.css.js');
var Line = require('../external/recharts/es6/cartesian/Line.js');
var Dot = require('../external/recharts/es6/shape/Dot.js');
var LineChart$1 = require('../external/recharts/es6/chart/LineChart.js');

const LineChart = React.forwardRef(function LineChart(_a, ref) {
    var { categories, colors = charts.DEFAULT_COLORS, dark, data, index: index$1, gridLines = React.createElement(charts.CartesianGrid, null), xAxis = React.createElement(charts.XAxis, { dataKey: index$1 }), yAxis = React.createElement(charts.YAxis, null), tooltip = React.createElement(charts.ChartTooltip, null), legend = React.createElement(charts.ChartLegend, null), children = categories.map((category, index$1) => {
        const color = colors[index$1 % colors.length];
        return (React.createElement(Line.Line, { key: index$1, type: "monotone", activeDot: (props) => (React.createElement(Dot.Dot, Object.assign({ className: index(lineChart_module.dot, { [lineChart_module.dark]: dark }), r: 5, style: { fill: color } }, props))), dot: false, dataKey: category, fill: color, isAnimationActive: false, stroke: color, strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: 2 }));
    }), layout, syncId, margin } = _a, otherProps = _tslib.__rest(_a, ["categories", "colors", "dark", "data", "index", "gridLines", "xAxis", "yAxis", "tooltip", "legend", "children", "layout", "syncId", "margin"]);
    return (React.createElement(charts.ChartContextProvider, { categories: categories, colors: colors, dark: dark },
        React.createElement(charts.AutoSizedChartWrapper, Object.assign({ ref: ref }, otherProps), ({ height, width }) => (React.createElement(LineChart$1.LineChart, { data: data, height: height, width: width, layout: layout, syncId: syncId, margin: margin },
            gridLines,
            xAxis,
            yAxis,
            tooltip,
            legend,
            children)))));
});

exports.LineChart = LineChart;
