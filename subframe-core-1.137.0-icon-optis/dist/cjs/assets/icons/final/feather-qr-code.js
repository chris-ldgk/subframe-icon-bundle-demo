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

const SvgFeatherQrCode = (props) => (React__namespace.createElement("svg", Object.assign({ xmlns: "http://www.w3.org/2000/svg", width: "1em", height: "1em", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: 2, strokeLinecap: "round", strokeLinejoin: "round" }, props),
    React__namespace.createElement("rect", { width: 5, height: 5, x: 3, y: 3, rx: 1 }),
    React__namespace.createElement("rect", { width: 5, height: 5, x: 16, y: 3, rx: 1 }),
    React__namespace.createElement("rect", { width: 5, height: 5, x: 3, y: 16, rx: 1 }),
    React__namespace.createElement("path", { d: "M21 16h-3a2 2 0 0 0-2 2v3" }),
    React__namespace.createElement("path", { d: "M21 21v.01" }),
    React__namespace.createElement("path", { d: "M12 7v3a2 2 0 0 1-2 2H7" }),
    React__namespace.createElement("path", { d: "M3 12h.01" }),
    React__namespace.createElement("path", { d: "M12 3h.01" }),
    React__namespace.createElement("path", { d: "M12 16v.01" }),
    React__namespace.createElement("path", { d: "M16 12h1" }),
    React__namespace.createElement("path", { d: "M21 12v.01" }),
    React__namespace.createElement("path", { d: "M12 21v-1" })));

module.exports = SvgFeatherQrCode;
