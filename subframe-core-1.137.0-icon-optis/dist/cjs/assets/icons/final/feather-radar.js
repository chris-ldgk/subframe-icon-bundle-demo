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

const SvgFeatherRadar = (props) => (React__namespace.createElement("svg", Object.assign({ xmlns: "http://www.w3.org/2000/svg", width: "1em", height: "1em", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: 2, strokeLinecap: "round", strokeLinejoin: "round" }, props),
    React__namespace.createElement("path", { d: "M19.07 4.93A10 10 0 0 0 6.99 3.34" }),
    React__namespace.createElement("path", { d: "M4 6h.01" }),
    React__namespace.createElement("path", { d: "M2.29 9.62A10 10 0 1 0 21.31 8.35" }),
    React__namespace.createElement("path", { d: "M16.24 7.76A6 6 0 1 0 8.23 16.67" }),
    React__namespace.createElement("path", { d: "M12 18h.01" }),
    React__namespace.createElement("path", { d: "M17.99 11.66A6 6 0 0 1 15.77 16.67" }),
    React__namespace.createElement("circle", { cx: 12, cy: 12, r: 2 }),
    React__namespace.createElement("path", { d: "m13.41 10.59 5.66-5.66" })));

module.exports = SvgFeatherRadar;
