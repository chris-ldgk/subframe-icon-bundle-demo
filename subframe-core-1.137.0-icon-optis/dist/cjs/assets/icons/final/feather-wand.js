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

const SvgFeatherWand = (props) => (React__namespace.createElement("svg", Object.assign({ xmlns: "http://www.w3.org/2000/svg", width: "1em", height: "1em", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: 2, strokeLinecap: "round", strokeLinejoin: "round" }, props),
    React__namespace.createElement("path", { d: "M15 4V2" }),
    React__namespace.createElement("path", { d: "M15 16v-2" }),
    React__namespace.createElement("path", { d: "M8 9h2" }),
    React__namespace.createElement("path", { d: "M20 9h2" }),
    React__namespace.createElement("path", { d: "M17.8 11.8 19 13" }),
    React__namespace.createElement("path", { d: "M15 9h0" }),
    React__namespace.createElement("path", { d: "M17.8 6.2 19 5" }),
    React__namespace.createElement("path", { d: "m3 21 9-9" }),
    React__namespace.createElement("path", { d: "M12.2 6.2 11 5" })));

module.exports = SvgFeatherWand;
