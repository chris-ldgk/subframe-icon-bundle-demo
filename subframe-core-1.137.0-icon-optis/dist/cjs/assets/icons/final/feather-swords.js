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

const SvgFeatherSwords = (props) => (React__namespace.createElement("svg", Object.assign({ xmlns: "http://www.w3.org/2000/svg", width: "1em", height: "1em", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: 2, strokeLinecap: "round", strokeLinejoin: "round" }, props),
    React__namespace.createElement("polyline", { points: "14.5 17.5 3 6 3 3 6 3 17.5 14.5" }),
    React__namespace.createElement("line", { x1: 13, x2: 19, y1: 19, y2: 13 }),
    React__namespace.createElement("line", { x1: 16, x2: 20, y1: 16, y2: 20 }),
    React__namespace.createElement("line", { x1: 19, x2: 21, y1: 21, y2: 19 }),
    React__namespace.createElement("polyline", { points: "14.5 6.5 18 3 21 3 21 6 17.5 9.5" }),
    React__namespace.createElement("line", { x1: 5, x2: 9, y1: 14, y2: 18 }),
    React__namespace.createElement("line", { x1: 7, x2: 4, y1: 17, y2: 20 }),
    React__namespace.createElement("line", { x1: 3, x2: 5, y1: 19, y2: 21 })));

module.exports = SvgFeatherSwords;
