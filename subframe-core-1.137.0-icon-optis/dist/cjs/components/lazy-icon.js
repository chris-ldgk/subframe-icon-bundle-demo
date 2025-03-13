'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var _tslib = require('../_virtual/_tslib.js');
var index = require('../external/dashify/index.js');
var React = require('react');
var iconNames = require('../generated/iconNames.js');
var icon = require('./icon.js');

const iconMap = Object.fromEntries(iconNames.iconNames.map((name) => {
    const fileName = index(name.replace(/_/g, "-"), { condense: true });
    return [name, React.lazy(() => import(`../assets/icons/final/${fileName}.js`))];
}));
const LazyIcon = React.forwardRef((props, ref) => {
    const { name } = props, otherProps = _tslib.__rest(props, ["name"]);
    let children = null;
    if (name === null) {
        children = null;
    }
    else if (name === "empty") {
        children = React.createElement(icon.EmptyIcon, null);
    }
    else {
        const Icon = iconMap[name];
        if (!Icon) {
            console.warn(`Icon "${name}" not found.`);
            children = React.createElement(icon.EmptyIcon, null);
        }
        children = React.createElement(Icon, null);
    }
    return (React.createElement("span", Object.assign({ ref: ref }, otherProps),
        React.createElement(React.Suspense, { fallback: React.createElement(icon.EmptyIcon, null) }, children)));
});

exports.LazyIcon = LazyIcon;
exports.default = LazyIcon;
