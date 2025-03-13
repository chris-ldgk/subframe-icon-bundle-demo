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

const SvgFeatherServerCog = (props) => (React__namespace.createElement("svg", Object.assign({ xmlns: "http://www.w3.org/2000/svg", width: "1em", height: "1em", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: 2, strokeLinecap: "round", strokeLinejoin: "round" }, props),
    React__namespace.createElement("circle", { cx: 12, cy: 12, r: 3 }),
    React__namespace.createElement("path", { d: "M4.5 10H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v4a2 2 0 0 1-2 2h-.5" }),
    React__namespace.createElement("path", { d: "M4.5 14H4a2 2 0 0 0-2 2v4a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-4a2 2 0 0 0-2-2h-.5" }),
    React__namespace.createElement("path", { d: "M6 6h.01" }),
    React__namespace.createElement("path", { d: "M6 18h.01" }),
    React__namespace.createElement("path", { d: "m15.7 13.4-.9-.3" }),
    React__namespace.createElement("path", { d: "m9.2 10.9-.9-.3" }),
    React__namespace.createElement("path", { d: "m10.6 15.7.3-.9" }),
    React__namespace.createElement("path", { d: "m13.6 15.7-.4-1" }),
    React__namespace.createElement("path", { d: "m10.8 9.3-.4-1" }),
    React__namespace.createElement("path", { d: "m8.3 13.6 1-.4" }),
    React__namespace.createElement("path", { d: "m14.7 10.8 1-.4" }),
    React__namespace.createElement("path", { d: "m13.4 8.3-.3.9" })));

module.exports = SvgFeatherServerCog;
