"use client";
'use strict';

var _tslib = require('../_virtual/_tslib.js');
var index = require('../external/@radix-ui/react-dialog/dist/index.js');
var index$2 = require('../external/@radix-ui/react-visually-hidden/dist/index.js');
var index$1 = require('../external/classnames/index.js');
var React = require('react');
var dialog_module = require('./dialog.module.css.js');

const Root = React.forwardRef(function Dialog(_a, ref) {
    var { className, defaultOpen, open, onOpenChange, modal, title = "" } = _a, otherProps = _tslib.__rest(_a, ["className", "defaultOpen", "open", "onOpenChange", "modal", "title"]);
    return (React.createElement(index.Root, { defaultOpen: defaultOpen, open: open, onOpenChange: onOpenChange, modal: modal },
        React.createElement(index.Portal, null,
            React.createElement(index.Overlay, Object.assign({ ref: ref, asChild: true, className: index$1(className, dialog_module.root) }, otherProps))),
        React.createElement(index$2.Root, { asChild: true },
            React.createElement(index.Title, null, title))));
});
const Content = React.forwardRef(function Content(
// Silence Dialog.Description warning:
// https://github.com/radix-ui/primitives/blob/dae8ef4920b45f736e2574abf23676efab103645/packages/react/dialog/src/Dialog.tsx#L532
_a, ref) {
    var 
    // Silence Dialog.Description warning:
    // https://github.com/radix-ui/primitives/blob/dae8ef4920b45f736e2574abf23676efab103645/packages/react/dialog/src/Dialog.tsx#L532
    { "aria-describedby": ariaDescribedBy = undefined, onOpenAutoFocus, initialFocusRef } = _a, otherProps = _tslib.__rest(_a, 
    // Silence Dialog.Description warning:
    // https://github.com/radix-ui/primitives/blob/dae8ef4920b45f736e2574abf23676efab103645/packages/react/dialog/src/Dialog.tsx#L532
    ["aria-describedby", "onOpenAutoFocus", "initialFocusRef"]);
    const onOpenAutoFocusCallback = React.useCallback((e) => {
        var _a;
        if (initialFocusRef) {
            e.preventDefault();
            (_a = initialFocusRef.current) === null || _a === void 0 ? void 0 : _a.focus();
        }
        onOpenAutoFocus === null || onOpenAutoFocus === void 0 ? void 0 : onOpenAutoFocus(e);
    }, [initialFocusRef, onOpenAutoFocus]);
    return (React.createElement(index.Content, Object.assign({ "aria-describedby": ariaDescribedBy, ref: ref, asChild: true, onOpenAutoFocus: onOpenAutoFocusCallback }, otherProps)));
});
const Dialog = { Root, Content };

exports.Content = Content;
exports.Dialog = Dialog;
exports.Root = Root;
