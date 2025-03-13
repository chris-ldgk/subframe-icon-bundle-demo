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

const SvgFeatherTentTree = (props) => (React__namespace.createElement("svg", Object.assign({ xmlns: "http://www.w3.org/2000/svg", width: "1em", height: "1em", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: 2, strokeLinecap: "round", strokeLinejoin: "round" }, props),
    React__namespace.createElement("circle", { cx: 4, cy: 4, r: 2 }),
    React__namespace.createElement("path", { d: "m14 5 3-3 3 3" }),
    React__namespace.createElement("path", { d: "m14 10 3-3 3 3" }),
    React__namespace.createElement("path", { d: "M17 14V2" }),
    React__namespace.createElement("path", { d: "M17 14H7l-5 8h20Z" }),
    React__namespace.createElement("path", { d: "M8 14v8" }),
    React__namespace.createElement("path", { d: "m9 14 5 8" })));

module.exports = SvgFeatherTentTree;
