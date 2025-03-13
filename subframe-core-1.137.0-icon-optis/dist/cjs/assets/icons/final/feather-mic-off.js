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

const SvgFeatherMicOff = (props) => (React__namespace.createElement("svg", Object.assign({ xmlns: "http://www.w3.org/2000/svg", width: "1em", height: "1em", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: 2, strokeLinecap: "round", strokeLinejoin: "round" }, props),
    React__namespace.createElement("line", { x1: 2, x2: 22, y1: 2, y2: 22 }),
    React__namespace.createElement("path", { d: "M18.89 13.23A7.12 7.12 0 0 0 19 12v-2" }),
    React__namespace.createElement("path", { d: "M5 10v2a7 7 0 0 0 12 5" }),
    React__namespace.createElement("path", { d: "M15 9.34V5a3 3 0 0 0-5.68-1.33" }),
    React__namespace.createElement("path", { d: "M9 9v3a3 3 0 0 0 5.12 2.12" }),
    React__namespace.createElement("line", { x1: 12, x2: 12, y1: 19, y2: 22 })));

module.exports = SvgFeatherMicOff;
