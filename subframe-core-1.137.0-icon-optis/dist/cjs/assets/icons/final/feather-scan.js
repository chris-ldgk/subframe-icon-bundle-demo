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

const SvgFeatherScan = (props) => (React__namespace.createElement("svg", Object.assign({ xmlns: "http://www.w3.org/2000/svg", width: "1em", height: "1em", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: 2, strokeLinecap: "round", strokeLinejoin: "round" }, props),
    React__namespace.createElement("path", { d: "M3 7V5a2 2 0 0 1 2-2h2" }),
    React__namespace.createElement("path", { d: "M17 3h2a2 2 0 0 1 2 2v2" }),
    React__namespace.createElement("path", { d: "M21 17v2a2 2 0 0 1-2 2h-2" }),
    React__namespace.createElement("path", { d: "M7 21H5a2 2 0 0 1-2-2v-2" })));

module.exports = SvgFeatherScan;
