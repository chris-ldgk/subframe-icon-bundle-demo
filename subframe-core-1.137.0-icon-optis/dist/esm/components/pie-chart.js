"use client";
import { __rest } from '../_virtual/_tslib.js';
import classNames from '../external/classnames/index.js';
import React__default from 'react';
import { DEFAULT_COLORS, ChartTooltip, ChartLegend, ChartContextProvider, AutoSizedChartWrapper } from './charts.js';
import styles from './pie-chart.module.css.js';
import { Pie } from '../external/recharts/es6/polar/Pie.js';
import { Cell } from '../external/recharts/es6/component/Cell.js';
import { PieChart as PieChart$1 } from '../external/recharts/es6/chart/PieChart.js';

const PieChart = React__default.forwardRef(function PieChart(_a, ref) {
    var { className, category, colors = DEFAULT_COLORS, dark, data, index, tooltip = React__default.createElement(ChartTooltip, null), legend = React__default.createElement(ChartLegend, null), children = (React__default.createElement(Pie, { className: classNames(styles.pie, { [styles.dark]: dark }), data: data, cx: "50%", cy: "50%", startAngle: 90, endAngle: -270, innerRadius: "75%", isAnimationActive: false, outerRadius: "100%", dataKey: category, nameKey: index }, data.map((_, index) => {
        return React__default.createElement(Cell, { key: index, fill: colors[index % colors.length] });
    }))), margin } = _a, otherProps = __rest(_a, ["className", "category", "colors", "dark", "data", "index", "tooltip", "legend", "children", "margin"]);
    return (React__default.createElement(ChartContextProvider, { categories: data.map((obj) => obj[index]), colors: colors, dark: dark },
        React__default.createElement(AutoSizedChartWrapper, Object.assign({ ref: ref }, otherProps), ({ height, width }) => (React__default.createElement(PieChart$1, { data: data, height: height, width: width, margin: margin },
            tooltip,
            legend,
            children)))));
});

export { PieChart };
