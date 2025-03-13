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

const SvgFeatherMegaphoneOff = (props) => (React__namespace.createElement("svg", Object.assign({ xmlns: "http://www.w3.org/2000/svg", width: "1em", height: "1em", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: 2, strokeLinecap: "round", strokeLinejoin: "round" }, props),
    React__namespace.createElement("path", { d: "M9.26 9.26 3 11v3l14.14 3.14" }),
    React__namespace.createElement("path", { d: "M21 15.34V6l-7.31 2.03" }),
    React__namespace.createElement("path", { d: "M11.6 16.8a3 3 0 1 1-5.8-1.6" }),
    React__namespace.createElement("line", { x1: 2, x2: 22, y1: 2, y2: 22 })));

module.exports = SvgFeatherMegaphoneOff;
