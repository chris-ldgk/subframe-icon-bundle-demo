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

const SvgFeatherMousePointerClick = (props) => (React__namespace.createElement("svg", Object.assign({ xmlns: "http://www.w3.org/2000/svg", width: "1em", height: "1em", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: 2, strokeLinecap: "round", strokeLinejoin: "round" }, props),
    React__namespace.createElement("path", { d: "m9 9 5 12 1.8-5.2L21 14Z" }),
    React__namespace.createElement("path", { d: "M7.2 2.2 8 5.1" }),
    React__namespace.createElement("path", { d: "m5.1 8-2.9-.8" }),
    React__namespace.createElement("path", { d: "M14 4.1 12 6" }),
    React__namespace.createElement("path", { d: "m6 12-1.9 2" })));

module.exports = SvgFeatherMousePointerClick;
