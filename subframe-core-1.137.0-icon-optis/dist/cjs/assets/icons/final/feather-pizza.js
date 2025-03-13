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

const SvgFeatherPizza = (props) => (React__namespace.createElement("svg", Object.assign({ xmlns: "http://www.w3.org/2000/svg", width: "1em", height: "1em", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: 2, strokeLinecap: "round", strokeLinejoin: "round" }, props),
    React__namespace.createElement("path", { d: "M15 11h.01" }),
    React__namespace.createElement("path", { d: "M11 15h.01" }),
    React__namespace.createElement("path", { d: "M16 16h.01" }),
    React__namespace.createElement("path", { d: "m2 16 20 6-6-20A20 20 0 0 0 2 16" }),
    React__namespace.createElement("path", { d: "M5.71 17.11a17.04 17.04 0 0 1 11.4-11.4" })));

module.exports = SvgFeatherPizza;
