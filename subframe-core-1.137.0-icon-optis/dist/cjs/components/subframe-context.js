"use client";
'use strict';

var _tslib = require('../_virtual/_tslib.js');
var React = require('react');

const SubframeContext = React.createContext({
    iconType: "eager",
});
const SubframeProvider = (_a) => {
    var { children } = _a, value = _tslib.__rest(_a, ["children"]);
    return React.createElement(SubframeContext.Provider, { value: value }, children);
};

exports.SubframeContext = SubframeContext;
exports.SubframeProvider = SubframeProvider;
