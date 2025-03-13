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

const SvgFeatherCircleDotDashed = (props) => (React__namespace.createElement("svg", Object.assign({ xmlns: "http://www.w3.org/2000/svg", width: "1em", height: "1em", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: 2, strokeLinecap: "round", strokeLinejoin: "round" }, props),
    React__namespace.createElement("path", { d: "M10.1 2.18a9.93 9.93 0 0 1 3.8 0" }),
    React__namespace.createElement("path", { d: "M17.6 3.71a9.95 9.95 0 0 1 2.69 2.7" }),
    React__namespace.createElement("path", { d: "M21.82 10.1a9.93 9.93 0 0 1 0 3.8" }),
    React__namespace.createElement("path", { d: "M20.29 17.6a9.95 9.95 0 0 1-2.7 2.69" }),
    React__namespace.createElement("path", { d: "M13.9 21.82a9.94 9.94 0 0 1-3.8 0" }),
    React__namespace.createElement("path", { d: "M6.4 20.29a9.95 9.95 0 0 1-2.69-2.7" }),
    React__namespace.createElement("path", { d: "M2.18 13.9a9.93 9.93 0 0 1 0-3.8" }),
    React__namespace.createElement("path", { d: "M3.71 6.4a9.95 9.95 0 0 1 2.7-2.69" }),
    React__namespace.createElement("circle", { cx: 12, cy: 12, r: 1 })));

module.exports = SvgFeatherCircleDotDashed;
