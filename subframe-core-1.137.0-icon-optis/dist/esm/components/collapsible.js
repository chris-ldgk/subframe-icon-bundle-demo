"use client";
import { __rest } from '../_virtual/_tslib.js';
import { Trigger as Trigger$1, Content as Content$1, Root as Root$1 } from '../external/@radix-ui/react-collapsible/dist/index.js';
import { Slot } from '../external/@radix-ui/react-slot/dist/index.js';
import classNames from '../external/classnames/index.js';
import React__default from 'react';
import styles from './collapsible.module.css.js';

const Chevron = React__default.forwardRef(function CollapsibleChevron(_a, ref) {
    var { className } = _a, otherProps = __rest(_a, ["className"]);
    return React__default.createElement(Slot, Object.assign({ ref: ref, className: classNames(className, styles.chevron) }, otherProps));
});
const Trigger = React__default.forwardRef(function Trigger(_a, ref) {
    var { className, children } = _a, otherProps = __rest(_a, ["className", "children"]);
    return (React__default.createElement(Trigger$1, Object.assign({ className: classNames(className, styles.trigger), ref: ref }, otherProps), children));
});
const Content = React__default.forwardRef(function Content(_a, ref) {
    var { className, children } = _a, otherProps = __rest(_a, ["className", "children"]);
    return (React__default.createElement(Content$1, Object.assign({ className: classNames(className, styles.content), ref: ref }, otherProps), children));
});
const Root = Root$1;
const Collapsible = {
    Root,
    Trigger,
    Content,
    Chevron,
};

export { Chevron, Collapsible, Content, Root, Trigger };
