"use client";
'use strict';

var _tslib = require('../_virtual/_tslib.js');
var index = require('../external/@radix-ui/react-switch/dist/index.js');
var index$1 = require('../external/classnames/index.js');
var React = require('react');
var switch_module = require('./switch.module.css.js');

const Root = React.forwardRef(function Switch(_a, ref) {
    var { className } = _a, otherProps = _tslib.__rest(_a, ["className"]);
    return React.createElement(index.Root, Object.assign({ ref: ref, className: index$1(className, switch_module.root) }, otherProps));
});
const Thumb = React.forwardRef(function Thumb(_a, ref) {
    var { className } = _a, otherProps = _tslib.__rest(_a, ["className"]);
    return React.createElement(index.Thumb, Object.assign({ ref: ref, className: index$1(className, switch_module.thumb) }, otherProps));
});
const Switch = { Root, Thumb };

exports.Root = Root;
exports.Switch = Switch;
exports.Thumb = Thumb;
