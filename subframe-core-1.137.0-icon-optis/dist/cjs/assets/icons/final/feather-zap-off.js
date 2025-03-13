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

const SvgFeatherZapOff = (props) => (React__namespace.createElement("svg", Object.assign({ xmlns: "http://www.w3.org/2000/svg", width: "1em", height: "1em", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: 2, strokeLinecap: "round", strokeLinejoin: "round" }, props),
    React__namespace.createElement("polyline", { points: "12.41 6.75 13 2 10.57 4.92" }),
    React__namespace.createElement("polyline", { points: "18.57 12.91 21 10 15.66 10" }),
    React__namespace.createElement("polyline", { points: "8 8 3 14 12 14 11 22 16 16" }),
    React__namespace.createElement("line", { x1: 2, x2: 22, y1: 2, y2: 22 })));

module.exports = SvgFeatherZapOff;
