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

const SvgFeatherIndianRupee = (props) => (React__namespace.createElement("svg", Object.assign({ xmlns: "http://www.w3.org/2000/svg", width: "1em", height: "1em", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: 2, strokeLinecap: "round", strokeLinejoin: "round" }, props),
    React__namespace.createElement("path", { d: "M6 3h12" }),
    React__namespace.createElement("path", { d: "M6 8h12" }),
    React__namespace.createElement("path", { d: "m6 13 8.5 8" }),
    React__namespace.createElement("path", { d: "M6 13h3" }),
    React__namespace.createElement("path", { d: "M9 13c6.667 0 6.667-10 0-10" })));

module.exports = SvgFeatherIndianRupee;
