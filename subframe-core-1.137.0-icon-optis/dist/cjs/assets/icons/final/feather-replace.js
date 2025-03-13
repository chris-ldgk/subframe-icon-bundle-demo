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

const SvgFeatherReplace = (props) => (React__namespace.createElement("svg", Object.assign({ xmlns: "http://www.w3.org/2000/svg", width: "1em", height: "1em", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: 2, strokeLinecap: "round", strokeLinejoin: "round" }, props),
    React__namespace.createElement("path", { d: "M14 4c0-1.1.9-2 2-2" }),
    React__namespace.createElement("path", { d: "M20 2c1.1 0 2 .9 2 2" }),
    React__namespace.createElement("path", { d: "M22 8c0 1.1-.9 2-2 2" }),
    React__namespace.createElement("path", { d: "M16 10c-1.1 0-2-.9-2-2" }),
    React__namespace.createElement("path", { d: "m3 7 3 3 3-3" }),
    React__namespace.createElement("path", { d: "M6 10V5c0-1.7 1.3-3 3-3h1" }),
    React__namespace.createElement("rect", { width: 8, height: 8, x: 2, y: 14, rx: 2 })));

module.exports = SvgFeatherReplace;
