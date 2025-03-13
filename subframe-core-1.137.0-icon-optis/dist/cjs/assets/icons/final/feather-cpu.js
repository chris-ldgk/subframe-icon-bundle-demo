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

const SvgFeatherCpu = (props) => (React__namespace.createElement("svg", Object.assign({ xmlns: "http://www.w3.org/2000/svg", width: "1em", height: "1em", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: 2, strokeLinecap: "round", strokeLinejoin: "round" }, props),
    React__namespace.createElement("rect", { x: 4, y: 4, width: 16, height: 16, rx: 2 }),
    React__namespace.createElement("rect", { x: 9, y: 9, width: 6, height: 6 }),
    React__namespace.createElement("path", { d: "M15 2v2" }),
    React__namespace.createElement("path", { d: "M15 20v2" }),
    React__namespace.createElement("path", { d: "M2 15h2" }),
    React__namespace.createElement("path", { d: "M2 9h2" }),
    React__namespace.createElement("path", { d: "M20 15h2" }),
    React__namespace.createElement("path", { d: "M20 9h2" }),
    React__namespace.createElement("path", { d: "M9 2v2" }),
    React__namespace.createElement("path", { d: "M9 20v2" })));

module.exports = SvgFeatherCpu;
