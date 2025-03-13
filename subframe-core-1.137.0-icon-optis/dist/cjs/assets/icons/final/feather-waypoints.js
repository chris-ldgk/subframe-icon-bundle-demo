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

const SvgFeatherWaypoints = (props) => (React__namespace.createElement("svg", Object.assign({ xmlns: "http://www.w3.org/2000/svg", width: "1em", height: "1em", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: 2, strokeLinecap: "round", strokeLinejoin: "round" }, props),
    React__namespace.createElement("circle", { cx: 12, cy: 4.5, r: 2.5 }),
    React__namespace.createElement("path", { d: "m10.2 6.3-3.9 3.9" }),
    React__namespace.createElement("circle", { cx: 4.5, cy: 12, r: 2.5 }),
    React__namespace.createElement("path", { d: "M7 12h10" }),
    React__namespace.createElement("circle", { cx: 19.5, cy: 12, r: 2.5 }),
    React__namespace.createElement("path", { d: "m13.8 17.7 3.9-3.9" }),
    React__namespace.createElement("circle", { cx: 12, cy: 19.5, r: 2.5 })));

module.exports = SvgFeatherWaypoints;
