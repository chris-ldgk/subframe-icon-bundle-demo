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

const SvgFeatherBoomBox = (props) => (React__namespace.createElement("svg", Object.assign({ xmlns: "http://www.w3.org/2000/svg", width: "1em", height: "1em", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: 2, strokeLinecap: "round", strokeLinejoin: "round" }, props),
    React__namespace.createElement("path", { d: "M4 9V5a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v4" }),
    React__namespace.createElement("path", { d: "M8 8v1" }),
    React__namespace.createElement("path", { d: "M12 8v1" }),
    React__namespace.createElement("path", { d: "M16 8v1" }),
    React__namespace.createElement("rect", { width: 20, height: 12, x: 2, y: 9, rx: 2 }),
    React__namespace.createElement("circle", { cx: 8, cy: 15, r: 2 }),
    React__namespace.createElement("circle", { cx: 16, cy: 15, r: 2 })));

module.exports = SvgFeatherBoomBox;
