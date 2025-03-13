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

const SvgFeatherBusFront = (props) => (React__namespace.createElement("svg", Object.assign({ xmlns: "http://www.w3.org/2000/svg", width: "1em", height: "1em", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: 2, strokeLinecap: "round", strokeLinejoin: "round" }, props),
    React__namespace.createElement("path", { d: "M4 6 2 7" }),
    React__namespace.createElement("path", { d: "M10 6h4" }),
    React__namespace.createElement("path", { d: "m22 7-2-1" }),
    React__namespace.createElement("rect", { width: 16, height: 16, x: 4, y: 3, rx: 2 }),
    React__namespace.createElement("path", { d: "M4 11h16" }),
    React__namespace.createElement("path", { d: "M8 15h.01" }),
    React__namespace.createElement("path", { d: "M16 15h.01" }),
    React__namespace.createElement("path", { d: "M6 19v2" }),
    React__namespace.createElement("path", { d: "M18 21v-2" })));

module.exports = SvgFeatherBusFront;
