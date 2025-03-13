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

const SvgFeatherSiren = (props) => (React__namespace.createElement("svg", Object.assign({ xmlns: "http://www.w3.org/2000/svg", width: "1em", height: "1em", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: 2, strokeLinecap: "round", strokeLinejoin: "round" }, props),
    React__namespace.createElement("path", { d: "M7 12a5 5 0 0 1 5-5v0a5 5 0 0 1 5 5v6H7v-6Z" }),
    React__namespace.createElement("path", { d: "M5 20a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2v2H5v-2Z" }),
    React__namespace.createElement("path", { d: "M21 12h1" }),
    React__namespace.createElement("path", { d: "M18.5 4.5 18 5" }),
    React__namespace.createElement("path", { d: "M2 12h1" }),
    React__namespace.createElement("path", { d: "M12 2v1" }),
    React__namespace.createElement("path", { d: "m4.929 4.929.707.707" }),
    React__namespace.createElement("path", { d: "M12 12v6" })));

module.exports = SvgFeatherSiren;
