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

const SvgFeatherOrbit = (props) => (React__namespace.createElement("svg", Object.assign({ xmlns: "http://www.w3.org/2000/svg", width: "1em", height: "1em", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: 2, strokeLinecap: "round", strokeLinejoin: "round" }, props),
    React__namespace.createElement("circle", { cx: 12, cy: 12, r: 3 }),
    React__namespace.createElement("circle", { cx: 19, cy: 5, r: 2 }),
    React__namespace.createElement("circle", { cx: 5, cy: 19, r: 2 }),
    React__namespace.createElement("path", { d: "M10.4 21.9a10 10 0 0 0 9.941-15.416" }),
    React__namespace.createElement("path", { d: "M13.5 2.1a10 10 0 0 0-9.841 15.416" })));

module.exports = SvgFeatherOrbit;
