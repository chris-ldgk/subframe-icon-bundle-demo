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

const SvgFeatherServer = (props) => (React__namespace.createElement("svg", Object.assign({ xmlns: "http://www.w3.org/2000/svg", width: "1em", height: "1em", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: 2, strokeLinecap: "round", strokeLinejoin: "round" }, props),
    React__namespace.createElement("rect", { width: 20, height: 8, x: 2, y: 2, rx: 2, ry: 2 }),
    React__namespace.createElement("rect", { width: 20, height: 8, x: 2, y: 14, rx: 2, ry: 2 }),
    React__namespace.createElement("line", { x1: 6, x2: 6.01, y1: 6, y2: 6 }),
    React__namespace.createElement("line", { x1: 6, x2: 6.01, y1: 18, y2: 18 })));

module.exports = SvgFeatherServer;
