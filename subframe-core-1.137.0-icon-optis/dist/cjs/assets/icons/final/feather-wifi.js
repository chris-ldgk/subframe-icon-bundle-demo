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

const SvgFeatherWifi = (props) => (React__namespace.createElement("svg", Object.assign({ xmlns: "http://www.w3.org/2000/svg", width: "1em", height: "1em", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: 2, strokeLinecap: "round", strokeLinejoin: "round" }, props),
    React__namespace.createElement("path", { d: "M5 13a10 10 0 0 1 14 0" }),
    React__namespace.createElement("path", { d: "M8.5 16.5a5 5 0 0 1 7 0" }),
    React__namespace.createElement("path", { d: "M2 8.82a15 15 0 0 1 20 0" }),
    React__namespace.createElement("line", { x1: 12, x2: 12.01, y1: 20, y2: 20 })));

module.exports = SvgFeatherWifi;
