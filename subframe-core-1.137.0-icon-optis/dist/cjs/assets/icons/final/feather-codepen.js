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

const SvgFeatherCodepen = (props) => (React__namespace.createElement("svg", Object.assign({ xmlns: "http://www.w3.org/2000/svg", width: "1em", height: "1em", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: 2, strokeLinecap: "round", strokeLinejoin: "round" }, props),
    React__namespace.createElement("polygon", { points: "12 2 22 8.5 22 15.5 12 22 2 15.5 2 8.5 12 2" }),
    React__namespace.createElement("line", { x1: 12, x2: 12, y1: 22, y2: 15.5 }),
    React__namespace.createElement("polyline", { points: "22 8.5 12 15.5 2 8.5" }),
    React__namespace.createElement("polyline", { points: "2 15.5 12 8.5 22 15.5" }),
    React__namespace.createElement("line", { x1: 12, x2: 12, y1: 2, y2: 8.5 })));

module.exports = SvgFeatherCodepen;
