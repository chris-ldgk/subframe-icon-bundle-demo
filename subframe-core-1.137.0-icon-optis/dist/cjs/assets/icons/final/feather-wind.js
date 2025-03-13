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

const SvgFeatherWind = (props) => (React__namespace.createElement("svg", Object.assign({ xmlns: "http://www.w3.org/2000/svg", width: "1em", height: "1em", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: 2, strokeLinecap: "round", strokeLinejoin: "round" }, props),
    React__namespace.createElement("path", { d: "M17.7 7.7a2.5 2.5 0 1 1 1.8 4.3H2" }),
    React__namespace.createElement("path", { d: "M9.6 4.6A2 2 0 1 1 11 8H2" }),
    React__namespace.createElement("path", { d: "M12.6 19.4A2 2 0 1 0 14 16H2" })));

module.exports = SvgFeatherWind;
