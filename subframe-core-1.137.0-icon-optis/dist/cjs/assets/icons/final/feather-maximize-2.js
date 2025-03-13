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

const SvgFeatherMaximize2 = (props) => (React__namespace.createElement("svg", Object.assign({ xmlns: "http://www.w3.org/2000/svg", width: "1em", height: "1em", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: 2, strokeLinecap: "round", strokeLinejoin: "round" }, props),
    React__namespace.createElement("polyline", { points: "15 3 21 3 21 9" }),
    React__namespace.createElement("polyline", { points: "9 21 3 21 3 15" }),
    React__namespace.createElement("line", { x1: 21, x2: 14, y1: 3, y2: 10 }),
    React__namespace.createElement("line", { x1: 3, x2: 10, y1: 21, y2: 14 })));

module.exports = SvgFeatherMaximize2;
