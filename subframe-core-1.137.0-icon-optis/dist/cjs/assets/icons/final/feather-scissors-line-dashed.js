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

const SvgFeatherScissorsLineDashed = (props) => (React__namespace.createElement("svg", Object.assign({ xmlns: "http://www.w3.org/2000/svg", width: "1em", height: "1em", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: 2, strokeLinecap: "round", strokeLinejoin: "round" }, props),
    React__namespace.createElement("path", { d: "M5.42 9.42 8 12" }),
    React__namespace.createElement("circle", { cx: 4, cy: 8, r: 2 }),
    React__namespace.createElement("path", { d: "m14 6-8.58 8.58" }),
    React__namespace.createElement("circle", { cx: 4, cy: 16, r: 2 }),
    React__namespace.createElement("path", { d: "M10.8 14.8 14 18" }),
    React__namespace.createElement("path", { d: "M16 12h-2" }),
    React__namespace.createElement("path", { d: "M22 12h-2" })));

module.exports = SvgFeatherScissorsLineDashed;
