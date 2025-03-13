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

const SvgFeatherCloudCog = (props) => (React__namespace.createElement("svg", Object.assign({ xmlns: "http://www.w3.org/2000/svg", width: "1em", height: "1em", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: 2, strokeLinecap: "round", strokeLinejoin: "round" }, props),
    React__namespace.createElement("circle", { cx: 12, cy: 17, r: 3 }),
    React__namespace.createElement("path", { d: "M4.2 15.1A7 7 0 1 1 15.71 8h1.79a4.5 4.5 0 0 1 2.5 8.2" }),
    React__namespace.createElement("path", { d: "m15.7 18.4-.9-.3" }),
    React__namespace.createElement("path", { d: "m9.2 15.9-.9-.3" }),
    React__namespace.createElement("path", { d: "m10.6 20.7.3-.9" }),
    React__namespace.createElement("path", { d: "m13.1 14.2.3-.9" }),
    React__namespace.createElement("path", { d: "m13.6 20.7-.4-1" }),
    React__namespace.createElement("path", { d: "m10.8 14.3-.4-1" }),
    React__namespace.createElement("path", { d: "m8.3 18.6 1-.4" }),
    React__namespace.createElement("path", { d: "m14.7 15.8 1-.4" })));

module.exports = SvgFeatherCloudCog;
