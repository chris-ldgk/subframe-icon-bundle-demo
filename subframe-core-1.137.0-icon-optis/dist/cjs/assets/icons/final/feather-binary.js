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

const SvgFeatherBinary = (props) => (React__namespace.createElement("svg", Object.assign({ xmlns: "http://www.w3.org/2000/svg", width: "1em", height: "1em", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: 2, strokeLinecap: "round", strokeLinejoin: "round" }, props),
    React__namespace.createElement("rect", { x: 14, y: 14, width: 4, height: 6, rx: 2 }),
    React__namespace.createElement("rect", { x: 6, y: 4, width: 4, height: 6, rx: 2 }),
    React__namespace.createElement("path", { d: "M6 20h4" }),
    React__namespace.createElement("path", { d: "M14 10h4" }),
    React__namespace.createElement("path", { d: "M6 14h2v6" }),
    React__namespace.createElement("path", { d: "M14 4h2v6" })));

module.exports = SvgFeatherBinary;
