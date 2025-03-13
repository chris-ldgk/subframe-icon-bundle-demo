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

const SvgFeatherDatabaseZap = (props) => (React__namespace.createElement("svg", Object.assign({ xmlns: "http://www.w3.org/2000/svg", width: "1em", height: "1em", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: 2, strokeLinecap: "round", strokeLinejoin: "round" }, props),
    React__namespace.createElement("ellipse", { cx: 12, cy: 5, rx: 9, ry: 3 }),
    React__namespace.createElement("path", { d: "M3 5V19A9 3 0 0 0 15 21.84" }),
    React__namespace.createElement("path", { d: "M21 5V8" }),
    React__namespace.createElement("path", { d: "M21 12L18 17H22L19 22" }),
    React__namespace.createElement("path", { d: "M3 12A9 3 0 0 0 14.59 14.87" })));

module.exports = SvgFeatherDatabaseZap;
