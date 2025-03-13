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

const SvgFeatherBatteryFull = (props) => (React__namespace.createElement("svg", Object.assign({ xmlns: "http://www.w3.org/2000/svg", width: "1em", height: "1em", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: 2, strokeLinecap: "round", strokeLinejoin: "round" }, props),
    React__namespace.createElement("rect", { width: 16, height: 10, x: 2, y: 7, rx: 2, ry: 2 }),
    React__namespace.createElement("line", { x1: 22, x2: 22, y1: 11, y2: 13 }),
    React__namespace.createElement("line", { x1: 6, x2: 6, y1: 11, y2: 13 }),
    React__namespace.createElement("line", { x1: 10, x2: 10, y1: 11, y2: 13 }),
    React__namespace.createElement("line", { x1: 14, x2: 14, y1: 11, y2: 13 })));

module.exports = SvgFeatherBatteryFull;
