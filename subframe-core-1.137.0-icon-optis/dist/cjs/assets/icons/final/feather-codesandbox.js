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

const SvgFeatherCodesandbox = (props) => (React__namespace.createElement("svg", Object.assign({ xmlns: "http://www.w3.org/2000/svg", width: "1em", height: "1em", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: 2, strokeLinecap: "round", strokeLinejoin: "round" }, props),
    React__namespace.createElement("path", { d: "M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z" }),
    React__namespace.createElement("polyline", { points: "7.5 4.21 12 6.81 16.5 4.21" }),
    React__namespace.createElement("polyline", { points: "7.5 19.79 7.5 14.6 3 12" }),
    React__namespace.createElement("polyline", { points: "21 12 16.5 14.6 16.5 19.79" }),
    React__namespace.createElement("polyline", { points: "3.27 6.96 12 12.01 20.73 6.96" }),
    React__namespace.createElement("line", { x1: 12, x2: 12, y1: 22.08, y2: 12 })));

module.exports = SvgFeatherCodesandbox;
