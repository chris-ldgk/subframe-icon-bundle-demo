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

const SvgFeatherShrink = (props) => (React__namespace.createElement("svg", Object.assign({ xmlns: "http://www.w3.org/2000/svg", width: "1em", height: "1em", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: 2, strokeLinecap: "round", strokeLinejoin: "round" }, props),
    React__namespace.createElement("path", { d: "m15 15 6 6m-6-6v4.8m0-4.8h4.8" }),
    React__namespace.createElement("path", { d: "M9 19.8V15m0 0H4.2M9 15l-6 6" }),
    React__namespace.createElement("path", { d: "M15 4.2V9m0 0h4.8M15 9l6-6" }),
    React__namespace.createElement("path", { d: "M9 4.2V9m0 0H4.2M9 9 3 3" })));

module.exports = SvgFeatherShrink;
