"use client";
'use strict';

var _tslib = require('../_virtual/_tslib.js');
var index = require('../external/@radix-ui/react-toggle-group/dist/index.js');
var React = require('react');

const Root = React.forwardRef(function Root(_a, ref) {
    var { className, type = "single" } = _a, otherProps = _tslib.__rest(_a, ["className", "type"]);
    return React.createElement(index.Root, Object.assign({ ref: ref, className: className, type: type }, otherProps));
});
const Item = index.Item;
const ToggleGroup = { Root, Item };

exports.Item = Item;
exports.Root = Root;
exports.ToggleGroup = ToggleGroup;
