'use strict';

var React = require('react');

function _interopNamespaceDefault(e) {
  var n = Object.create(null);
  if (e) {
    Object.keys(e).forEach(function (k) {
      if (k !== 'default') {
        var d = Object.getOwnPropertyDescriptor(e, k);
        Object.defineProperty(n, k, d.get ? d : {
          enumerable: true,
          get: function () { return e[k]; }
        });
      }
    });
  }
  n.default = e;
  return Object.freeze(n);
}

var React__namespace = /*#__PURE__*/_interopNamespaceDefault(React);

const SvgFeatherCandlestickChart = (props) => (React__namespace.createElement("svg", Object.assign({ xmlns: "http://www.w3.org/2000/svg", width: "1em", height: "1em", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: 2, strokeLinecap: "round", strokeLinejoin: "round" }, props),
    React__namespace.createElement("path", { d: "M9 5v4" }),
    React__namespace.createElement("rect", { width: 4, height: 6, x: 7, y: 9, rx: 1 }),
    React__namespace.createElement("path", { d: "M9 15v2" }),
    React__namespace.createElement("path", { d: "M17 3v2" }),
    React__namespace.createElement("rect", { width: 4, height: 8, x: 15, y: 5, rx: 1 }),
    React__namespace.createElement("path", { d: "M17 13v3" }),
    React__namespace.createElement("path", { d: "M3 3v18h18" })));

module.exports = SvgFeatherCandlestickChart;
