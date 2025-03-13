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

const SvgFeatherSlidersHorizontal = (props) => (React__namespace.createElement("svg", Object.assign({ xmlns: "http://www.w3.org/2000/svg", width: "1em", height: "1em", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: 2, strokeLinecap: "round", strokeLinejoin: "round" }, props),
    React__namespace.createElement("line", { x1: 21, x2: 14, y1: 4, y2: 4 }),
    React__namespace.createElement("line", { x1: 10, x2: 3, y1: 4, y2: 4 }),
    React__namespace.createElement("line", { x1: 21, x2: 12, y1: 12, y2: 12 }),
    React__namespace.createElement("line", { x1: 8, x2: 3, y1: 12, y2: 12 }),
    React__namespace.createElement("line", { x1: 21, x2: 16, y1: 20, y2: 20 }),
    React__namespace.createElement("line", { x1: 12, x2: 3, y1: 20, y2: 20 }),
    React__namespace.createElement("line", { x1: 14, x2: 14, y1: 2, y2: 6 }),
    React__namespace.createElement("line", { x1: 8, x2: 8, y1: 10, y2: 14 }),
    React__namespace.createElement("line", { x1: 16, x2: 16, y1: 18, y2: 22 })));

module.exports = SvgFeatherSlidersHorizontal;
