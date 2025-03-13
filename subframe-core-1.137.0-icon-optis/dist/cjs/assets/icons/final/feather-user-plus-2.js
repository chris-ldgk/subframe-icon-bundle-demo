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

const SvgFeatherUserPlus2 = (props) => (React__namespace.createElement("svg", Object.assign({ xmlns: "http://www.w3.org/2000/svg", width: "1em", height: "1em", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: 2, strokeLinecap: "round", strokeLinejoin: "round" }, props),
    React__namespace.createElement("path", { d: "M14 19a6 6 0 0 0-12 0" }),
    React__namespace.createElement("circle", { cx: 8, cy: 9, r: 4 }),
    React__namespace.createElement("line", { x1: 19, x2: 19, y1: 8, y2: 14 }),
    React__namespace.createElement("line", { x1: 22, x2: 16, y1: 11, y2: 11 })));

module.exports = SvgFeatherUserPlus2;
