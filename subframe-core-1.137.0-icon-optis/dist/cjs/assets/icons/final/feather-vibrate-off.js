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

const SvgFeatherVibrateOff = (props) => (React__namespace.createElement("svg", Object.assign({ xmlns: "http://www.w3.org/2000/svg", width: "1em", height: "1em", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: 2, strokeLinecap: "round", strokeLinejoin: "round" }, props),
    React__namespace.createElement("path", { d: "m2 8 2 2-2 2 2 2-2 2" }),
    React__namespace.createElement("path", { d: "m22 8-2 2 2 2-2 2 2 2" }),
    React__namespace.createElement("path", { d: "M8 8v10c0 .55.45 1 1 1h6c.55 0 1-.45 1-1v-2" }),
    React__namespace.createElement("path", { d: "M16 10.34V6c0-.55-.45-1-1-1h-4.34" }),
    React__namespace.createElement("line", { x1: 2, x2: 22, y1: 2, y2: 22 })));

module.exports = SvgFeatherVibrateOff;
