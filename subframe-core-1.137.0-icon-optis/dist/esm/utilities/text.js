"use client";
import { __rest } from '../_virtual/_tslib.js';
import classNames from '../external/classnames/index.js';
import React__default from 'react';
import styles from './text.module.css.js';

function Text(props) {
    const { className, variant = "body", ellipsis, color = "default" } = props, otherProps = __rest(props, ["className", "variant", "ellipsis", "color"]);
    return (React__default.createElement("span", Object.assign({ className: classNames(className, {
            [styles.label]: variant === "label",
            [styles.labelBold]: variant === "label-bold",
            [styles.body]: variant === "body",
            [styles.bodyBold]: variant === "body-bold",
            [styles.subheader]: variant === "subheader",
            [styles.sectionHeader]: variant === "section-header",
            [styles.monospaceBody]: variant === "monospace-body",
            [styles.header]: variant === "header",
            [styles.ellipsis]: ellipsis,
            [styles.colorSubtext]: color === "subtext",
        }) }, otherProps)));
}

export { Text };
