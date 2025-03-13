"use client";
'use strict';

var _tslib = require('../_virtual/_tslib.js');
var index = require('../external/@radix-ui/react-progress/dist/index.js');
var index$1 = require('../external/classnames/index.js');
var React = require('react');
var progress_module = require('./progress.module.css.js');

const DEFAULT_PROGRESS_VALUE = 0;
const ProgressContext = React.createContext(DEFAULT_PROGRESS_VALUE);
const Root = React.forwardRef(function ProgressRoot(_a, ref) {
    var { className, children, value } = _a, otherProps = _tslib.__rest(_a, ["className", "children", "value"]);
    return (React.createElement(ProgressContext.Provider, { value: value || DEFAULT_PROGRESS_VALUE },
        React.createElement(index.Root, Object.assign({ ref: ref }, otherProps, { value: value }), children)));
});
const Indicator = React.forwardRef(function Indicator(_a, ref) {
    var { className } = _a, otherProps = _tslib.__rest(_a, ["className"]);
    const progress = React.useContext(ProgressContext);
    return (React.createElement(index.Indicator, Object.assign({ className: index$1(className, progress_module.indicator), ref: ref, asChild: true, style: { transform: `translateX(-${100 - progress}%)` } }, otherProps)));
});
const Progress = { Root, Indicator };

exports.Indicator = Indicator;
exports.Progress = Progress;
exports.Root = Root;
