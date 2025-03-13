'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var _tslib = require('../_virtual/_tslib.js');
var React = require('react');

const TreeshakableIcon = React.forwardRef((props, ref) => {
    const { icon } = props, otherProps = _tslib.__rest(props, ["icon"]);
    return (React.createElement("span", Object.assign({ ref: ref }, otherProps), icon));
});

exports.TreeshakableIcon = TreeshakableIcon;
exports.default = TreeshakableIcon;
