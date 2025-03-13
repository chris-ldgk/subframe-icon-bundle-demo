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

const SvgFeatherSunSnow = (props) => (React__namespace.createElement("svg", Object.assign({ xmlns: "http://www.w3.org/2000/svg", width: "1em", height: "1em", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: 2, strokeLinecap: "round", strokeLinejoin: "round" }, props),
    React__namespace.createElement("path", { d: "M10 9a3 3 0 1 0 0 6" }),
    React__namespace.createElement("path", { d: "M2 12h1" }),
    React__namespace.createElement("path", { d: "M14 21V3" }),
    React__namespace.createElement("path", { d: "M10 4V3" }),
    React__namespace.createElement("path", { d: "M10 21v-1" }),
    React__namespace.createElement("path", { d: "m3.64 18.36.7-.7" }),
    React__namespace.createElement("path", { d: "m4.34 6.34-.7-.7" }),
    React__namespace.createElement("path", { d: "M14 12h8" }),
    React__namespace.createElement("path", { d: "m17 4-3 3" }),
    React__namespace.createElement("path", { d: "m14 17 3 3" }),
    React__namespace.createElement("path", { d: "m21 15-3-3 3-3" })));

module.exports = SvgFeatherSunSnow;
