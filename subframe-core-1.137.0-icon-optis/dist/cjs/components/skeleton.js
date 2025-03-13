"use client";
'use strict';

var _tslib = require('../_virtual/_tslib.js');
var index = require('../external/classnames/index.js');
var React = require('react');
var skeleton_module = require('./skeleton.module.css.js');

const Skeleton = React.forwardRef(function Skeleton(props, ref) {
    const { className } = props, otherProps = _tslib.__rest(props, ["className"]);
    return React.createElement("div", Object.assign({ ref: ref, className: index(className, skeleton_module.root) }, otherProps));
});

exports.Skeleton = Skeleton;
