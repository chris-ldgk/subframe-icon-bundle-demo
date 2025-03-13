"use client";
import { __rest } from '../_virtual/_tslib.js';
import { Root as Root$1, Portal, Overlay, Content as Content$1 } from '../external/@radix-ui/react-dialog/dist/index.js';
import classNames from '../external/classnames/index.js';
import React__default from 'react';
import styles from './drawer.module.css.js';

const Root = React__default.forwardRef(function Drawer(_a, ref) {
    var { className, defaultOpen, open, onOpenChange, modal } = _a, otherProps = __rest(_a, ["className", "defaultOpen", "open", "onOpenChange", "modal"]);
    return (React__default.createElement(Root$1, { defaultOpen: defaultOpen, open: open, onOpenChange: onOpenChange, modal: modal },
        React__default.createElement(Portal, null,
            React__default.createElement(Overlay, Object.assign({ ref: ref, asChild: true, className: classNames(className, styles.root) }, otherProps)))));
});
const Content = React__default.forwardRef(function Content(_a, ref) {
    var otherProps = __rest(_a, []);
    return React__default.createElement(Content$1, Object.assign({ ref: ref, asChild: true }, otherProps));
});
const Drawer = { Root, Content };

export { Content, Drawer, Root };
