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

const SvgFeatherShowerHead = (props) => (React__namespace.createElement("svg", Object.assign({ xmlns: "http://www.w3.org/2000/svg", width: "1em", height: "1em", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: 2, strokeLinecap: "round", strokeLinejoin: "round" }, props),
    React__namespace.createElement("path", { d: "m4 4 2.5 2.5" }),
    React__namespace.createElement("path", { d: "M13.5 6.5a4.95 4.95 0 0 0-7 7" }),
    React__namespace.createElement("path", { d: "M15 5 5 15" }),
    React__namespace.createElement("path", { d: "M14 17v.01" }),
    React__namespace.createElement("path", { d: "M10 16v.01" }),
    React__namespace.createElement("path", { d: "M13 13v.01" }),
    React__namespace.createElement("path", { d: "M16 10v.01" }),
    React__namespace.createElement("path", { d: "M11 20v.01" }),
    React__namespace.createElement("path", { d: "M17 14v.01" }),
    React__namespace.createElement("path", { d: "M20 11v.01" })));

module.exports = SvgFeatherShowerHead;
