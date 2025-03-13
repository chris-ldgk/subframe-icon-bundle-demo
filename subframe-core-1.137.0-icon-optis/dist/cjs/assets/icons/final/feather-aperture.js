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

const SvgFeatherAperture = (props) => (React__namespace.createElement("svg", Object.assign({ xmlns: "http://www.w3.org/2000/svg", width: "1em", height: "1em", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: 2, strokeLinecap: "round", strokeLinejoin: "round" }, props),
    React__namespace.createElement("circle", { cx: 12, cy: 12, r: 10 }),
    React__namespace.createElement("line", { x1: 14.31, x2: 20.05, y1: 8, y2: 17.94 }),
    React__namespace.createElement("line", { x1: 9.69, x2: 21.17, y1: 8, y2: 8 }),
    React__namespace.createElement("line", { x1: 7.38, x2: 13.12, y1: 12, y2: 2.06 }),
    React__namespace.createElement("line", { x1: 9.69, x2: 3.95, y1: 16, y2: 6.06 }),
    React__namespace.createElement("line", { x1: 14.31, x2: 2.83, y1: 16, y2: 16 }),
    React__namespace.createElement("line", { x1: 16.62, x2: 10.88, y1: 12, y2: 21.94 })));

module.exports = SvgFeatherAperture;
