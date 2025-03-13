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

const SvgFeatherCalendarSearch = (props) => (React__namespace.createElement("svg", Object.assign({ xmlns: "http://www.w3.org/2000/svg", width: "1em", height: "1em", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: 2, strokeLinecap: "round", strokeLinejoin: "round" }, props),
    React__namespace.createElement("path", { d: "M21 12V6a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v14c0 1.1.9 2 2 2h7.5" }),
    React__namespace.createElement("path", { d: "M16 2v4" }),
    React__namespace.createElement("path", { d: "M8 2v4" }),
    React__namespace.createElement("path", { d: "M3 10h18" }),
    React__namespace.createElement("path", { d: "M18 21a3 3 0 1 0 0-6 3 3 0 0 0 0 6v0Z" }),
    React__namespace.createElement("path", { d: "m22 22-1.5-1.5" })));

module.exports = SvgFeatherCalendarSearch;
