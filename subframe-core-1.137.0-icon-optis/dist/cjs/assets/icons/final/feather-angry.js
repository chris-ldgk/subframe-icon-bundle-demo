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

const SvgFeatherAngry = (props) => (React__namespace.createElement("svg", Object.assign({ xmlns: "http://www.w3.org/2000/svg", width: "1em", height: "1em", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: 2, strokeLinecap: "round", strokeLinejoin: "round" }, props),
    React__namespace.createElement("circle", { cx: 12, cy: 12, r: 10 }),
    React__namespace.createElement("path", { d: "M16 16s-1.5-2-4-2-4 2-4 2" }),
    React__namespace.createElement("path", { d: "M7.5 8 10 9" }),
    React__namespace.createElement("path", { d: "m14 9 2.5-1" }),
    React__namespace.createElement("path", { d: "M9 10h0" }),
    React__namespace.createElement("path", { d: "M15 10h0" })));

module.exports = SvgFeatherAngry;
