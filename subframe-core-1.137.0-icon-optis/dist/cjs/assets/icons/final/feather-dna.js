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

const SvgFeatherDna = (props) => (React__namespace.createElement("svg", Object.assign({ xmlns: "http://www.w3.org/2000/svg", width: "1em", height: "1em", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: 2, strokeLinecap: "round", strokeLinejoin: "round" }, props),
    React__namespace.createElement("path", { d: "M2 15c6.667-6 13.333 0 20-6" }),
    React__namespace.createElement("path", { d: "M9 22c1.798-1.998 2.518-3.995 2.807-5.993" }),
    React__namespace.createElement("path", { d: "M15 2c-1.798 1.998-2.518 3.995-2.807 5.993" }),
    React__namespace.createElement("path", { d: "m17 6-2.5-2.5" }),
    React__namespace.createElement("path", { d: "m14 8-1-1" }),
    React__namespace.createElement("path", { d: "m7 18 2.5 2.5" }),
    React__namespace.createElement("path", { d: "m3.5 14.5.5.5" }),
    React__namespace.createElement("path", { d: "m20 9 .5.5" }),
    React__namespace.createElement("path", { d: "m6.5 12.5 1 1" }),
    React__namespace.createElement("path", { d: "m16.5 10.5 1 1" }),
    React__namespace.createElement("path", { d: "m10 16 1.5 1.5" })));

module.exports = SvgFeatherDna;
