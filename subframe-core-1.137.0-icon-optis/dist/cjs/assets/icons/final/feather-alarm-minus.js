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

const SvgFeatherAlarmMinus = (props) => (React__namespace.createElement("svg", Object.assign({ xmlns: "http://www.w3.org/2000/svg", width: "1em", height: "1em", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: 2, strokeLinecap: "round", strokeLinejoin: "round" }, props),
    React__namespace.createElement("circle", { cx: 12, cy: 13, r: 8 }),
    React__namespace.createElement("path", { d: "M5 3 2 6" }),
    React__namespace.createElement("path", { d: "m22 6-3-3" }),
    React__namespace.createElement("path", { d: "M6.38 18.7 4 21" }),
    React__namespace.createElement("path", { d: "M17.64 18.67 20 21" }),
    React__namespace.createElement("path", { d: "M9 13h6" })));

module.exports = SvgFeatherAlarmMinus;
