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

const SvgFeatherBiohazard = (props) => (React__namespace.createElement("svg", Object.assign({ xmlns: "http://www.w3.org/2000/svg", width: "1em", height: "1em", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: 2, strokeLinecap: "round", strokeLinejoin: "round" }, props),
    React__namespace.createElement("circle", { cx: 12, cy: 11.9, r: 2 }),
    React__namespace.createElement("path", { d: "M6.7 3.4c-.9 2.5 0 5.2 2.2 6.7C6.5 9 3.7 9.6 2 11.6" }),
    React__namespace.createElement("path", { d: "m8.9 10.1 1.4.8" }),
    React__namespace.createElement("path", { d: "M17.3 3.4c.9 2.5 0 5.2-2.2 6.7 2.4-1.2 5.2-.6 6.9 1.5" }),
    React__namespace.createElement("path", { d: "m15.1 10.1-1.4.8" }),
    React__namespace.createElement("path", { d: "M16.7 20.8c-2.6-.4-4.6-2.6-4.7-5.3-.2 2.6-2.1 4.8-4.7 5.2" }),
    React__namespace.createElement("path", { d: "M12 13.9v1.6" }),
    React__namespace.createElement("path", { d: "M13.5 5.4c-1-.2-2-.2-3 0" }),
    React__namespace.createElement("path", { d: "M17 16.4c.7-.7 1.2-1.6 1.5-2.5" }),
    React__namespace.createElement("path", { d: "M5.5 13.9c.3.9.8 1.8 1.5 2.5" })));

module.exports = SvgFeatherBiohazard;
