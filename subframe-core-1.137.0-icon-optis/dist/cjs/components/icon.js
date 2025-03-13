"use client";
'use strict';

var _tslib = require('../_virtual/_tslib.js');
var index = require('../external/classnames/index.js');
var React = require('react');
var icon_module = require('./icon.module.css.js');
var subframeContext = require('./subframe-context.js');

const EmptyIcon = () => {
    return React.createElement("svg", { width: "1em", height: "1em" });
};
// These are lazy loaded because statically importing them would defeat the purpose of not bundling all icons in the library
const LazyEagerIcon = React.lazy(() => Promise.resolve().then(function () { return require('./eager-icon.js'); }));
const LazyLazyIcon = React.lazy(() => Promise.resolve().then(function () { return require('./lazy-icon.js'); }));
const LazyTreeshakableIcon = React.lazy(() => Promise.resolve().then(function () { return require('./treeshakable-icon.js'); }));
const Icon = React.forwardRef((props, ref) => {
    const { className, name, icon } = props, otherProps = _tslib.__rest(props, ["className", "name", "icon"]);
    const subframeContext$1 = React.useContext(subframeContext.SubframeContext);
    let iconType = "eager";
    if (subframeContext$1 === null || subframeContext$1 === void 0 ? void 0 : subframeContext$1.iconType) {
        iconType = subframeContext$1.iconType;
    }
    let children;
    if (icon === undefined && name === undefined) {
        children = null;
    }
    else {
        if (icon) {
            children = React.createElement(LazyTreeshakableIcon, { ref: ref, icon: icon, className: index(className, icon_module.root) });
        }
        else if (name) {
            switch (iconType) {
                case "eager":
                default:
                    children = (React.createElement(LazyEagerIcon, Object.assign({ ref: ref, name: name, className: index(className, icon_module.root) }, otherProps)));
                    break;
                case "experimental_lazy":
                    children = (React.createElement(LazyLazyIcon, Object.assign({ ref: ref, name: name, className: index(className, icon_module.root) }, otherProps)));
                    break;
            }
        }
    }
    let fallback = null;
    if (props.icon === null || props.name === null) {
        fallback = null;
    }
    else {
        fallback = React.createElement(EmptyIcon, null);
    }
    return React.createElement(React.Suspense, { fallback: fallback }, children);
});

exports.EmptyIcon = EmptyIcon;
exports.Icon = Icon;
