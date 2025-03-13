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

const SvgFeatherArrowDown01 = (props) => (React__namespace.createElement("svg", Object.assign({ xmlns: "http://www.w3.org/2000/svg", width: "1em", height: "1em", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: 2, strokeLinecap: "round", strokeLinejoin: "round" }, props),
    React__namespace.createElement("path", { d: "m3 16 4 4 4-4" }),
    React__namespace.createElement("path", { d: "M7 20V4" }),
    React__namespace.createElement("rect", { x: 15, y: 4, width: 4, height: 6, ry: 2 }),
    React__namespace.createElement("path", { d: "M17 20v-6h-2" }),
    React__namespace.createElement("path", { d: "M15 20h4" })));

module.exports = SvgFeatherArrowDown01;
