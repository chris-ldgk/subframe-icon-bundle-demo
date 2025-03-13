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

const SvgFeatherSatelliteDish = (props) => (React__namespace.createElement("svg", Object.assign({ xmlns: "http://www.w3.org/2000/svg", width: "1em", height: "1em", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: 2, strokeLinecap: "round", strokeLinejoin: "round" }, props),
    React__namespace.createElement("path", { d: "M4 10a7.31 7.31 0 0 0 10 10Z" }),
    React__namespace.createElement("path", { d: "m9 15 3-3" }),
    React__namespace.createElement("path", { d: "M17 13a6 6 0 0 0-6-6" }),
    React__namespace.createElement("path", { d: "M21 13A10 10 0 0 0 11 3" })));

module.exports = SvgFeatherSatelliteDish;
