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

const SvgFeatherSendToBack = (props) => (React__namespace.createElement("svg", Object.assign({ xmlns: "http://www.w3.org/2000/svg", width: "1em", height: "1em", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: 2, strokeLinecap: "round", strokeLinejoin: "round" }, props),
    React__namespace.createElement("rect", { x: 14, y: 14, width: 8, height: 8, rx: 2 }),
    React__namespace.createElement("rect", { x: 2, y: 2, width: 8, height: 8, rx: 2 }),
    React__namespace.createElement("path", { d: "M7 14v1a2 2 0 0 0 2 2h1" }),
    React__namespace.createElement("path", { d: "M14 7h1a2 2 0 0 1 2 2v1" })));

module.exports = SvgFeatherSendToBack;
