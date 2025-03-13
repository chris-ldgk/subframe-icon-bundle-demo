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

const SvgFeatherSquareCornerBl = (props) => (React__namespace.createElement("svg", Object.assign({ xmlns: "http://www.w3.org/2000/svg", width: "1em", height: "1em", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: 2, strokeLinecap: "round", strokeLinejoin: "round" }, props),
    React__namespace.createElement("path", { d: "M3.00501 15.995L3.00501 18.995C3.00501 19.5254 3.21572 20.0341 3.59079 20.4092C3.96586 20.7843 4.47457 20.995 5.005 20.995L8.005 20.995M21.005 20.995L20.995 20.995M21.005 2.995L20.995 2.995M3.00501 2.99499L2.99501 2.99499" })));

module.exports = SvgFeatherSquareCornerBl;
