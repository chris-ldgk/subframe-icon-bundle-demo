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

const SvgFeatherListEnd = (props) => (React__namespace.createElement("svg", Object.assign({ xmlns: "http://www.w3.org/2000/svg", width: "1em", height: "1em", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: 2, strokeLinecap: "round", strokeLinejoin: "round" }, props),
    React__namespace.createElement("path", { d: "M16 12H3" }),
    React__namespace.createElement("path", { d: "M16 6H3" }),
    React__namespace.createElement("path", { d: "M10 18H3" }),
    React__namespace.createElement("path", { d: "M21 6v10a2 2 0 0 1-2 2h-5" }),
    React__namespace.createElement("path", { d: "m16 16-2 2 2 2" })));

module.exports = SvgFeatherListEnd;
