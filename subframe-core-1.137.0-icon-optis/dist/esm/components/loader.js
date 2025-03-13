"use client";
import { __rest } from '../_virtual/_tslib.js';
import classNames from '../external/classnames/index.js';
import React__default from 'react';
import styles from './loader.module.css.js';

const Loader = React__default.forwardRef(function Loader(props, ref) {
    const { className } = props, otherProps = __rest(props, ["className"]);
    return React__default.createElement("div", Object.assign({ ref: ref, className: classNames(className, styles.root) }, otherProps));
});

export { Loader };
