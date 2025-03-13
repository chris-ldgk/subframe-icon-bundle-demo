'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var _tslib = require('../_virtual/_tslib.js');
var React = require('react');
var index = require('../assets/icons/final/index.js');
var icon = require('./icon.js');

const EagerIcon = React.forwardRef((props, ref) => {
    const { name } = props, otherProps = _tslib.__rest(props, ["name"]);
    let children = null;
    if (name === null) {
        children = null;
    }
    else if (name === "empty") {
        children = React.createElement(icon.EmptyIcon, null);
    }
    else {
        const Icon = index[name];
        if (!Icon) {
            console.warn(`Icon "${name}" not found.`);
            children = React.createElement(icon.EmptyIcon, null);
        }
        children = React.createElement(Icon, null);
    }
    return (React.createElement("span", Object.assign({ ref: ref }, otherProps), children));
});

exports.EagerIcon = EagerIcon;
exports.default = EagerIcon;
