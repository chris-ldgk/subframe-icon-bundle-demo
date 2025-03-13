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

const SvgFeatherAntenna = (props) => (React__namespace.createElement("svg", Object.assign({ xmlns: "http://www.w3.org/2000/svg", width: "1em", height: "1em", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: 2, strokeLinecap: "round", strokeLinejoin: "round" }, props),
    React__namespace.createElement("path", { d: "M2 12 7 2" }),
    React__namespace.createElement("path", { d: "m7 12 5-10" }),
    React__namespace.createElement("path", { d: "m12 12 5-10" }),
    React__namespace.createElement("path", { d: "m17 12 5-10" }),
    React__namespace.createElement("path", { d: "M4.5 7h15" }),
    React__namespace.createElement("path", { d: "M12 16v6" })));

module.exports = SvgFeatherAntenna;
