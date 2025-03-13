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

const SvgFeatherGamepad = (props) => (React__namespace.createElement("svg", Object.assign({ xmlns: "http://www.w3.org/2000/svg", width: "1em", height: "1em", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: 2, strokeLinecap: "round", strokeLinejoin: "round" }, props),
    React__namespace.createElement("line", { x1: 6, x2: 10, y1: 12, y2: 12 }),
    React__namespace.createElement("line", { x1: 8, x2: 8, y1: 10, y2: 14 }),
    React__namespace.createElement("line", { x1: 15, x2: 15.01, y1: 13, y2: 13 }),
    React__namespace.createElement("line", { x1: 18, x2: 18.01, y1: 11, y2: 11 }),
    React__namespace.createElement("rect", { width: 20, height: 12, x: 2, y: 6, rx: 2 })));

module.exports = SvgFeatherGamepad;
