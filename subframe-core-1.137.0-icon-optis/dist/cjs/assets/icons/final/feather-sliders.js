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

const SvgFeatherSliders = (props) => (React__namespace.createElement("svg", Object.assign({ xmlns: "http://www.w3.org/2000/svg", width: "1em", height: "1em", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: 2, strokeLinecap: "round", strokeLinejoin: "round" }, props),
    React__namespace.createElement("line", { x1: 4, x2: 4, y1: 21, y2: 14 }),
    React__namespace.createElement("line", { x1: 4, x2: 4, y1: 10, y2: 3 }),
    React__namespace.createElement("line", { x1: 12, x2: 12, y1: 21, y2: 12 }),
    React__namespace.createElement("line", { x1: 12, x2: 12, y1: 8, y2: 3 }),
    React__namespace.createElement("line", { x1: 20, x2: 20, y1: 21, y2: 16 }),
    React__namespace.createElement("line", { x1: 20, x2: 20, y1: 12, y2: 3 }),
    React__namespace.createElement("line", { x1: 2, x2: 6, y1: 14, y2: 14 }),
    React__namespace.createElement("line", { x1: 10, x2: 14, y1: 8, y2: 8 }),
    React__namespace.createElement("line", { x1: 18, x2: 22, y1: 16, y2: 16 })));

module.exports = SvgFeatherSliders;
