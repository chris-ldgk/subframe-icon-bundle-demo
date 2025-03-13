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

const SvgFeatherCastle = (props) => (React__namespace.createElement("svg", Object.assign({ xmlns: "http://www.w3.org/2000/svg", width: "1em", height: "1em", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: 2, strokeLinecap: "round", strokeLinejoin: "round" }, props),
    React__namespace.createElement("path", { d: "M22 20v-9H2v9a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2Z" }),
    React__namespace.createElement("path", { d: "M18 11V4H6v7" }),
    React__namespace.createElement("path", { d: "M15 22v-4a3 3 0 0 0-3-3v0a3 3 0 0 0-3 3v4" }),
    React__namespace.createElement("path", { d: "M22 11V9" }),
    React__namespace.createElement("path", { d: "M2 11V9" }),
    React__namespace.createElement("path", { d: "M6 4V2" }),
    React__namespace.createElement("path", { d: "M18 4V2" }),
    React__namespace.createElement("path", { d: "M10 4V2" }),
    React__namespace.createElement("path", { d: "M14 4V2" })));

module.exports = SvgFeatherCastle;
