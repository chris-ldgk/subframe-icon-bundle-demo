"use client";
'use strict';

var _tslib = require('../_virtual/_tslib.js');
var index = require('../external/classnames/index.js');
var React = require('react');
var loader_module = require('./loader.module.css.js');

const Loader = React.forwardRef(function Loader(props, ref) {
    const { className } = props, otherProps = _tslib.__rest(props, ["className"]);
    return React.createElement("div", Object.assign({ ref: ref, className: index(className, loader_module.root) }, otherProps));
});

exports.Loader = Loader;
