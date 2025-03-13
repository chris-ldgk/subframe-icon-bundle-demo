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

const SvgFeatherTrainFrontTunnel = (props) => (React__namespace.createElement("svg", Object.assign({ xmlns: "http://www.w3.org/2000/svg", width: "1em", height: "1em", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: 2, strokeLinecap: "round", strokeLinejoin: "round" }, props),
    React__namespace.createElement("path", { d: "M2 22V12a10 10 0 1 1 20 0v10" }),
    React__namespace.createElement("path", { d: "M15 6.8v1.4a3 2.8 0 1 1-6 0V6.8" }),
    React__namespace.createElement("path", { d: "M10 15h.01" }),
    React__namespace.createElement("path", { d: "M14 15h.01" }),
    React__namespace.createElement("path", { d: "M10 19a4 4 0 0 1-4-4v-3a6 6 0 1 1 12 0v3a4 4 0 0 1-4 4Z" }),
    React__namespace.createElement("path", { d: "m9 19-2 3" }),
    React__namespace.createElement("path", { d: "m15 19 2 3" })));

module.exports = SvgFeatherTrainFrontTunnel;
