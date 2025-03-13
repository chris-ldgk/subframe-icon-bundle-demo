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

const SvgFeatherCarTaxiFront = (props) => (React__namespace.createElement("svg", Object.assign({ xmlns: "http://www.w3.org/2000/svg", width: "1em", height: "1em", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: 2, strokeLinecap: "round", strokeLinejoin: "round" }, props),
    React__namespace.createElement("path", { d: "M10 2h4" }),
    React__namespace.createElement("path", { d: "m21 8-2 2-1.5-3.7A2 2 0 0 0 15.646 5H8.4a2 2 0 0 0-1.903 1.257L5 10 3 8" }),
    React__namespace.createElement("path", { d: "M7 14h.01" }),
    React__namespace.createElement("path", { d: "M17 14h.01" }),
    React__namespace.createElement("rect", { width: 18, height: 8, x: 3, y: 10, rx: 2 }),
    React__namespace.createElement("path", { d: "M5 18v2" }),
    React__namespace.createElement("path", { d: "M19 18v2" })));

module.exports = SvgFeatherCarTaxiFront;
