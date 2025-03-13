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

const SvgFeatherRadioTower = (props) => (React__namespace.createElement("svg", Object.assign({ xmlns: "http://www.w3.org/2000/svg", width: "1em", height: "1em", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: 2, strokeLinecap: "round", strokeLinejoin: "round" }, props),
    React__namespace.createElement("path", { d: "M4.9 16.1C1 12.2 1 5.8 4.9 1.9" }),
    React__namespace.createElement("path", { d: "M7.8 4.7a6.14 6.14 0 0 0-.8 7.5" }),
    React__namespace.createElement("circle", { cx: 12, cy: 9, r: 2 }),
    React__namespace.createElement("path", { d: "M16.2 4.8c2 2 2.26 5.11.8 7.47" }),
    React__namespace.createElement("path", { d: "M19.1 1.9a9.96 9.96 0 0 1 0 14.1" }),
    React__namespace.createElement("path", { d: "M9.5 18h5" }),
    React__namespace.createElement("path", { d: "m8 22 4-11 4 11" })));

module.exports = SvgFeatherRadioTower;
