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

const SvgFeatherArrowUpAZ = (props) => (React__namespace.createElement("svg", Object.assign({ xmlns: "http://www.w3.org/2000/svg", width: "1em", height: "1em", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: 2, strokeLinecap: "round", strokeLinejoin: "round" }, props),
    React__namespace.createElement("path", { d: "m3 8 4-4 4 4" }),
    React__namespace.createElement("path", { d: "M7 4v16" }),
    React__namespace.createElement("path", { d: "M20 8h-5" }),
    React__namespace.createElement("path", { d: "M15 10V6.5a2.5 2.5 0 0 1 5 0V10" }),
    React__namespace.createElement("path", { d: "M15 14h5l-5 6h5" })));

module.exports = SvgFeatherArrowUpAZ;
