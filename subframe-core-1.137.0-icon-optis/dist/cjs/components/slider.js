"use client";
'use strict';

var _tslib = require('../_virtual/_tslib.js');
var index = require('../external/@radix-ui/react-slider/dist/index.js');
var index$1 = require('../external/classnames/index.js');
var React = require('react');
var slider_module = require('./slider.module.css.js');

const Root = React.forwardRef(function ProgressRoot(_a, ref) {
    var { className, children, defaultValue = [27] } = _a, otherProps = _tslib.__rest(_a, ["className", "children", "defaultValue"]);
    return (React.createElement(index.Root, Object.assign({ ref: ref, className: index$1(className, slider_module.sliderRoot), defaultValue: defaultValue }, otherProps), children));
});
const Track = React.forwardRef(function Indicator(_a, ref) {
    var { className, children } = _a, otherProps = _tslib.__rest(_a, ["className", "children"]);
    return (React.createElement(index.Track, Object.assign({ className: index$1(className, slider_module.sliderTrack), ref: ref }, otherProps), children));
});
const Range = React.forwardRef(function Indicator(_a, ref) {
    var { className } = _a, otherProps = _tslib.__rest(_a, ["className"]);
    return React.createElement(index.Range, Object.assign({ className: index$1(className, slider_module.sliderRange), ref: ref }, otherProps));
});
const Thumb = React.forwardRef(function Indicator(_a, ref) {
    var { className } = _a, otherProps = _tslib.__rest(_a, ["className"]);
    return React.createElement(index.Thumb, Object.assign({ className: index$1(className, slider_module.sliderThumb), ref: ref }, otherProps));
});
const Slider = { Root, Track, Range, Thumb };

exports.Range = Range;
exports.Root = Root;
exports.Slider = Slider;
exports.Thumb = Thumb;
exports.Track = Track;
