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

const SvgFeatherBug = (props) => (React__namespace.createElement("svg", Object.assign({ xmlns: "http://www.w3.org/2000/svg", width: "1em", height: "1em", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: 2, strokeLinecap: "round", strokeLinejoin: "round" }, props),
    React__namespace.createElement("path", { d: "m8 2 1.88 1.88" }),
    React__namespace.createElement("path", { d: "M14.12 3.88 16 2" }),
    React__namespace.createElement("path", { d: "M9 7.13v-1a3.003 3.003 0 1 1 6 0v1" }),
    React__namespace.createElement("path", { d: "M12 20c-3.3 0-6-2.7-6-6v-3a4 4 0 0 1 4-4h4a4 4 0 0 1 4 4v3c0 3.3-2.7 6-6 6" }),
    React__namespace.createElement("path", { d: "M12 20v-9" }),
    React__namespace.createElement("path", { d: "M6.53 9C4.6 8.8 3 7.1 3 5" }),
    React__namespace.createElement("path", { d: "M6 13H2" }),
    React__namespace.createElement("path", { d: "M3 21c0-2.1 1.7-3.9 3.8-4" }),
    React__namespace.createElement("path", { d: "M20.97 5c0 2.1-1.6 3.8-3.5 4" }),
    React__namespace.createElement("path", { d: "M22 13h-4" }),
    React__namespace.createElement("path", { d: "M17.2 17c2.1.1 3.8 1.9 3.8 4" })));

module.exports = SvgFeatherBug;
