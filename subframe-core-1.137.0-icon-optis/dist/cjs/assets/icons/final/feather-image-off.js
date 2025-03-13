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

const SvgFeatherImageOff = (props) => (React__namespace.createElement("svg", Object.assign({ xmlns: "http://www.w3.org/2000/svg", width: "1em", height: "1em", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: 2, strokeLinecap: "round", strokeLinejoin: "round" }, props),
    React__namespace.createElement("line", { x1: 2, x2: 22, y1: 2, y2: 22 }),
    React__namespace.createElement("path", { d: "M10.41 10.41a2 2 0 1 1-2.83-2.83" }),
    React__namespace.createElement("line", { x1: 13.5, x2: 6, y1: 13.5, y2: 21 }),
    React__namespace.createElement("line", { x1: 18, x2: 21, y1: 12, y2: 15 }),
    React__namespace.createElement("path", { d: "M3.59 3.59A1.99 1.99 0 0 0 3 5v14a2 2 0 0 0 2 2h14c.55 0 1.052-.22 1.41-.59" }),
    React__namespace.createElement("path", { d: "M21 15V5a2 2 0 0 0-2-2H9" })));

module.exports = SvgFeatherImageOff;
