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

const SvgFeatherFlagOff = (props) => (React__namespace.createElement("svg", Object.assign({ xmlns: "http://www.w3.org/2000/svg", width: "1em", height: "1em", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: 2, strokeLinecap: "round", strokeLinejoin: "round" }, props),
    React__namespace.createElement("path", { d: "M8 2c3 0 5 2 8 2s4-1 4-1v11" }),
    React__namespace.createElement("path", { d: "M4 22V4" }),
    React__namespace.createElement("path", { d: "M4 15s1-1 4-1 5 2 8 2" }),
    React__namespace.createElement("line", { x1: 2, x2: 22, y1: 2, y2: 22 })));

module.exports = SvgFeatherFlagOff;
