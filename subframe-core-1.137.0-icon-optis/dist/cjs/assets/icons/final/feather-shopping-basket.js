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

const SvgFeatherShoppingBasket = (props) => (React__namespace.createElement("svg", Object.assign({ xmlns: "http://www.w3.org/2000/svg", width: "1em", height: "1em", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: 2, strokeLinecap: "round", strokeLinejoin: "round" }, props),
    React__namespace.createElement("path", { d: "m5 11 4-7" }),
    React__namespace.createElement("path", { d: "m19 11-4-7" }),
    React__namespace.createElement("path", { d: "M2 11h20" }),
    React__namespace.createElement("path", { d: "m3.5 11 1.6 7.4a2 2 0 0 0 2 1.6h9.8c.9 0 1.8-.7 2-1.6l1.7-7.4" }),
    React__namespace.createElement("path", { d: "m9 11 1 9" }),
    React__namespace.createElement("path", { d: "M4.5 15.5h15" }),
    React__namespace.createElement("path", { d: "m15 11-1 9" })));

module.exports = SvgFeatherShoppingBasket;
