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

const SvgFeatherFerrisWheel = (props) => (React__namespace.createElement("svg", Object.assign({ xmlns: "http://www.w3.org/2000/svg", width: "1em", height: "1em", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: 2, strokeLinecap: "round", strokeLinejoin: "round" }, props),
    React__namespace.createElement("circle", { cx: 12, cy: 12, r: 2 }),
    React__namespace.createElement("path", { d: "M12 2v4" }),
    React__namespace.createElement("path", { d: "m6.8 15-3.5 2" }),
    React__namespace.createElement("path", { d: "m20.7 7-3.5 2" }),
    React__namespace.createElement("path", { d: "M6.8 9 3.3 7" }),
    React__namespace.createElement("path", { d: "m20.7 17-3.5-2" }),
    React__namespace.createElement("path", { d: "m9 22 3-8 3 8" }),
    React__namespace.createElement("path", { d: "M8 22h8" }),
    React__namespace.createElement("path", { d: "M18 18.7a9 9 0 1 0-12 0" })));

module.exports = SvgFeatherFerrisWheel;
