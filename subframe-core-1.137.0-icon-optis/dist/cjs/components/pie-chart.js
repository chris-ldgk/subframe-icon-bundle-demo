"use client";
'use strict';

var _tslib = require('../_virtual/_tslib.js');
var index = require('../external/classnames/index.js');
var React = require('react');
var charts = require('./charts.js');
var pieChart_module = require('./pie-chart.module.css.js');
var Pie = require('../external/recharts/es6/polar/Pie.js');
var Cell = require('../external/recharts/es6/component/Cell.js');
var PieChart$1 = require('../external/recharts/es6/chart/PieChart.js');

const PieChart = React.forwardRef(function PieChart(_a, ref) {
    var { className, category, colors = charts.DEFAULT_COLORS, dark, data, index: index$1, tooltip = React.createElement(charts.ChartTooltip, null), legend = React.createElement(charts.ChartLegend, null), children = (React.createElement(Pie.Pie, { className: index(pieChart_module.pie, { [pieChart_module.dark]: dark }), data: data, cx: "50%", cy: "50%", startAngle: 90, endAngle: -270, innerRadius: "75%", isAnimationActive: false, outerRadius: "100%", dataKey: category, nameKey: index$1 }, data.map((_, index) => {
        return React.createElement(Cell.Cell, { key: index, fill: colors[index % colors.length] });
    }))), margin } = _a, otherProps = _tslib.__rest(_a, ["className", "category", "colors", "dark", "data", "index", "tooltip", "legend", "children", "margin"]);
    return (React.createElement(charts.ChartContextProvider, { categories: data.map((obj) => obj[index$1]), colors: colors, dark: dark },
        React.createElement(charts.AutoSizedChartWrapper, Object.assign({ ref: ref }, otherProps), ({ height, width }) => (React.createElement(PieChart$1.PieChart, { data: data, height: height, width: width, margin: margin },
            tooltip,
            legend,
            children)))));
});

exports.PieChart = PieChart;
