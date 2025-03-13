"use client";
import { __rest } from '../_virtual/_tslib.js';
import { Root as Root$1, Track as Track$1, Range as Range$1, Thumb as Thumb$1 } from '../external/@radix-ui/react-slider/dist/index.js';
import classNames from '../external/classnames/index.js';
import React__default from 'react';
import styles from './slider.module.css.js';

const Root = React__default.forwardRef(function ProgressRoot(_a, ref) {
    var { className, children, defaultValue = [27] } = _a, otherProps = __rest(_a, ["className", "children", "defaultValue"]);
    return (React__default.createElement(Root$1, Object.assign({ ref: ref, className: classNames(className, styles.sliderRoot), defaultValue: defaultValue }, otherProps), children));
});
const Track = React__default.forwardRef(function Indicator(_a, ref) {
    var { className, children } = _a, otherProps = __rest(_a, ["className", "children"]);
    return (React__default.createElement(Track$1, Object.assign({ className: classNames(className, styles.sliderTrack), ref: ref }, otherProps), children));
});
const Range = React__default.forwardRef(function Indicator(_a, ref) {
    var { className } = _a, otherProps = __rest(_a, ["className"]);
    return React__default.createElement(Range$1, Object.assign({ className: classNames(className, styles.sliderRange), ref: ref }, otherProps));
});
const Thumb = React__default.forwardRef(function Indicator(_a, ref) {
    var { className } = _a, otherProps = __rest(_a, ["className"]);
    return React__default.createElement(Thumb$1, Object.assign({ className: classNames(className, styles.sliderThumb), ref: ref }, otherProps));
});
const Slider = { Root, Track, Range, Thumb };

export { Range, Root, Slider, Thumb, Track };
