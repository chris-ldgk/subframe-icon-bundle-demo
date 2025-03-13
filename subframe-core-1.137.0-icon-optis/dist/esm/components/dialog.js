"use client";
import { __rest } from '../_virtual/_tslib.js';
import { Root as Root$1, Portal, Overlay, Title, Content as Content$1 } from '../external/@radix-ui/react-dialog/dist/index.js';
import { Root as Root$2 } from '../external/@radix-ui/react-visually-hidden/dist/index.js';
import classNames from '../external/classnames/index.js';
import React__default, { useCallback } from 'react';
import styles from './dialog.module.css.js';

const Root = React__default.forwardRef(function Dialog(_a, ref) {
    var { className, defaultOpen, open, onOpenChange, modal, title = "" } = _a, otherProps = __rest(_a, ["className", "defaultOpen", "open", "onOpenChange", "modal", "title"]);
    return (React__default.createElement(Root$1, { defaultOpen: defaultOpen, open: open, onOpenChange: onOpenChange, modal: modal },
        React__default.createElement(Portal, null,
            React__default.createElement(Overlay, Object.assign({ ref: ref, asChild: true, className: classNames(className, styles.root) }, otherProps))),
        React__default.createElement(Root$2, { asChild: true },
            React__default.createElement(Title, null, title))));
});
const Content = React__default.forwardRef(function Content(
// Silence Dialog.Description warning:
// https://github.com/radix-ui/primitives/blob/dae8ef4920b45f736e2574abf23676efab103645/packages/react/dialog/src/Dialog.tsx#L532
_a, ref) {
    var 
    // Silence Dialog.Description warning:
    // https://github.com/radix-ui/primitives/blob/dae8ef4920b45f736e2574abf23676efab103645/packages/react/dialog/src/Dialog.tsx#L532
    { "aria-describedby": ariaDescribedBy = undefined, onOpenAutoFocus, initialFocusRef } = _a, otherProps = __rest(_a, 
    // Silence Dialog.Description warning:
    // https://github.com/radix-ui/primitives/blob/dae8ef4920b45f736e2574abf23676efab103645/packages/react/dialog/src/Dialog.tsx#L532
    ["aria-describedby", "onOpenAutoFocus", "initialFocusRef"]);
    const onOpenAutoFocusCallback = useCallback((e) => {
        var _a;
        if (initialFocusRef) {
            e.preventDefault();
            (_a = initialFocusRef.current) === null || _a === void 0 ? void 0 : _a.focus();
        }
        onOpenAutoFocus === null || onOpenAutoFocus === void 0 ? void 0 : onOpenAutoFocus(e);
    }, [initialFocusRef, onOpenAutoFocus]);
    return (React__default.createElement(Content$1, Object.assign({ "aria-describedby": ariaDescribedBy, ref: ref, asChild: true, onOpenAutoFocus: onOpenAutoFocusCallback }, otherProps)));
});
const Dialog = { Root, Content };

export { Content, Dialog, Root };
