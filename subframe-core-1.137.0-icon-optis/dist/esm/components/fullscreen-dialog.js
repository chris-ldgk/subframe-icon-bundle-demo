"use client";
import { __rest } from '../_virtual/_tslib.js';
import { Root as Root$1, Portal, Overlay, Content } from '../external/@radix-ui/react-dialog/dist/index.js';
import classNames from '../external/classnames/index.js';
import React__default from 'react';
import styles from './fullscreen-dialog.module.css.js';

const Root = React__default.forwardRef(function FullScreenDialog(_a, ref) {
    var { className, defaultOpen, open, onOpenChange, modal } = _a, otherProps = __rest(_a, ["className", "defaultOpen", "open", "onOpenChange", "modal"]);
    return (React__default.createElement(Root$1, { defaultOpen: defaultOpen, open: open, onOpenChange: onOpenChange, modal: modal },
        React__default.createElement(Portal, null,
            React__default.createElement(Overlay, { className: styles.root },
                React__default.createElement(Content, Object.assign({ ref: ref, asChild: true, className: classNames(className, styles.content) }, otherProps))))));
});
const FullScreenDialog = { Root };

export { FullScreenDialog, Root };
