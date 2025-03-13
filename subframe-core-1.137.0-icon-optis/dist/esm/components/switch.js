"use client";
import { __rest } from '../_virtual/_tslib.js';
import { Root as Root$1, Thumb as Thumb$1 } from '../external/@radix-ui/react-switch/dist/index.js';
import classNames from '../external/classnames/index.js';
import React__default from 'react';
import styles from './switch.module.css.js';

const Root = React__default.forwardRef(function Switch(_a, ref) {
    var { className } = _a, otherProps = __rest(_a, ["className"]);
    return React__default.createElement(Root$1, Object.assign({ ref: ref, className: classNames(className, styles.root) }, otherProps));
});
const Thumb = React__default.forwardRef(function Thumb(_a, ref) {
    var { className } = _a, otherProps = __rest(_a, ["className"]);
    return React__default.createElement(Thumb$1, Object.assign({ ref: ref, className: classNames(className, styles.thumb) }, otherProps));
});
const Switch = { Root, Thumb };

export { Root, Switch, Thumb };
