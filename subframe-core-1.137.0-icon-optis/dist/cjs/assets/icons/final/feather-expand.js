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

const SvgFeatherExpand = (props) => (React__namespace.createElement("svg", Object.assign({ xmlns: "http://www.w3.org/2000/svg", width: "1em", height: "1em", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: 2, strokeLinecap: "round", strokeLinejoin: "round" }, props),
    React__namespace.createElement("path", { d: "m21 21-6-6m6 6v-4.8m0 4.8h-4.8" }),
    React__namespace.createElement("path", { d: "M3 16.2V21m0 0h4.8M3 21l6-6" }),
    React__namespace.createElement("path", { d: "M21 7.8V3m0 0h-4.8M21 3l-6 6" }),
    React__namespace.createElement("path", { d: "M3 7.8V3m0 0h4.8M3 3l6 6" })));

module.exports = SvgFeatherExpand;
