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

const SvgFeatherSplitSquareVertical = (props) => (React__namespace.createElement("svg", Object.assign({ xmlns: "http://www.w3.org/2000/svg", width: "1em", height: "1em", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: 2, strokeLinecap: "round", strokeLinejoin: "round" }, props),
    React__namespace.createElement("path", { d: "M5 8V5c0-1 1-2 2-2h10c1 0 2 1 2 2v3" }),
    React__namespace.createElement("path", { d: "M19 16v3c0 1-1 2-2 2H7c-1 0-2-1-2-2v-3" }),
    React__namespace.createElement("line", { x1: 4, x2: 20, y1: 12, y2: 12 })));

module.exports = SvgFeatherSplitSquareVertical;
