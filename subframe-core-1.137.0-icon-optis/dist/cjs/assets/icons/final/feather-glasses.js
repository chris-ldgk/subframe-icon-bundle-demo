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

const SvgFeatherGlasses = (props) => (React__namespace.createElement("svg", Object.assign({ xmlns: "http://www.w3.org/2000/svg", width: "1em", height: "1em", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: 2, strokeLinecap: "round", strokeLinejoin: "round" }, props),
    React__namespace.createElement("circle", { cx: 6, cy: 15, r: 4 }),
    React__namespace.createElement("circle", { cx: 18, cy: 15, r: 4 }),
    React__namespace.createElement("path", { d: "M14 15a2 2 0 0 0-2-2 2 2 0 0 0-2 2" }),
    React__namespace.createElement("path", { d: "M2.5 13 5 7c.7-1.3 1.4-2 3-2" }),
    React__namespace.createElement("path", { d: "M21.5 13 19 7c-.7-1.3-1.5-2-3-2" })));

module.exports = SvgFeatherGlasses;
