"use client";
import { __rest } from '../_virtual/_tslib.js';
import classNames from '../external/classnames/index.js';
import React__default from 'react';
import styles from './skeleton.module.css.js';

const Skeleton = React__default.forwardRef(function Skeleton(props, ref) {
    const { className } = props, otherProps = __rest(props, ["className"]);
    return React__default.createElement("div", Object.assign({ ref: ref, className: classNames(className, styles.root) }, otherProps));
});

export { Skeleton };
