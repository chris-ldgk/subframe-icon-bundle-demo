"use client";
'use strict';

var _tslib = require('../_virtual/_tslib.js');
var index$2 = require('../external/@radix-ui/react-collapsible/dist/index.js');
var index = require('../external/@radix-ui/react-slot/dist/index.js');
var index$1 = require('../external/classnames/index.js');
var React = require('react');
var collapsible_module = require('./collapsible.module.css.js');

const Chevron = React.forwardRef(function CollapsibleChevron(_a, ref) {
    var { className } = _a, otherProps = _tslib.__rest(_a, ["className"]);
    return React.createElement(index.Slot, Object.assign({ ref: ref, className: index$1(className, collapsible_module.chevron) }, otherProps));
});
const Trigger = React.forwardRef(function Trigger(_a, ref) {
    var { className, children } = _a, otherProps = _tslib.__rest(_a, ["className", "children"]);
    return (React.createElement(index$2.Trigger, Object.assign({ className: index$1(className, collapsible_module.trigger), ref: ref }, otherProps), children));
});
const Content = React.forwardRef(function Content(_a, ref) {
    var { className, children } = _a, otherProps = _tslib.__rest(_a, ["className", "children"]);
    return (React.createElement(index$2.Content, Object.assign({ className: index$1(className, collapsible_module.content), ref: ref }, otherProps), children));
});
const Root = index$2.Root;
const Collapsible = {
    Root,
    Trigger,
    Content,
    Chevron,
};

exports.Chevron = Chevron;
exports.Collapsible = Collapsible;
exports.Content = Content;
exports.Root = Root;
exports.Trigger = Trigger;
