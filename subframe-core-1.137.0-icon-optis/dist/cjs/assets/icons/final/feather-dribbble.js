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

const SvgFeatherDribbble = (props) => (React__namespace.createElement("svg", Object.assign({ xmlns: "http://www.w3.org/2000/svg", width: "1em", height: "1em", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: 2, strokeLinecap: "round", strokeLinejoin: "round" }, props),
    React__namespace.createElement("circle", { cx: 12, cy: 12, r: 10 }),
    React__namespace.createElement("path", { d: "M19.13 5.09C15.22 9.14 10 10.44 2.25 10.94" }),
    React__namespace.createElement("path", { d: "M21.75 12.84c-6.62-1.41-12.14 1-16.38 6.32" }),
    React__namespace.createElement("path", { d: "M8.56 2.75c4.37 6 6 9.42 8 17.72" })));

module.exports = SvgFeatherDribbble;
