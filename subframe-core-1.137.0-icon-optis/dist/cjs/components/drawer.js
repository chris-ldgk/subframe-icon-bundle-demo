"use client";
'use strict';

var _tslib = require('../_virtual/_tslib.js');
var index = require('../external/@radix-ui/react-dialog/dist/index.js');
var index$1 = require('../external/classnames/index.js');
var React = require('react');
var drawer_module = require('./drawer.module.css.js');

const Root = React.forwardRef(function Drawer(_a, ref) {
    var { className, defaultOpen, open, onOpenChange, modal } = _a, otherProps = _tslib.__rest(_a, ["className", "defaultOpen", "open", "onOpenChange", "modal"]);
    return (React.createElement(index.Root, { defaultOpen: defaultOpen, open: open, onOpenChange: onOpenChange, modal: modal },
        React.createElement(index.Portal, null,
            React.createElement(index.Overlay, Object.assign({ ref: ref, asChild: true, className: index$1(className, drawer_module.root) }, otherProps)))));
});
const Content = React.forwardRef(function Content(_a, ref) {
    var otherProps = _tslib.__rest(_a, []);
    return React.createElement(index.Content, Object.assign({ ref: ref, asChild: true }, otherProps));
});
const Drawer = { Root, Content };

exports.Content = Content;
exports.Drawer = Drawer;
exports.Root = Root;
