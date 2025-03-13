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

const SvgFeatherCableCar = (props) => (React__namespace.createElement("svg", Object.assign({ xmlns: "http://www.w3.org/2000/svg", width: "1em", height: "1em", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: 2, strokeLinecap: "round", strokeLinejoin: "round" }, props),
    React__namespace.createElement("path", { d: "M10 3h.01" }),
    React__namespace.createElement("path", { d: "M14 2h.01" }),
    React__namespace.createElement("path", { d: "m2 9 20-5" }),
    React__namespace.createElement("path", { d: "M12 12V6.5" }),
    React__namespace.createElement("rect", { width: 16, height: 10, x: 4, y: 12, rx: 3 }),
    React__namespace.createElement("path", { d: "M9 12v5" }),
    React__namespace.createElement("path", { d: "M15 12v5" }),
    React__namespace.createElement("path", { d: "M4 17h16" })));

module.exports = SvgFeatherCableCar;
