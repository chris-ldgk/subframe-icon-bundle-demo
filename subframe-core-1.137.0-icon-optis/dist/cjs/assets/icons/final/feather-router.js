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

const SvgFeatherRouter = (props) => (React__namespace.createElement("svg", Object.assign({ xmlns: "http://www.w3.org/2000/svg", width: "1em", height: "1em", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: 2, strokeLinecap: "round", strokeLinejoin: "round" }, props),
    React__namespace.createElement("rect", { width: 20, height: 8, x: 2, y: 14, rx: 2 }),
    React__namespace.createElement("path", { d: "M6.01 18H6" }),
    React__namespace.createElement("path", { d: "M10.01 18H10" }),
    React__namespace.createElement("path", { d: "M15 10v4" }),
    React__namespace.createElement("path", { d: "M17.84 7.17a4 4 0 0 0-5.66 0" }),
    React__namespace.createElement("path", { d: "M20.66 4.34a8 8 0 0 0-11.31 0" })));

module.exports = SvgFeatherRouter;
