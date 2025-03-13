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

const SvgFeatherMinimize2 = (props) => (React__namespace.createElement("svg", Object.assign({ xmlns: "http://www.w3.org/2000/svg", width: "1em", height: "1em", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: 2, strokeLinecap: "round", strokeLinejoin: "round" }, props),
    React__namespace.createElement("polyline", { points: "4 14 10 14 10 20" }),
    React__namespace.createElement("polyline", { points: "20 10 14 10 14 4" }),
    React__namespace.createElement("line", { x1: 14, x2: 21, y1: 10, y2: 3 }),
    React__namespace.createElement("line", { x1: 3, x2: 10, y1: 21, y2: 14 })));

module.exports = SvgFeatherMinimize2;
