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

const SvgFeatherCalendarOff = (props) => (React__namespace.createElement("svg", Object.assign({ xmlns: "http://www.w3.org/2000/svg", width: "1em", height: "1em", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: 2, strokeLinecap: "round", strokeLinejoin: "round" }, props),
    React__namespace.createElement("path", { d: "M4.18 4.18A2 2 0 0 0 3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 1.82-1.18" }),
    React__namespace.createElement("path", { d: "M21 15.5V6a2 2 0 0 0-2-2H9.5" }),
    React__namespace.createElement("path", { d: "M16 2v4" }),
    React__namespace.createElement("path", { d: "M3 10h7" }),
    React__namespace.createElement("path", { d: "M21 10h-5.5" }),
    React__namespace.createElement("line", { x1: 2, x2: 22, y1: 2, y2: 22 })));

module.exports = SvgFeatherCalendarOff;
