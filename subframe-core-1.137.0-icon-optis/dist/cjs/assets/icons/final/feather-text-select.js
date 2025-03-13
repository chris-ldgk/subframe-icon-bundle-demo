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

const SvgFeatherTextSelect = (props) => (React__namespace.createElement("svg", Object.assign({ xmlns: "http://www.w3.org/2000/svg", width: "1em", height: "1em", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: 2, strokeLinecap: "round", strokeLinejoin: "round" }, props),
    React__namespace.createElement("path", { d: "M5 3a2 2 0 0 0-2 2" }),
    React__namespace.createElement("path", { d: "M19 3a2 2 0 0 1 2 2" }),
    React__namespace.createElement("path", { d: "M21 19a2 2 0 0 1-2 2" }),
    React__namespace.createElement("path", { d: "M5 21a2 2 0 0 1-2-2" }),
    React__namespace.createElement("path", { d: "M9 3h1" }),
    React__namespace.createElement("path", { d: "M9 21h1" }),
    React__namespace.createElement("path", { d: "M14 3h1" }),
    React__namespace.createElement("path", { d: "M14 21h1" }),
    React__namespace.createElement("path", { d: "M3 9v1" }),
    React__namespace.createElement("path", { d: "M21 9v1" }),
    React__namespace.createElement("path", { d: "M3 14v1" }),
    React__namespace.createElement("path", { d: "M21 14v1" }),
    React__namespace.createElement("line", { x1: 7, x2: 15, y1: 8, y2: 8 }),
    React__namespace.createElement("line", { x1: 7, x2: 17, y1: 12, y2: 12 }),
    React__namespace.createElement("line", { x1: 7, x2: 13, y1: 16, y2: 16 })));

module.exports = SvgFeatherTextSelect;
