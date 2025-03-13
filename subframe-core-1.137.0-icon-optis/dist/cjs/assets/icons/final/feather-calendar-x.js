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

const SvgFeatherCalendarX = (props) => (React__namespace.createElement("svg", Object.assign({ xmlns: "http://www.w3.org/2000/svg", width: "1em", height: "1em", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: 2, strokeLinecap: "round", strokeLinejoin: "round" }, props),
    React__namespace.createElement("rect", { width: 18, height: 18, x: 3, y: 4, rx: 2, ry: 2 }),
    React__namespace.createElement("line", { x1: 16, x2: 16, y1: 2, y2: 6 }),
    React__namespace.createElement("line", { x1: 8, x2: 8, y1: 2, y2: 6 }),
    React__namespace.createElement("line", { x1: 3, x2: 21, y1: 10, y2: 10 }),
    React__namespace.createElement("line", { x1: 10, x2: 14, y1: 14, y2: 18 }),
    React__namespace.createElement("line", { x1: 14, x2: 10, y1: 14, y2: 18 })));

module.exports = SvgFeatherCalendarX;
