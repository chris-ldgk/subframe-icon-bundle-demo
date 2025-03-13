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

const SvgFeatherConstruction = (props) => (React__namespace.createElement("svg", Object.assign({ xmlns: "http://www.w3.org/2000/svg", width: "1em", height: "1em", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: 2, strokeLinecap: "round", strokeLinejoin: "round" }, props),
    React__namespace.createElement("rect", { x: 2, y: 6, width: 20, height: 8, rx: 1 }),
    React__namespace.createElement("path", { d: "M17 14v7" }),
    React__namespace.createElement("path", { d: "M7 14v7" }),
    React__namespace.createElement("path", { d: "M17 3v3" }),
    React__namespace.createElement("path", { d: "M7 3v3" }),
    React__namespace.createElement("path", { d: "M10 14 2.3 6.3" }),
    React__namespace.createElement("path", { d: "m14 6 7.7 7.7" }),
    React__namespace.createElement("path", { d: "m8 6 8 8" })));

module.exports = SvgFeatherConstruction;
