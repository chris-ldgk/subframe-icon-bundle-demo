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

const SvgFeatherLaugh = (props) => (React__namespace.createElement("svg", Object.assign({ xmlns: "http://www.w3.org/2000/svg", width: "1em", height: "1em", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: 2, strokeLinecap: "round", strokeLinejoin: "round" }, props),
    React__namespace.createElement("circle", { cx: 12, cy: 12, r: 10 }),
    React__namespace.createElement("path", { d: "M18 13a6 6 0 0 1-6 5 6 6 0 0 1-6-5h12Z" }),
    React__namespace.createElement("line", { x1: 9, x2: 9.01, y1: 9, y2: 9 }),
    React__namespace.createElement("line", { x1: 15, x2: 15.01, y1: 9, y2: 9 })));

module.exports = SvgFeatherLaugh;
