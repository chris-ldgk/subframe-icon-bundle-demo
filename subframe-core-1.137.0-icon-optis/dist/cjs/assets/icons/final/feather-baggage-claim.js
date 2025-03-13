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

const SvgFeatherBaggageClaim = (props) => (React__namespace.createElement("svg", Object.assign({ xmlns: "http://www.w3.org/2000/svg", width: "1em", height: "1em", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: 2, strokeLinecap: "round", strokeLinejoin: "round" }, props),
    React__namespace.createElement("path", { d: "M22 18H6a2 2 0 0 1-2-2V7a2 2 0 0 0-2-2" }),
    React__namespace.createElement("path", { d: "M17 14V4a2 2 0 0 0-2-2h-1a2 2 0 0 0-2 2v10" }),
    React__namespace.createElement("rect", { width: 13, height: 8, x: 8, y: 6, rx: 1 }),
    React__namespace.createElement("circle", { cx: 18, cy: 20, r: 2 }),
    React__namespace.createElement("circle", { cx: 9, cy: 20, r: 2 })));

module.exports = SvgFeatherBaggageClaim;
