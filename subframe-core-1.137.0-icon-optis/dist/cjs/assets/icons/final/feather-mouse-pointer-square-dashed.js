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

const SvgFeatherMousePointerSquareDashed = (props) => (React__namespace.createElement("svg", Object.assign({ xmlns: "http://www.w3.org/2000/svg", width: "1em", height: "1em", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: 2, strokeLinecap: "round", strokeLinejoin: "round" }, props),
    React__namespace.createElement("path", { d: "M5 3a2 2 0 0 0-2 2" }),
    React__namespace.createElement("path", { d: "M19 3a2 2 0 0 1 2 2" }),
    React__namespace.createElement("path", { d: "m12 12 4 10 1.7-4.3L22 16Z" }),
    React__namespace.createElement("path", { d: "M5 21a2 2 0 0 1-2-2" }),
    React__namespace.createElement("path", { d: "M9 3h1" }),
    React__namespace.createElement("path", { d: "M9 21h2" }),
    React__namespace.createElement("path", { d: "M14 3h1" }),
    React__namespace.createElement("path", { d: "M3 9v1" }),
    React__namespace.createElement("path", { d: "M21 9v2" }),
    React__namespace.createElement("path", { d: "M3 14v1" })));

module.exports = SvgFeatherMousePointerSquareDashed;
