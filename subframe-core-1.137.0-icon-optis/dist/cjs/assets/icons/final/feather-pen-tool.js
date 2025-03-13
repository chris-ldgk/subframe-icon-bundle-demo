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

const SvgFeatherPenTool = (props) => (React__namespace.createElement("svg", Object.assign({ xmlns: "http://www.w3.org/2000/svg", width: "1em", height: "1em", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: 2, strokeLinecap: "round", strokeLinejoin: "round" }, props),
    React__namespace.createElement("path", { d: "m12 19 7-7 3 3-7 7-3-3z" }),
    React__namespace.createElement("path", { d: "m18 13-1.5-7.5L2 2l3.5 14.5L13 18l5-5z" }),
    React__namespace.createElement("path", { d: "m2 2 7.586 7.586" }),
    React__namespace.createElement("circle", { cx: 11, cy: 11, r: 2 })));

module.exports = SvgFeatherPenTool;
