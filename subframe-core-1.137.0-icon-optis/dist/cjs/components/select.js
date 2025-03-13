"use client";
'use strict';

var _tslib = require('../_virtual/_tslib.js');
var index = require('../external/@radix-ui/react-select/dist/index.js');
var index$1 = require('../external/classnames/index.js');
var React = require('react');
var select_module = require('./select.module.css.js');

const Root = React.forwardRef(function SelectRoot(_a, _ref) {
    var { children } = _a, otherProps = _tslib.__rest(_a, ["children"]);
    return React.createElement(index.Root, Object.assign({}, otherProps), children);
});
const Trigger = React.forwardRef(function Trigger(_a, ref) {
    var { className, children } = _a, otherProps = _tslib.__rest(_a, ["className", "children"]);
    return (React.createElement(index.Trigger, Object.assign({ className: index$1(className, select_module.trigger), ref: ref }, otherProps), children));
});
const Value = React.forwardRef(function Value(_a, ref) {
    var { children, // NOTE: ignored
    placeholder, className } = _a, otherProps = _tslib.__rest(_a, ["children", "placeholder", "className"]);
    return (
    // NOTE: this needs a wrapper since Radix strips all styling from RadixSelect.Value
    React.createElement("span", Object.assign({ className: index$1(className, select_module.value) }, otherProps, { ref: ref }),
        React.createElement(index.Value, { placeholder: placeholder })));
});
const Content = React.forwardRef(function Content(_a, ref) {
    var { className, children, position = "popper", sideOffset = 4 } = _a, otherProps = _tslib.__rest(_a, ["className", "children", "position", "sideOffset"]);
    return (React.createElement(index.Portal, null,
        React.createElement(index.Content, Object.assign({ className: index$1(className, select_module.content), ref: ref, position: position, sideOffset: sideOffset }, otherProps),
            React.createElement(Select.Viewport, { asChild: true }, children))));
});
const Viewport = React.forwardRef(function Viewport(_a, ref) {
    var { className, children } = _a, otherProps = _tslib.__rest(_a, ["className", "children"]);
    return (React.createElement(index.Viewport, Object.assign({ className: index$1(className, select_module.viewport), ref: ref }, otherProps), children));
});
const Item = React.forwardRef(function Item(_a, ref) {
    var { className, children, value } = _a, otherProps = _tslib.__rest(_a, ["className", "children", "value"]);
    return (React.createElement(index.Item, Object.assign({ className: index$1(className, select_module.item), ref: ref, value: value }, otherProps), children));
});
const ItemText = index.ItemText;
const Select = {
    Root,
    Trigger,
    Value,
    Content,
    Viewport,
    Item,
    ItemText,
};

exports.Content = Content;
exports.Item = Item;
exports.ItemText = ItemText;
exports.Root = Root;
exports.Select = Select;
exports.Trigger = Trigger;
exports.Value = Value;
exports.Viewport = Viewport;
