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

const SvgFeatherGrab = (props) => (React__namespace.createElement("svg", Object.assign({ xmlns: "http://www.w3.org/2000/svg", width: "1em", height: "1em", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: 2, strokeLinecap: "round", strokeLinejoin: "round" }, props),
    React__namespace.createElement("path", { d: "M18 11.5V9a2 2 0 0 0-2-2v0a2 2 0 0 0-2 2v1.4" }),
    React__namespace.createElement("path", { d: "M14 10V8a2 2 0 0 0-2-2v0a2 2 0 0 0-2 2v2" }),
    React__namespace.createElement("path", { d: "M10 9.9V9a2 2 0 0 0-2-2v0a2 2 0 0 0-2 2v5" }),
    React__namespace.createElement("path", { d: "M6 14v0a2 2 0 0 0-2-2v0a2 2 0 0 0-2 2v0" }),
    React__namespace.createElement("path", { d: "M18 11v0a2 2 0 1 1 4 0v3a8 8 0 0 1-8 8h-4a8 8 0 0 1-8-8 2 2 0 1 1 4 0" })));

module.exports = SvgFeatherGrab;
