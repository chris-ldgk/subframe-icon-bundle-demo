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

const SvgFeatherSprayCan = (props) => (React__namespace.createElement("svg", Object.assign({ xmlns: "http://www.w3.org/2000/svg", width: "1em", height: "1em", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: 2, strokeLinecap: "round", strokeLinejoin: "round" }, props),
    React__namespace.createElement("path", { d: "M3 3h.01" }),
    React__namespace.createElement("path", { d: "M7 5h.01" }),
    React__namespace.createElement("path", { d: "M11 7h.01" }),
    React__namespace.createElement("path", { d: "M3 7h.01" }),
    React__namespace.createElement("path", { d: "M7 9h.01" }),
    React__namespace.createElement("path", { d: "M3 11h.01" }),
    React__namespace.createElement("rect", { width: 4, height: 4, x: 15, y: 5 }),
    React__namespace.createElement("path", { d: "m19 9 2 2v10c0 .6-.4 1-1 1h-6c-.6 0-1-.4-1-1V11l2-2" }),
    React__namespace.createElement("path", { d: "m13 14 8-2" }),
    React__namespace.createElement("path", { d: "m13 19 8-2" })));

module.exports = SvgFeatherSprayCan;
