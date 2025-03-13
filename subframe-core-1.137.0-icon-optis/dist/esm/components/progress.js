"use client";
import { __rest } from '../_virtual/_tslib.js';
import { Root as Root$1, Indicator as Indicator$1 } from '../external/@radix-ui/react-progress/dist/index.js';
import classNames from '../external/classnames/index.js';
import React__default from 'react';
import styles from './progress.module.css.js';

const DEFAULT_PROGRESS_VALUE = 0;
const ProgressContext = React__default.createContext(DEFAULT_PROGRESS_VALUE);
const Root = React__default.forwardRef(function ProgressRoot(_a, ref) {
    var { className, children, value } = _a, otherProps = __rest(_a, ["className", "children", "value"]);
    return (React__default.createElement(ProgressContext.Provider, { value: value || DEFAULT_PROGRESS_VALUE },
        React__default.createElement(Root$1, Object.assign({ ref: ref }, otherProps, { value: value }), children)));
});
const Indicator = React__default.forwardRef(function Indicator(_a, ref) {
    var { className } = _a, otherProps = __rest(_a, ["className"]);
    const progress = React__default.useContext(ProgressContext);
    return (React__default.createElement(Indicator$1, Object.assign({ className: classNames(className, styles.indicator), ref: ref, asChild: true, style: { transform: `translateX(-${100 - progress}%)` } }, otherProps)));
});
const Progress = { Root, Indicator };

export { Indicator, Progress, Root };
