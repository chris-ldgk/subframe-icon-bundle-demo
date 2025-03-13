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

const SvgFeatherTouchpadOff = (props) => (React__namespace.createElement("svg", Object.assign({ xmlns: "http://www.w3.org/2000/svg", width: "1em", height: "1em", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: 2, strokeLinecap: "round", strokeLinejoin: "round" }, props),
    React__namespace.createElement("path", { d: "M4 4a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h16" }),
    React__namespace.createElement("path", { d: "M2 14h12" }),
    React__namespace.createElement("path", { d: "M22 14h-2" }),
    React__namespace.createElement("path", { d: "M12 20v-6" }),
    React__namespace.createElement("path", { d: "m2 2 20 20" }),
    React__namespace.createElement("path", { d: "M22 16V6a2 2 0 0 0-2-2H10" })));

module.exports = SvgFeatherTouchpadOff;
