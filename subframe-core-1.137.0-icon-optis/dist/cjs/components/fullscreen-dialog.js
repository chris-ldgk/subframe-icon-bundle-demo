"use client";
'use strict';

var _tslib = require('../_virtual/_tslib.js');
var index = require('../external/@radix-ui/react-dialog/dist/index.js');
var index$1 = require('../external/classnames/index.js');
var React = require('react');
var fullscreenDialog_module = require('./fullscreen-dialog.module.css.js');

const Root = React.forwardRef(function FullScreenDialog(_a, ref) {
    var { className, defaultOpen, open, onOpenChange, modal } = _a, otherProps = _tslib.__rest(_a, ["className", "defaultOpen", "open", "onOpenChange", "modal"]);
    return (React.createElement(index.Root, { defaultOpen: defaultOpen, open: open, onOpenChange: onOpenChange, modal: modal },
        React.createElement(index.Portal, null,
            React.createElement(index.Overlay, { className: fullscreenDialog_module.root },
                React.createElement(index.Content, Object.assign({ ref: ref, asChild: true, className: index$1(className, fullscreenDialog_module.content) }, otherProps))))));
});
const FullScreenDialog = { Root };

exports.FullScreenDialog = FullScreenDialog;
exports.Root = Root;
