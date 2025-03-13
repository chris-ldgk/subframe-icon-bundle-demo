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

const SvgFeatherBlinds = (props) => (React__namespace.createElement("svg", Object.assign({ xmlns: "http://www.w3.org/2000/svg", width: "1em", height: "1em", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: 2, strokeLinecap: "round", strokeLinejoin: "round" }, props),
    React__namespace.createElement("path", { d: "M3 3h18" }),
    React__namespace.createElement("path", { d: "M20 7H8" }),
    React__namespace.createElement("path", { d: "M20 11H8" }),
    React__namespace.createElement("path", { d: "M10 19h10" }),
    React__namespace.createElement("path", { d: "M8 15h12" }),
    React__namespace.createElement("path", { d: "M4 3v14" }),
    React__namespace.createElement("circle", { cx: 4, cy: 19, r: 2 })));

module.exports = SvgFeatherBlinds;
