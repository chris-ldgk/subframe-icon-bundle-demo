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

const SvgFeatherFileCog = (props) => (React__namespace.createElement("svg", Object.assign({ xmlns: "http://www.w3.org/2000/svg", width: "1em", height: "1em", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: 2, strokeLinecap: "round", strokeLinejoin: "round" }, props),
    React__namespace.createElement("circle", { cx: 6, cy: 13, r: 3 }),
    React__namespace.createElement("path", { d: "m9.7 14.4-.9-.3" }),
    React__namespace.createElement("path", { d: "m3.2 11.9-.9-.3" }),
    React__namespace.createElement("path", { d: "m4.6 16.7.3-.9" }),
    React__namespace.createElement("path", { d: "m7.6 16.7-.4-1" }),
    React__namespace.createElement("path", { d: "m4.8 10.3-.4-1" }),
    React__namespace.createElement("path", { d: "m2.3 14.6 1-.4" }),
    React__namespace.createElement("path", { d: "m8.7 11.8 1-.4" }),
    React__namespace.createElement("path", { d: "m7.4 9.3-.3.9" }),
    React__namespace.createElement("path", { d: "M14 2v6h6" }),
    React__namespace.createElement("path", { d: "M4 5.5V4a2 2 0 0 1 2-2h8.5L20 7.5V20a2 2 0 0 1-2 2H6a2 2 0 0 1-2-1.5" })));

module.exports = SvgFeatherFileCog;
