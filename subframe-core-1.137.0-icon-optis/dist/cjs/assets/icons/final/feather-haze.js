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

const SvgFeatherHaze = (props) => (React__namespace.createElement("svg", Object.assign({ xmlns: "http://www.w3.org/2000/svg", width: "1em", height: "1em", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: 2, strokeLinecap: "round", strokeLinejoin: "round" }, props),
    React__namespace.createElement("path", { d: "m5.2 6.2 1.4 1.4" }),
    React__namespace.createElement("path", { d: "M2 13h2" }),
    React__namespace.createElement("path", { d: "M20 13h2" }),
    React__namespace.createElement("path", { d: "m17.4 7.6 1.4-1.4" }),
    React__namespace.createElement("path", { d: "M22 17H2" }),
    React__namespace.createElement("path", { d: "M22 21H2" }),
    React__namespace.createElement("path", { d: "M16 13a4 4 0 0 0-8 0" }),
    React__namespace.createElement("path", { d: "M12 5V2.5" })));

module.exports = SvgFeatherHaze;
