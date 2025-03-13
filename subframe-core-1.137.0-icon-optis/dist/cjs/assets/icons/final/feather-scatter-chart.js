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

const SvgFeatherScatterChart = (props) => (React__namespace.createElement("svg", Object.assign({ xmlns: "http://www.w3.org/2000/svg", width: "1em", height: "1em", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: 2, strokeLinecap: "round", strokeLinejoin: "round" }, props),
    React__namespace.createElement("circle", { cx: 7.5, cy: 7.5, r: 0.5 }),
    React__namespace.createElement("circle", { cx: 18.5, cy: 5.5, r: 0.5 }),
    React__namespace.createElement("circle", { cx: 11.5, cy: 11.5, r: 0.5 }),
    React__namespace.createElement("circle", { cx: 7.5, cy: 16.5, r: 0.5 }),
    React__namespace.createElement("circle", { cx: 17.5, cy: 14.5, r: 0.5 }),
    React__namespace.createElement("path", { d: "M3 3v18h18" })));

module.exports = SvgFeatherScatterChart;
