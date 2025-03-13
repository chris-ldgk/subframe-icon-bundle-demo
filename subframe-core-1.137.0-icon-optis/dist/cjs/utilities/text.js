"use client";
'use strict';

var _tslib = require('../_virtual/_tslib.js');
var index = require('../external/classnames/index.js');
var React = require('react');
var text_module = require('./text.module.css.js');

function Text(props) {
    const { className, variant = "body", ellipsis, color = "default" } = props, otherProps = _tslib.__rest(props, ["className", "variant", "ellipsis", "color"]);
    return (React.createElement("span", Object.assign({ className: index(className, {
            [text_module.label]: variant === "label",
            [text_module.labelBold]: variant === "label-bold",
            [text_module.body]: variant === "body",
            [text_module.bodyBold]: variant === "body-bold",
            [text_module.subheader]: variant === "subheader",
            [text_module.sectionHeader]: variant === "section-header",
            [text_module.monospaceBody]: variant === "monospace-body",
            [text_module.header]: variant === "header",
            [text_module.ellipsis]: ellipsis,
            [text_module.colorSubtext]: color === "subtext",
        }) }, otherProps)));
}

exports.Text = Text;
