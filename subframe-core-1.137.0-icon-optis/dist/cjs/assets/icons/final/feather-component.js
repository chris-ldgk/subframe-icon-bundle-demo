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

const SvgFeatherComponent = (props) => (React__namespace.createElement("svg", Object.assign({ xmlns: "http://www.w3.org/2000/svg", width: "1em", height: "1em", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: 2, strokeLinecap: "round", strokeLinejoin: "round" }, props),
    React__namespace.createElement("path", { d: "M5.5 8.5 9 12l-3.5 3.5L2 12l3.5-3.5Z" }),
    React__namespace.createElement("path", { d: "m12 2 3.5 3.5L12 9 8.5 5.5 12 2Z" }),
    React__namespace.createElement("path", { d: "M18.5 8.5 22 12l-3.5 3.5L15 12l3.5-3.5Z" }),
    React__namespace.createElement("path", { d: "m12 15 3.5 3.5L12 22l-3.5-3.5L12 15Z" })));

module.exports = SvgFeatherComponent;
