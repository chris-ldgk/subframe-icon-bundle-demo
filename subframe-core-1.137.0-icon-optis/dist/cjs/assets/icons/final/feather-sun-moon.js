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

const SvgFeatherSunMoon = (props) => (React__namespace.createElement("svg", Object.assign({ xmlns: "http://www.w3.org/2000/svg", width: "1em", height: "1em", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: 2, strokeLinecap: "round", strokeLinejoin: "round" }, props),
    React__namespace.createElement("path", { d: "M12 8a2.83 2.83 0 0 0 4 4 4 4 0 1 1-4-4" }),
    React__namespace.createElement("path", { d: "M12 2v2" }),
    React__namespace.createElement("path", { d: "M12 20v2" }),
    React__namespace.createElement("path", { d: "m4.9 4.9 1.4 1.4" }),
    React__namespace.createElement("path", { d: "m17.7 17.7 1.4 1.4" }),
    React__namespace.createElement("path", { d: "M2 12h2" }),
    React__namespace.createElement("path", { d: "M20 12h2" }),
    React__namespace.createElement("path", { d: "m6.3 17.7-1.4 1.4" }),
    React__namespace.createElement("path", { d: "m19.1 4.9-1.4 1.4" })));

module.exports = SvgFeatherSunMoon;
