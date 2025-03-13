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

const SvgFeatherAlarmClockOff = (props) => (React__namespace.createElement("svg", Object.assign({ xmlns: "http://www.w3.org/2000/svg", width: "1em", height: "1em", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: 2, strokeLinecap: "round", strokeLinejoin: "round" }, props),
    React__namespace.createElement("path", { d: "M6.87 6.87a8 8 0 1 0 11.26 11.26" }),
    React__namespace.createElement("path", { d: "M19.9 14.25a8 8 0 0 0-9.15-9.15" }),
    React__namespace.createElement("path", { d: "m22 6-3-3" }),
    React__namespace.createElement("path", { d: "M6.26 18.67 4 21" }),
    React__namespace.createElement("path", { d: "m2 2 20 20" }),
    React__namespace.createElement("path", { d: "M4 4 2 6" })));

module.exports = SvgFeatherAlarmClockOff;
