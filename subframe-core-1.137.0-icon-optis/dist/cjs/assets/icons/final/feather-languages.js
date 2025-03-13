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

const SvgFeatherLanguages = (props) => (React__namespace.createElement("svg", Object.assign({ xmlns: "http://www.w3.org/2000/svg", width: "1em", height: "1em", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: 2, strokeLinecap: "round", strokeLinejoin: "round" }, props),
    React__namespace.createElement("path", { d: "m5 8 6 6" }),
    React__namespace.createElement("path", { d: "m4 14 6-6 2-3" }),
    React__namespace.createElement("path", { d: "M2 5h12" }),
    React__namespace.createElement("path", { d: "M7 2h1" }),
    React__namespace.createElement("path", { d: "m22 22-5-10-5 10" }),
    React__namespace.createElement("path", { d: "M14 18h6" })));

module.exports = SvgFeatherLanguages;
