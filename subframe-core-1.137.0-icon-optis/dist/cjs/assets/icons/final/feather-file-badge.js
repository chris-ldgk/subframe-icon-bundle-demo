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

const SvgFeatherFileBadge = (props) => (React__namespace.createElement("svg", Object.assign({ xmlns: "http://www.w3.org/2000/svg", width: "1em", height: "1em", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: 2, strokeLinecap: "round", strokeLinejoin: "round" }, props),
    React__namespace.createElement("path", { d: "M4 7V4a2 2 0 0 1 2-2h8.5L20 7.5V20a2 2 0 0 1-2 2h-6" }),
    React__namespace.createElement("polyline", { points: "14 2 14 8 20 8" }),
    React__namespace.createElement("path", { d: "M5 17a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z" }),
    React__namespace.createElement("path", { d: "M7 16.5 8 22l-3-1-3 1 1-5.5" })));

module.exports = SvgFeatherFileBadge;
