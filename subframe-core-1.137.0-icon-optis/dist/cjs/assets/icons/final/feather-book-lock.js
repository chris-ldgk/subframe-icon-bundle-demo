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

const SvgFeatherBookLock = (props) => (React__namespace.createElement("svg", Object.assign({ xmlns: "http://www.w3.org/2000/svg", width: "1em", height: "1em", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: 2, strokeLinecap: "round", strokeLinejoin: "round" }, props),
    React__namespace.createElement("path", { d: "M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H10" }),
    React__namespace.createElement("path", { d: "M20 15v7H6.5a2.5 2.5 0 0 1 0-5H20" }),
    React__namespace.createElement("rect", { width: 8, height: 5, x: 12, y: 6, rx: 1 }),
    React__namespace.createElement("path", { d: "M18 6V4a2 2 0 1 0-4 0v2" })));

module.exports = SvgFeatherBookLock;
