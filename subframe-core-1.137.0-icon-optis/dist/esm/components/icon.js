"use client";
import { __rest } from '../_virtual/_tslib.js';
import classNames from '../external/classnames/index.js';
import React__default, { lazy, forwardRef, useContext, Suspense } from 'react';
import styles from './icon.module.css.js';
import { SubframeContext } from './subframe-context.js';

const EmptyIcon = () => {
    return React__default.createElement("svg", { width: "1em", height: "1em" });
};
// These are lazy loaded because statically importing them would defeat the purpose of not bundling all icons in the library
const LazyEagerIcon = lazy(() => import('./eager-icon.js'));
const LazyLazyIcon = lazy(() => import('./lazy-icon.js'));
const LazyTreeshakableIcon = lazy(() => import('./treeshakable-icon.js'));
const Icon = forwardRef((props, ref) => {
    const { className, name, icon } = props, otherProps = __rest(props, ["className", "name", "icon"]);
    const subframeContext = useContext(SubframeContext);
    let iconType = "eager";
    if (subframeContext === null || subframeContext === void 0 ? void 0 : subframeContext.iconType) {
        iconType = subframeContext.iconType;
    }
    let children;
    if (icon === undefined && name === undefined) {
        children = null;
    }
    else {
        if (icon) {
            children = React__default.createElement(LazyTreeshakableIcon, { ref: ref, icon: icon, className: classNames(className, styles.root) });
        }
        else if (name) {
            switch (iconType) {
                case "eager":
                default:
                    children = (React__default.createElement(LazyEagerIcon, Object.assign({ ref: ref, name: name, className: classNames(className, styles.root) }, otherProps)));
                    break;
                case "experimental_lazy":
                    children = (React__default.createElement(LazyLazyIcon, Object.assign({ ref: ref, name: name, className: classNames(className, styles.root) }, otherProps)));
                    break;
            }
        }
    }
    let fallback = null;
    if (props.icon === null || props.name === null) {
        fallback = null;
    }
    else {
        fallback = React__default.createElement(EmptyIcon, null);
    }
    return React__default.createElement(Suspense, { fallback: fallback }, children);
});

export { EmptyIcon, Icon };
